import React, { useState, useRef, useEffect } from 'react';
import { Animated, ActivityIndicator, Text } from 'react-native';
import { styles } from './styles';

import { Header } from './components/Header';
import { Widget } from './components/Widget';
import { CriptoList } from './components/CriptoList';
import { AddQuantityPopup } from './components/AddQuantityPopup';

import { LoadFile } from './services/FileManagement';
import { GetCoinsMap } from './services/GetDataFromAPI';
import { themes } from './themes';

import { CoinPriceAutoUpdate } from './services/FileManagement';

export default function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isUpdatingCoins, setIsUpdatingCoins] = useState(false);

  const [newQuantity, setNewQuantity] = useState(null);
  const [addedCoin, setAddedCoin] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const showPopup = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    handleAppStarting();
  }, []);

  const handleAppStarting = async () => {
    // execute on Init
    await GetCoinsMap();
    await CoinPriceAutoUpdate();
    setAllCoins(await LoadFile());

    // schedule next auto executions
    setInterval(async () => {
      await CoinPriceAutoUpdate();
      setAllCoins(await LoadFile());
    }, 60000 * 5);
  }

  useEffect(() => {
    //changes selectedCoin inside addedCoin to the new selectedCoin
    if (selectedCoin) {
      if (!addedCoin)
        getCoins();
    }
  }, [selectedCoin]);

  useEffect(() => {
    if (isPopupOpened || isUpdatingCoins) {
      Animated.timing(showPopup, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false
      }).start();
    }
    else {
      Animated.timing(showPopup, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false
      }).start();
    }
  }, [isPopupOpened, isUpdatingCoins]);


  return (
    <>
      <Animated.View style={{
        ...styles.container,
        opacity: showPopup.interpolate({
          inputRange: [0, 1],
          outputRange: [0.6, 1]
        })
      }}
        pointerEvents={(isPopupOpened || isUpdatingCoins) ? 'none' : 'auto'}
      >
        <Header />
        <CriptoList
          setIsPopupOpened={setIsPopupOpened}
          newQuantity={newQuantity}
          addedCoin={addedCoin}
          allCoins={allCoins}
          setSelectedCoin={setSelectedCoin}
          selectedCoin={selectedCoin}
          setAllCoins={setAllCoins}
          setIsUpdatingCoins={setIsUpdatingCoins}
        />
        <Widget
          setAddedCoin={setAddedCoin}
          setAllCoins={setAllCoins}
          setIsUpdatingCoins={setIsUpdatingCoins}
          setIsPopupOpened={setIsPopupOpened}
          setSelectedCoin={setSelectedCoin}
        />
      </Animated.View>
      {isPopupOpened &&
        <AddQuantityPopup
          setIsPopupOpened={setIsPopupOpened}
          setNewQuantity={setNewQuantity}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          setAllCoins={setAllCoins}
          setIsUpdatingCoins={setIsUpdatingCoins}
        />}
      {isUpdatingCoins &&
        <>
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            color={themes.colors.sixth} />
          <Text style={styles.loadingText}>
            Atualizando Dados...
          </Text>
        </>
      }

    </>
  );
} 
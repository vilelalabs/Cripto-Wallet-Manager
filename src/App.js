import React, { useState, useRef, useEffect } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import { styles } from './styles';

import { Header } from './components/Header';
import { Widget } from './components/Widget';
import { CriptoList } from './components/CriptoList';
import { AddQuantityPopup } from './components/AddQuantityPopup';

import { LoadFile } from './services/FileManagement';

export default function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isSearchingCoins, setIsSearchingCoins] = useState(false); //ver como aplicar do melhor modo

  const [newQuantity, setNewQuantity] = useState(null);
  const [addedCoins, setAddedCoins] = useState([]);

  const showPopup = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!addedCoins) {
      getCoins();
    }
  }, []);
  const getCoins = async () => {
    const coins = await LoadFile();
    console.log('getCoins:', coins);
    setAddedCoins((addedCoins) => ([...addedCoins, JSON.parse(coins)]));
  };


  useEffect(() => {
    if (isPopupOpened || isSearchingCoins) {
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
  }, [isPopupOpened, isSearchingCoins]);


  return (
    <>
      <Animated.View style={{
        ...styles.container,
        opacity: showPopup.interpolate({
          inputRange: [0, 1],
          outputRange: [0.6, 1]
        })
      }}
        pointerEvents={isPopupOpened ? 'none' : 'auto'}
      >
        <Header />
        <CriptoList
          setIsPopupOpened={setIsPopupOpened}
          newQuantity={newQuantity}
          addedCoins={addedCoins}
        />
        <Widget
          setAddedCoins={setAddedCoins}
        />
      </Animated.View>
      {isPopupOpened &&
        <AddQuantityPopup
          setIsPopupOpened={setIsPopupOpened}
          setNewQuantity={setNewQuantity}
        />}
      {isSearchingCoins &&
        <ActivityIndicator size="large" color="#0000ff" />
      }

    </>
  );
} 
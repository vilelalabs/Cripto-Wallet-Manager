import React, { useState, useRef, useEffect } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import { styles } from './styles';

import { Header } from './components/Header';
import { Widget } from './components/Widget';
import { CriptoList } from './components/CriptoList';
import { AddQuantityPopup } from './components/AddQuantityPopup';

import { LoadFile, CreateFileForFirstInit } from './services/FileManagement';
import { GetCoinsMap } from './services/GetDataFromAPI';

CreateFileForFirstInit();
//GetCoinsMap();

export default function App() {

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isSearchingCoins, setIsSearchingCoins] = useState(false); //ver como aplicar do melhor modo

  const [newQuantity, setNewQuantity] = useState(null);
  const [addedCoin, setAddedCoin] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const showPopup = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //changes  selectedCoin inside addedCoin to the new selectedCoin
    if (selectedCoin) {
      if (!addedCoin)
        getCoins();
      console.log('selectedCoin:', selectedCoin);

    }
  }, [selectedCoin]);


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
          addedCoin={addedCoin}
          allCoins={allCoins}
          setSelectedCoin={setSelectedCoin}
          selectedCoin={selectedCoin}
        />
        <Widget
          setAddedCoin={setAddedCoin}
          setAllCoins={setAllCoins}
        />
      </Animated.View>
      {isPopupOpened &&
        <AddQuantityPopup
          setIsPopupOpened={setIsPopupOpened}
          setNewQuantity={setNewQuantity}
          selectedCoin={selectedCoin}
          setSelectedCoin={setSelectedCoin}
          setAllCoins={setAllCoins}
        />}
      {isSearchingCoins &&
        <ActivityIndicator size="large" color="#0000ff" />
      }

    </>
  );
} 
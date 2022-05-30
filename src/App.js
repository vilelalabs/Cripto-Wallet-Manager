import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { styles } from './styles';

import { Header } from './components/Header';
import { Widget } from './components/Widget';
import { CriptoList } from './components/CriptoList';
import { AddQuantityPopup } from './components/AddQuantityPopup';


export default function App() {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [newQuantity, setNewQuantity] = useState(null);

  const showPopup = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isPopupOpened) {
      Animated.timing(showPopup, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
    else {
      Animated.timing(showPopup, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  }, [isPopupOpened]);


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
        />
        <Widget />
      </Animated.View>
      {isPopupOpened &&
        <AddQuantityPopup
          setIsPopupOpened={setIsPopupOpened}
          setNewQuantity={setNewQuantity}
        />}
    </>
  );
} 
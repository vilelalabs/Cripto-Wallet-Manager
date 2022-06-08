import { List, X, Minus, CurrencyDollar } from 'phosphor-react-native';
import React, { useRef, useCallback } from 'react';
import { View, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { themes } from '../../themes';

import { styles } from './styles';

import { LoadFile, RemoveCoin } from '../../services/FileManagement';


export function CriptoSideMenuButton({
  setIsPopupOpened,
  setIsAnyMenuOpened,
  isAnyMenuOpened,
  scrollViewCenterHeight,
  itemPositionCenterHeight,
  selfKey,
  setMenuOpenedNumber,
  setSelectedCoin,
  coin,
  setAllCoins,
  setIsUpdatingCoins
}) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const showMenu = useRef(new Animated.Value(0)).current;

  const handleOpenMenu = useCallback(() => {

    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsAnyMenuOpened(false);
      setMenuOpenedNumber(null);
      Animated.timing(showMenu, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
    else {
      if (!isAnyMenuOpened) {
        setIsMenuOpen(true);
        setIsAnyMenuOpened(true);
        setMenuOpenedNumber(selfKey);
        Animated.timing(showMenu, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false
        }).start();
      }
    }

  }, [isMenuOpen, isAnyMenuOpened, setIsMenuOpen, setIsAnyMenuOpened]);

  const handleAddQuantity = useCallback(() => {
    setIsPopupOpened(true);
    setSelectedCoin(coin);
  }, []);

  const handleDeleteCoin = async () => {
    setIsUpdatingCoins(true);
    await RemoveCoin(coin);
    setAllCoins(await LoadFile());
    setIsUpdatingCoins(false);
  };



  return (
    <Animated.View style={{
      ...styles.container,
      height: showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 150]
      }),
      backgroundColor: showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [themes.colors.fifth, themes.colors.fourth]
      }),
      opacity: isAnyMenuOpened ? (showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1]
      })) : 1,
      transform:
        [
          (itemPositionCenterHeight > scrollViewCenterHeight) ? {
            translateY: showMenu.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -100]
            })
          } : { translateY: 0 },
        ],
    }}
    >
      {isMenuOpen ?
        <View style={{
          ...styles.buttons,
          flexDirection: (itemPositionCenterHeight > scrollViewCenterHeight) ? 'column-reverse' : 'column',
        }} >
          <TouchableOpacity onPress={handleOpenMenu}>
            <X weight='bold' size={32} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            handleOpenMenu();
            handleAddQuantity();
          }}>
            <CurrencyDollar weight='bold' size={32} />
          </TouchableOpacity>

          <TouchableOpacity onPress={async () => {
            handleOpenMenu();
            await handleDeleteCoin();
          }}>
            <Minus weight='bold' size={32} />
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity
          disabled={isAnyMenuOpened}
          onPress={handleOpenMenu}
        >
          <List weight='bold' size={32} />
        </TouchableOpacity>
      }
    </Animated.View >

  );
}
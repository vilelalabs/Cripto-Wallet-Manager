import { List, X, Minus, CurrencyDollar } from 'phosphor-react-native';
import React, { useRef } from 'react';
import { View, Animated } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { themes } from '../../themes';

import { styles } from './styles';

export function CriptoSideMenuButton({ setIsAnyMenuOpened, isAnyMenuOpened }) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const showMenu = useRef(new Animated.Value(0)).current;

  const handleOpenMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsAnyMenuOpened(false);
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
        Animated.timing(showMenu, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false
        }).start();
      }
    }

  }

  return (
    <Animated.View style={{
      ...styles.container, height: showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 150]
      }), backgroundColor: showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [themes.colors.fifth, themes.colors.fourth]
      }), zIndex: showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10]
      }),
      opacity: isAnyMenuOpened ? (showMenu.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1]
      })) : 1,

    }}
    >
      {isMenuOpen ?
        <View style={styles.buttons} >
          <TouchableOpacity onPress={handleOpenMenu}>
            <X weight='bold' size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenMenu}>
            <CurrencyDollar weight='bold' size={32} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenMenu}>
            <Minus weight='bold' size={32} />
          </TouchableOpacity>
        </View>
        :
        <TouchableOpacity
          disabled={isAnyMenuOpened}
          onPress={handleOpenMenu}
        >
          <List weight='bold' size={32} />
        </TouchableOpacity>}
    </Animated.View >
  );
}
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { CriptoSideMenuButton } from '../CriptoSideMenuButton';
import { CriptoValue } from '../CriptoValue';

import { styles } from './styles';

export function CriptoItem({
  coin,
  setIsPopupOpened,
  setIsAnyMenuOpened,
  isAnyMenuOpened,
  scrollViewCenterHeight,
  selfKey,
  setMenuOpenedNumber,
  menuOpenedNumber,
  setSelectedCoin,
  setAllCoins
}) {

  const [itemPositionCenterHeight, setItemPositionCenterHeight] = useState(0);

  useEffect(() => {
    // redraw component every time coin changes ???
  }, [coin]);


  return (
    <Animated.View
      style={{
        ...styles.container,
        zIndex: menuOpenedNumber !== selfKey ? -10 : 0,
      }}
      onLayout={(event) => {
        const { y, height } = event.nativeEvent.layout;
        setItemPositionCenterHeight(y + height / 2);
      }}
    >
      <CriptoValue
        coin={coin}
      />
      <CriptoSideMenuButton
        setIsPopupOpened={setIsPopupOpened}
        setIsAnyMenuOpened={setIsAnyMenuOpened}
        isAnyMenuOpened={isAnyMenuOpened}
        scrollViewCenterHeight={scrollViewCenterHeight}
        itemPositionCenterHeight={itemPositionCenterHeight}

        selfKey={selfKey}
        setMenuOpenedNumber={setMenuOpenedNumber}

        setSelectedCoin={setSelectedCoin}
        setAllCoins={setAllCoins}
        coin={coin}
      />
    </Animated.View>
  );
}

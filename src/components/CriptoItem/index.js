import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { CriptoSideMenuButton } from '../CriptoSideMenuButton';
import { CriptoValue } from '../CriptoValue';

import { styles } from './styles';

export function CriptoItem({
  coin,
  setIsAnyMenuOpened,
  isAnyMenuOpened,
  scrollViewCenterHeight,
  selfKey,
  setMenuOpenedNumber,
  menuOpenedNumber,
}) {

  const [itemPositionCenterHeight, setItemPositionCenterHeight] = useState(0);

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
        setIsAnyMenuOpened={setIsAnyMenuOpened}
        isAnyMenuOpened={isAnyMenuOpened}
        scrollViewCenterHeight={scrollViewCenterHeight}
        itemPositionCenterHeight={itemPositionCenterHeight}

        selfKey={selfKey}
        setMenuOpenedNumber={setMenuOpenedNumber}
      />
    </Animated.View>
  );
}

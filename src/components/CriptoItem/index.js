import React, { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { CriptoSideMenuButton } from '../CriptoSideMenuButton';
import { CriptoValue } from '../CriptoValue';

import { styles } from './styles';

export function CriptoItem({ coin, setIsAnyMenuOpened, isAnyMenuOpened, scrollViewCenterHeight }) {

  const [itemPositionCenterHeight, setItemPositionCenterHeight] = useState(0);

  return (
    <Animated.View
      style={styles.container}
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
      />
    </Animated.View>
  );
}

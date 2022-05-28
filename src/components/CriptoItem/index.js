import React from 'react';
import { View } from 'react-native';
import { CriptoSideMenuButton } from '../CriptoSideMenuButton';
import { CriptoValue } from '../CriptoValue';

import { styles } from './styles';

export function CriptoItem({ coin, setIsAnyMenuOpened, isAnyMenuOpened }) {
  return (
    <View style={styles.container}>
      <CriptoValue
        coin={coin}
      />
      <CriptoSideMenuButton
        setIsAnyMenuOpened={setIsAnyMenuOpened}
        isAnyMenuOpened={isAnyMenuOpened}
      />
    </View>
  );
}
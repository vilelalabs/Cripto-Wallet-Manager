import React from 'react';
import { View } from 'react-native';
import { CriptoSideMenuButton } from '../CriptoSideMenuButton';
import { CriptoValue } from '../CriptoValue';

import { styles } from './styles';

export function CriptoItem() {
  return (
    <View style={styles.container}>
      <CriptoValue />
      <CriptoSideMenuButton />
    </View>
  );
}
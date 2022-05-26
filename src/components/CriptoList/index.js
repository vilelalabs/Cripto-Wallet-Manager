import React from 'react';
import { View, ScrollView } from 'react-native';

import { styles } from './styles';

import { CriptoItem } from '../CriptoItem';

export function CriptoList() {
  return (
    <ScrollView style={styles.container}>
      <CriptoItem />
      <CriptoItem />
      <CriptoItem />
    </ScrollView>
  );
}
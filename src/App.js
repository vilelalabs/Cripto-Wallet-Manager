import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { Header } from './components/Header';
import { Widget } from './components/Widget';
import { CriptoList } from './components/CriptoList';
import { TotalBalance } from './components/TotalBalance';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <CriptoList />
      <Widget />
    </View>
  );
} 
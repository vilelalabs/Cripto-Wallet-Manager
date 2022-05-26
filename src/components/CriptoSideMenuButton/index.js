import { List } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function CriptoSideMenuButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <List weight='bold' size={32} />
    </TouchableOpacity>
  );
}
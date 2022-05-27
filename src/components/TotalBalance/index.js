import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function TotalBalance() {
    const [isQuantityDefined, setIsQuantityDefined] = React.useState(true);
    const [selectedCurrency, setSelectedCurrency] = React.useState('R$');


  return (
      <View style={styles.container}>
          <Text style={styles.name}>Balanço Total:</Text>
          <View style={styles.value}>
              <Text style={styles.valueText}>{selectedCurrency + '  '}</Text>
              <Text style={styles.valueText}>9999,99</Text>
          </View>
    </View>
  );
}   
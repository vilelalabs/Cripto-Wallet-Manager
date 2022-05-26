import { ArrowRight } from 'phosphor-react-native';
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { themes } from '../../themes';


export function CriptoValue() {

  const [isQuantityDefined, setIsQuantityDefined] = React.useState(true);
  const [selectedCurrency, setSelectedCurrency] = React.useState('£');

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Bitcoin (BTC)</Text>
      {isQuantityDefined ?
        <View style={styles.value}>
          <Text style={styles.valueText}>{selectedCurrency + '  '}</Text>
          <Text style={styles.valueText}>9999,99</Text>
          </View> 
          
      :
        <View style={styles.qtde}>
          <Text style={styles.qtdeText}>QTDE</Text>
          <ArrowRight weight='bold' size={20} color={themes.colors.textSecond} />
        </View>
      }
    </View>
  );
}
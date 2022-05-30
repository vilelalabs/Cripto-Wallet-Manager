import { ArrowDown } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { themes } from '../../themes';

import { styles } from './styles';

export function TotalBalance({ coins }) {
  const [existsQuantity, setExistsQuantity] = React.useState(true);
  const [selectedCurrency, setSelectedCurrency] = React.useState('R$');
  const [totalBalance, setTotalBalance] = React.useState(0);

  // adds the value of the coins to the total balance
  useEffect(() => {
    let total = 0;
    coins.forEach(coin => {
      total += coin.price * coin.quantity;
    });
    setTotalBalance(total);
  }, [coins]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Balanço Total:</Text>
      <View style={styles.value}>
        {
          existsQuantity ?
            <View style={styles.value}>
              <Text style={styles.valueText}>{selectedCurrency + '  '}</Text>
              <Text style={styles.valueText}>{totalBalance.toFixed(2)}</Text>
            </View>
            :
            <View style={styles.qtde}>
              <Text style={styles.qtdeText}>Add Moedas </Text>
              <ArrowDown weight='bold' size={20} color={themes.colors.first} />
            </View>
        }
      </View>
    </View>
  );
}   
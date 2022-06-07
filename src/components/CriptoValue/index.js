import { ArrowRight } from 'phosphor-react-native';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { themes } from '../../themes';


export function CriptoValue({ coin }) {

  const [isQuantityDefined, setIsQuantityDefined] = React.useState(true);
  const [selectedCurrency, setSelectedCurrency] = React.useState('R$'); //configure later

  //console.log("coin -->", coin);

  useEffect(() => {
    // redraw component every time coin changes 
    if (coin.quantity) {
      setIsQuantityDefined(true);
    } else {
      setIsQuantityDefined(false);
    }

  }, [coin]);

  return (
    <>
      {coin &&
        <View style={styles.container}>
          <Text style={styles.name}>{coin.name} ({coin.symbol})</Text>
          {isQuantityDefined ?
            <View style={styles.value}>
              <Text style={styles.valueText}>{selectedCurrency + '  '}</Text>
              <Text style={styles.valueText}>{(coin.quantity * coin.price).toFixed(2)}</Text>
            </View>
            :
            <View style={styles.qtde}>
              <Text style={styles.qtdeText}>QTDE</Text>
              <ArrowRight weight='bold' size={20} color={themes.colors.textSecond} />
            </View>
          }
        </View>
      }
    </>
  );
}
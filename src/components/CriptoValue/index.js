import { ArrowRight } from 'phosphor-react-native';
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { themes } from '../../themes';


export function CriptoValue({ coin }) {

  const [isQuantityDefined, setIsQuantityDefined] = React.useState(true);
  const [selectedCurrency, setSelectedCurrency] = React.useState('R$'); //configure later
  const [needToRollTheName, setNeedToRollTheName] = React.useState(false);

  const nameTranslate = useRef(new Animated.Value(0)).current;

  const totalTextSize = coin.name.length + coin.symbol.length + 2;

  const handleTextSize = () => {
    //if (totalTextSize > 16) {
    //for now, we permit rolling any size of coin name
    if (true) {
      setNeedToRollTheName(true);
      handleRollAnimation();
    }
    else {
      setNeedToRollTheName(false);
    }
  }

  const handleRollAnimation = () => {

    if (needToRollTheName) {
      setNeedToRollTheName(false);

      Animated.timing(nameTranslate, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false
      }).start();

    } else {
      setNeedToRollTheName(true);

      Animated.timing(nameTranslate, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false
      }).start();
    }
  };



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
          <Animated.View

            style={{
              ...styles.nameView,


            }}>
            <TouchableOpacity
              onPress={() => handleTextSize()}
              activeOpacity={0.8}
            >
              <Animated.Text

                style={{
                  ...styles.name,
                  transform: [{
                    translateX: nameTranslate.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -totalTextSize / 2 * 10]
                    })
                  }]

                }}
              >
                {coin.name} ({coin.symbol})
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
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
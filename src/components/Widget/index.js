import React, { useRef, useCallback, useState } from 'react';
import { View, TouchableOpacity, TextInput, Animated } from 'react-native';
import { Minus, Plus, X, Translate } from 'phosphor-react-native';

import { inputWidth, buttonWidth, styles } from './styles';
import { themes } from '../../themes';


export function Widget() {

  const [isOpenToSelectCripto, setIsOpenToSelectCripto] = useState(false);
  const [searchText, setSearchText] = React.useState('');

  const showInput = useRef(new Animated.Value(0)).current;
  const handleOpenToSelectCripto = () => {

    if (isOpenToSelectCripto) {
      setIsOpenToSelectCripto(false);

      Animated.timing(showInput, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false
      }).start();

    } else {
      setIsOpenToSelectCripto(true);

      Animated.timing(showInput, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false
      }).start();
    }
  };

  const eraseInsertCriptoInputText = useCallback(() => setSearchText(''), []);


  return (
    <View style={styles.container}>
      <Animated.View
        transform={[{ translateX: buttonWidth / 2 }]}
        style={{
          ...styles.inputView, width: showInput.interpolate({
            inputRange: [0, 1],
            outputRange: [0, inputWidth]
          })
        }}

      >
        <TextInput
          style={styles.input}
          placeholder='Selecione uma criptomoeda...'
          placeholderTextColor={themes.colors.textSecond}
          onPressIn={eraseInsertCriptoInputText}
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={() => {
          handleOpenToSelectCripto();
          eraseInsertCriptoInputText();
        }
        }
        style={styles.button}
        activeOpacity={1} /*alterar controle de opacidade para os ícones ou spin para X*/
      >
        <Animated.View
          style={{
            transform: [{
              rotate: showInput.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "-45deg"]
              })
            }]
          }}
        >
          <Plus weight='bold' size={36} />
        </Animated.View>
      </TouchableOpacity>
    </View >
  );
}
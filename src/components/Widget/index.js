import React, { useRef, useCallback, useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Animated, Alert } from 'react-native';
import { Plus } from 'phosphor-react-native';

import { inputWidth, buttonWidth, styles } from './styles';
import { themes } from '../../themes';

import { SearchCoin } from '../../services/SearchTools';
import { AddCoin, LoadFile } from '../../services/FileManagement';

export function Widget({
  setAddedCoin,
  setAllCoins,
  setIsUpdatingCoins,
  setIsPopupOpened,
  setSelectedCoin,
}) {

  const [isOpenToSelectCripto, setIsOpenToSelectCripto] = useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [newCoinToAdd, setNewCoinToAdd] = React.useState(null);

  const showInput = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (newCoinToAdd !== null && newCoinToAdd !== undefined) {
      setAddedCoin(newCoinToAdd);
      handleAddCoin(newCoinToAdd);
    }

    else if (newCoinToAdd === undefined) {
      Alert.alert('Error', 'Moeda não encontrada!');
      setIsUpdatingCoins(false);
    }

    return () => {
      setNewCoinToAdd(null);
    }

  }, [newCoinToAdd]);

  const handleAddCoin = async (newCoinToAdd) => {
    await AddCoin(newCoinToAdd);
    setSelectedCoin(newCoinToAdd);
    setIsPopupOpened(true);
    setAllCoins(await LoadFile());
    setIsUpdatingCoins(false);
  }


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
          onSubmitEditing={async () => {
            setIsUpdatingCoins(true);
            setNewCoinToAdd(await SearchCoin(searchText));
            eraseInsertCriptoInputText();
          }
          }
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
                outputRange: ["0deg", "-225deg"]
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
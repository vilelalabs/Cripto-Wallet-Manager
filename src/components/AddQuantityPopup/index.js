import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { themes } from '../../themes';

import { styles } from './styles';

//import { GetCoinsMap }    from '../../services/GetDataFromAPI';
//import { LoadMap }        from '../../services/FileManagement';//
import { SearchCoin } from '../../services/SearchTools';

export function AddQuantityPopup({ setIsPopupOpened, setNewQuantity }) {

    const [quantity, setQuantity] = React.useState(null);

    const selectedCoin = {
        name: 'Bitcoin',
        symbol: 'BTC',
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Adicione a quantidade que você possui de
                {' ' + selectedCoin.name}({selectedCoin.symbol}):
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Insira a quantidade aqui..."
                placeholderTextColor={themes.colors.textSecond}
                keyboardType="numeric"
                onChangeText={(text) => {
                    // eliminate the non-numeric characters
                    let qtde = text.replace(/[- #*;<>\{\}\[\]\\\/]/gi, '');
                    //changes comma to dot
                    qtde = qtde.replace(/[,]/gi, '.');
                    //refuse to accept addins another decimal point
                    if (qtde.indexOf('.') !== -1 && qtde.split('.').length > 2) {
                        qtde = qtde.substring(0, qtde.length - 1);
                    }

                    setQuantity(qtde);
                }}
                value={quantity}
            >
            </TextInput>
            <View
                style={styles.buttonsContainer}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setNewQuantity(null);
                        setIsPopupOpened(false);

                    }}
                >
                    <Text style={styles.buttonText}>
                        Cancelar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        setNewQuantity(quantity);
                        setIsPopupOpened(false);
                        // save quantity to coin on file
                        //await GetCoinsMap();
                        //console.log(await SearchCoin('Baby Doge Coin'));

                    }}
                >
                    <Text style={styles.buttonText}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

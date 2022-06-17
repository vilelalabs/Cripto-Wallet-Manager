import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { themes } from '../../themes';

import { styles } from './styles';

import { LoadFile, UpdateCoinQuantity, CoinPriceAutoUpdate } from '../../services/FileManagement';


export function AddQuantityPopup({
    setIsPopupOpened,
    setNewQuantity,
    selectedCoin,
    setSelectedCoin,
    setAllCoins,
    setIsUpdatingCoins,
}) {

    const [quantity, setQuantity] = React.useState(null);

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
                    //refuse to accept adding of another decimal point
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
                        setIsUpdatingCoins(true);
                        setNewQuantity(quantity);
                        setIsPopupOpened(false);
                        setSelectedCoin((selectedCoin) => ({ ...selectedCoin, quantity: quantity }));
                        // save quantity to coin on file
                        await UpdateCoinQuantity(selectedCoin, quantity);
                        setAllCoins(await LoadFile());
                        setIsUpdatingCoins(false);
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

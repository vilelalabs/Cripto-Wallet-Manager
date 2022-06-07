//import AsyncStorage from '@react-native-async-storage/async-storage';

import Store from "react-native-fs-store";
const AsyncStorage = new Store('store1');

let initData = require('../../../coins.json');

import { GetDataFromSelectedCoins } from "../../services/GetDataFromAPI";


// ======== INDIVIDUAL COINS FUNCTIONS ========

export async function AddCoin(coin) {
    let coins = await LoadFile();
    if (typeof coins !== 'object') {
        coins = JSON.parse(coins);
    }
    coins.push(coin);
    await GetDataFromSelectedCoins(coins);
    await AsyncStorage.setItem('@coins', JSON.stringify(coins));
}

export async function RemoveCoin(coin) {
    let coins = await LoadFile();
    if (typeof coins !== 'object') {
        coins = JSON.parse(coins);
    }
    let coinsUpdated = coins.filter(c => c.symbol !== coin.symbol);
    await AsyncStorage.setItem('@coins', JSON.stringify(coinsUpdated));
}

export async function UpdateCoinQuantity(coin, quantity) {

    let coins = await LoadFile();
    let coinsUpdated = coins.map(c => {
        if (c.symbol === coin.symbol) {
            c.quantity = quantity;
        }
        return c;
    });
    await AsyncStorage.setItem('@coins', JSON.stringify(coinsUpdated));
}


// ======== WHOLE FILE RELATED FUNCTIONS ========

export async function SaveCoins(addedCoin) {
    const JSONfile = JSON.stringify(addedCoin);

    try {
        await AsyncStorage.setItem('@coins', JSONfile);
        console.log("Saved");
    } catch (e) {
        console.log("Error saving data >> " + e);
    }

}

export async function LoadFile() {
    try {
        const jsonValue = await AsyncStorage.getItem('@coins')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error loading data >> " + e);
    }
}

export async function SaveMap(map) {

    const JSONfile = JSON.stringify(map);
    try {
        await AsyncStorage.setItem('@map', JSONfile);
    } catch (e) {
        console.log("Error saving data >> " + e);
    }

}

export async function LoadMap() {
    try {
        const jsonValue = await AsyncStorage.getItem('@map')

        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error loading data >> " + e);
    }
}

export async function CreateFileForFirstInit() {
    await SaveCoins(initData);
    console.log("<File @coins restarted>")
}

import axios from 'axios';

const { getMyAPIKey } = require('./apikey.js')
import { Alert } from 'react-native'
import { SaveMap, SaveCoins } from '../FileManagement/index.js';

const headers = {
    'X-CMC_PRO_API_KEY': getMyAPIKey()
}

// get data from selected coins
export async function GetDataFromSelectedCoins(coins) {
    // ver solução com maps: https://snack.expo.dev/@marcusamatos/3b846b

    let ids = [];
    coins.forEach(coin => {
        ids.push(coin.id);
    });
    let idsToSearch = ids.join(',');

    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${idsToSearch}&convert=BRL`;
    let response;
    try {
        response = await axios.get(url, {
            headers: headers
        });

    } catch (error) {
        Alert.alert("Erro!", `Não foi possível carregar preço inicial das moedas! -> ${error}`);
        return;
    }


    coins.map(coin => {
        let price = response.data.data[coin.id].quote.BRL.price;
        coin.price = price;
    });
}

export async function GetCoinsMap() {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`;
    const response = await axios.get(url, {
        headers: headers
    });
    try {
        if (response) {
            await SaveMap(response.data);
            console.log("Map Saved!");
        }
    } catch (error) {
        console.log("Error getting map >> " + error);
    }
}


/* 
{ // exemplo de formato dos dados que serão utilizados do "map"
        "id": 19432,
        "name": "Netflix Tokenized Stock Zipmex",
     "symbol": "NFLX"
}
*/
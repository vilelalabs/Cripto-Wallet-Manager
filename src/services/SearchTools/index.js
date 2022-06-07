
import { LoadMap } from "../FileManagement";

export async function SearchCoin(coinName) {
    let name = coinName.toLowerCase();
    const coins = await LoadMap();

    let coinFound = coins.data.find(coin => coin.name.toLowerCase() === name);
    if (!coinFound) {
        name = coinName.toUpperCase();
        coinFound = coins.data.find(coin => coin.symbol.toUpperCase() === name);

    }

    let newCoinToAdd = null;
    if (coinFound) {
        newCoinToAdd = {
            "name": coinFound.name,
            "symbol": coinFound.symbol,
            "price": coinFound.price,
            "quantity": null,
            "id": coinFound.id,
        }
    }
    return newCoinToAdd;
}
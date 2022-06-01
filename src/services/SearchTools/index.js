
import { LoadMap } from "../FileManagement";

export async function SearchCoin(coinName) {
    const name = coinName.toLowerCase();
    const coins = await LoadMap();

    const coinFound = coins.data.find(coin => coin.name.toLowerCase() === name);
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
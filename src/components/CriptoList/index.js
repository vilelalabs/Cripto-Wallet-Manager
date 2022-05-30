import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';

import { CriptoItem } from '../CriptoItem';
import { TotalBalance } from '../TotalBalance';

const addedCoins = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 144680.00,
    quantity: 0.0000001,
  },
  {
    name: 'Iota',
    symbol: 'IOTA',
    price: 1.46,
    quantity: 600,
  },
  {
    name: 'BabyDoge',
    symbol: 'BBD',
    price: 0.00000046,
    quantity: 1000000,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 8000.00,
    quantity: 0.05,
  },
  {
    name: 'Lite Coin',
    symbol: 'LTC',
    price: 9.46,
    quantity: 22,
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    price: 0.00000446,
    quantity: 10000000,
  },
  {
    name: 'Luna',
    symbol: 'LUNA',
    price: 0.0000046,
    quantity: 20000,
  },
  {
    name: 'BlackShiba',
    symbol: 'BSHIB',
    price: 0.0000000446,
    quantity: 10000000,
  },
  {
    name: 'Mana',
    symbol: 'MANA',
    price: 1.046,
    quantity: 10,
  },

];

const singleCoinHeight = 70;

export function CriptoList({ setIsPopupOpened }) {
  const [isAnyMenuOpened, setIsAnyMenuOpened] = useState(false);
  const [scrollViewCenterHeight, setScrollViewCenterHeight] = useState(0);
  const [scrollViewContentYOffset, setScrollViewContentYOffset] = useState(0);
  const [menuOpenedNumber, setMenuOpenedNumber] = useState(null);

  return (
    <>
      <ScrollView
        onContentSizeChange={(contentHeight) => setScrollViewCenterHeight(contentHeight / 2)}
        onScroll={event => {
          setScrollViewContentYOffset(event.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}>
        {addedCoins.map((coin, index) => (

          <CriptoItem
            key={index}
            selfKey={index}
            setMenuOpenedNumber={setMenuOpenedNumber}
            menuOpenedNumber={menuOpenedNumber}

            setIsPopupOpened={setIsPopupOpened}
            setIsAnyMenuOpened={setIsAnyMenuOpened}
            isAnyMenuOpened={isAnyMenuOpened}
            scrollViewCenterHeight={scrollViewCenterHeight + scrollViewContentYOffset + singleCoinHeight}

            coin={coin}
          />
        ))
        }
      </ScrollView>
      <TotalBalance
        coins={addedCoins}
      />
    </>
  );
}
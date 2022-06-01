import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';

import { CriptoItem } from '../CriptoItem';
import { TotalBalance } from '../TotalBalance';

const initData = require('../../../coins.json');

const addedCoins = initData;

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
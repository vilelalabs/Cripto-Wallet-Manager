import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themes.colors.fifth,
    width: 270,
    borderRadius: 15,
    padding: 10,
  },
  qtde: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtdeText: {
    color: themes.colors.textSecond,
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    color: themes.colors.second,
    fontSize: 20,
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: themes.colors.second,
    fontSize: 20,
  }
});
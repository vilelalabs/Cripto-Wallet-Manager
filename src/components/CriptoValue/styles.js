import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    backgroundColor: themes.colors.fifth,
    paddingLeft: 12,
  },
  qtdeText: {
    color: themes.colors.textSecond,
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.fifth,
    paddingLeft: 12,
  },
  valueText: {
    color: themes.colors.second,
    fontSize: 20,
    fontWeight: 'bold',
  },

  name: {
    color: themes.colors.second,
    fontSize: 20,
  },
  nameView: {
    position: 'absolute',
    top: 11,
    left: 10,

  },

});
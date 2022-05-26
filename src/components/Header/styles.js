import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: themes.colors.fourth,
    height: 60,
    width: '90%',
    borderRadius: 10,
    marginTop: 40,
  },
  text: {
    color: themes.colors.first,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
  }

});
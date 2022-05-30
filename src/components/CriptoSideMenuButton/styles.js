import { StyleSheet } from 'react-native';

import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: themes.colors.fifth
  },
  buttons: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "column",
    justifyContent: "space-between",

  }
});
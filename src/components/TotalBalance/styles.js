import { StyleSheet } from 'react-native';
import { themes } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: themes.colors.second,
    width: "90%",
    height: 50,
    borderRadius: 15,
    padding: 10,
    margin: 10,

  },
  name: {
    color: themes.colors.first,
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  valueText: {
    color: themes.colors.first,
    fontSize: 20,
    fontWeight: 'bold',
  }
});
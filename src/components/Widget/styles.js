import {
  StyleSheet,
  Dimensions
} from 'react-native';

import { themes } from '../../themes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const buttonWidth = 70;
export const buttonHeight = 70;
export const inputWidth = windowWidth - buttonWidth / 2;
export const inputHeight = 70;


export const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
   
    width: windowWidth,
    height: inputHeight
  },

  button: {

    height: buttonHeight,
    width: buttonWidth,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: themes.colors.fourth,
    borderRadius: 50,

  },
  icon: {
    color: themes.colors.primary,
  },
  inputView: {
    height: inputHeight,
    borderRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: themes.colors.fourth,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    paddingLeft: 23,
    fontSize: 18,
    color: themes.colors.first,
  }
});
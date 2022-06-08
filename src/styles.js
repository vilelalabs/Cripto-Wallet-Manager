import { StyleSheet, Dimensions } from 'react-native';
import { themes } from './themes';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: themes.colors.first,
        height: '100%',
    },
    loadingIndicator: {
        position: "absolute",
        top: (screenHeight / 2) - 15,
        left: (screenWidth / 2) - 15
    },
    loadingText: {
        position: 'absolute',
        top: (screenHeight / 2) + 30,
        left: (screenWidth / 2) - 85,

        fontSize: 20,
        fontWeight: 'bold',

        color: themes.colors.fourth,
    }
});
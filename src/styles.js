import { StyleSheet } from 'react-native';
import { themes } from './themes';


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundColor: themes.colors.first,
        height: '100%',
    },
});
import { StyleSheet, Dimensions } from 'react-native';

import { themes } from '../../themes';

const { width, height } = Dimensions.get('window');

const selfHeight = height / 3;
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        top: height / 2 - selfHeight / 2,
        alignSelf: 'center',
        width: "90%",
        height: selfHeight,
        backgroundColor: themes.colors.second,
        borderRadius: 20,
        padding: 30,

    },
    label: {
        fontSize: 20,
        color: themes.colors.first,
        fontStyle: 'italic',
        marginBottom: 30,
    },
    input: {
        color: themes.colors.first,
        backgroundColor: themes.colors.third,
        borderRadius: 10,
        textAlign: 'right',
        marginBottom: 10,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    button: {
        backgroundColor: themes.colors.fifth,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: themes.colors.first,
        fontWeight: 'bold',
        fontSize: 20,
    },

});
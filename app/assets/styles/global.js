import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
        backgroundColor: colors.primaryBackground
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    centerHV: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerH: { justifyContent: 'center' },
    centerV: { alignItems: 'center' },
    textInput: {
        height: 60,
        width: '85%',
        borderRadius: 30,
        paddingLeft: 20,
        color: 'rgba(86, 103, 132, 0.4)',
        backgroundColor: colors.darkBackground
    }
})
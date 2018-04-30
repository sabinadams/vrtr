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
    centerV: { alignItems: 'center' }
})
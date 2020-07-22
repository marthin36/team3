import { Stylesheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FCFF',
    },
    card: {
        width: 160,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 7,
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
        color: '#505050',
        paddingTop: 13,
    },
    text2: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 5,
        color: '#505050',
        paddingTop: 13,
    },
});
import {
    StyleSheet
} from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FCFF',
    },
    viewTextContainer: {
        marginLeft: 25,
    },
    text1: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        fontWeight: '600',
        color: '#505050',
        paddingTop: 13,
    },
    textForm: {
        marginLeft: 25,
        marginTop: 10
    },
    titleTable: {
        fontSize: 17,
        fontWeight: '900',
        fontFamily: 'Nunito-Bold',
    },
    textApproved: {
        color: 'green',
    },
    textRejected: {
        color: 'red',
    },
    viewPicker: {
        marginLeft: 25,
        marginTop: 10,
        padding: 5,
        height: '6%',
        width: '90%',
        borderRadius: 50,
        borderColor: '#505050',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    viewPickerDate: {
        marginLeft: 26,
        marginTop: 10,
        padding: 5,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        height: '6%',
        width: '90%',
        borderRadius: 50,
        borderColor: '#505050',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    picker: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
        borderColor: '#505050',
    },
    dataTable: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5,
    },
    buttonRequest: {
   
         backgroundColor: '#28A745',
             height: 50,
             width: '90%',
             borderRadius: 5,
             alignSelf: 'center',
             position: 'absolute',
             bottom: 6,
             left: 19,
    },
    textbtnRequest: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: "center",
        flex: 1,
        fontFamily: 'Nunito-SemiBold',
        marginBottom: 7
    },
    textbtnRequests: {
        color: 'white',
        fontSize: 9,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: "center",

        fontFamily: 'Nunito-SemiBold',

    },
       viewDate1: {
               marginLeft: 25,
               marginTop: 10,
               padding: 5,
               height: '6%',
               width: '90%',
               borderRadius: 50,
               borderColor: '#505050',
               borderWidth: 1,
               backgroundColor: 'white'
           },
           viewDate2: {
               flexDirection: 'row',
               flex: 1,
               marginLeft: 2,
               width: '100%',
           },
           iconDate: {
               alignSelf: 'flex-end',
               marginRight: 7,
               marginBottom: 0,
               marginTop: 0
           },
});
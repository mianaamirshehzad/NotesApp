import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ' #a6a6a6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontStyle: 'normal',
        color: 'black',
        alignSelf: 'center',
        fontSize: 25,
        // padding: 10,
        marginTop: 5,
        // marginBottom: 5,
        // marginRight: 5,
        // marginLeft: 5,
    },
    subtitleText: {
        fontStyle: 'normal',
        color: 'black',
        alignSelf: 'center',
        fontSize: 15,
        padding: 15,
        // marginTop: 5,
        marginBottom: 7,
        marginRight: 5,
        marginLeft: 5,
    },
    placeLeft: {
        fontWeight: 'light',
        color: '#4b4df8',
        marginRight: 15,
        paddingBottom: 10 ,
        paddingLeft: 10,
    },
    placeCenter: {
        color: '#4b4df8',
        paddingLeft: 10,
        // position: 'absolute',
        // bottom: -50
        
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,

    },
    image : {
        width: 100,
        height: 100,
    },
    bottomButton: {
        backgroundColor: '#4b4df8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, 
        width: '95%',
        alignSelf:'center',
        padding: 15,
        margin: 15,   
    },
    // titleText: {
    //     fontSize: 22,
    //     fontWeight: 'bold',
    //     color: 'black'
    // },
    notesText: {
        fontSize: 18,
    },
    viewContainer: {
        backgroundColor: 'grey',
        borderRadius: 15,
    }
});

export default styles;
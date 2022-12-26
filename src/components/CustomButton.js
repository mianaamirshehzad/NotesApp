import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function (props) {
    return(
        <TouchableOpacity onPress={() => props.press()} >
            <View style = {styles.button} >
                <Text style = {styles.buttonText}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4b4df8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, 
        width: '95%',
        alignSelf:'center',
        padding: 15,
        margin: 15,    
    }, 
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
    }, 

});
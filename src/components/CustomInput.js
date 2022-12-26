import { Text, View, TextInput, Image } from "react-native";

const Input = (props) => {

  return (
    <View style={{ width: '90%', alignSelf: 'center', margin: 5, flexDirection: 'row', borderWidth: 2 }}>

      {props.img ?
        <Image
          source={props.img}
          style={{
            height: 25,
            width: 30,
            alignSelf: 'flex-start',
            alignSelf: 'center'
          }} />
        : null}

      <TextInput
        placeholder={props.hint}
        secureTextEntry={props.sec}
        style={{
          width: '80%',
          padding: 10,
          height: 40,
          borderColor: 'black'
        }}
        onChangeText={(t) => { props.onText(t) }}
      />

    </View>
  )
}

export default Input

    // ('../assets/lock.png')
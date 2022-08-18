import { KeyboardAvoidingView, StyleSheet,  View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Input ,Text} from 'react-native-elements';
import { auth } from '../firebase';



const Register = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')
  
  const register=()=>{
      auth.createUserWithEmailAndPassword(email,password)
      .then(authUser =>{
          authUser.user.updateProfile({
            displayName:name,
            photo:image || "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/2e/0b/b0/2e0bb026-c85f-a793-6b2e-c70f0a80d559/source/512x512bb.jpg"
          })
      }).catch((Error)=>alert(console.error()))
    }
    
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Text h4 style={{marginBottom:20}}>Create Account</Text>

      <View style={styles.inputconatiner}>
        <Input placeholder='Full name' autoFocus type='text' value={name} onChangeText={(Text) => setName(Text)} />
        <Input placeholder='Email' type='email' value={email} onChangeText={(Text) => setEmail(Text)} />
        <Input placeholder='Password' secureTextEntry type='password' value={password} onChangeText={(Text) => setPassword(Text)} />
        <Input placeholder='Image' type='text' value={image} onChangeText={(Text) => setImage(Text)} onSubmitEditing={register}/>
      </View>
      <Button style={styles.Button} title='Register' onPress={register}/>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:'white',
    flex:1,
    padding:100,
    justifyContent:'center'
  },
  inputconatiner: {
    width:300
  },
  Button:{
    width:200,
    margin:10
   
 },

})
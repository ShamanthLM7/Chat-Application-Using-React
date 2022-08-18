import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import {Button,Input,Image} from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../firebase';





const Login = ({navigation}) => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  useEffect(()=>{
    const unsub = auth.onAuthStateChanged((authUser)=>{
      
      if(authUser)
      {
        navigation.navigate("Home")
      }
    });
    return unsub;

  },[]);
 
  const signIN=()=>{

    auth.signInWithEmailAndPassword(email,password)
    .catch((Error)=>alert(Error))
  
  }
  return (
    
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container} >
      <StatusBar style='light'/>
      <Image
          source={{
            uri:"https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/2e/0b/b0/2e0bb026-c85f-a793-6b2e-c70f0a80d559/source/512x512bb.jpg",
          }}
          style={{width:200,height:200,marginTop:105}}
          />
        <View>
          <Input containerStyle={styles.inputContainer}placeholder='Email' autoFocus type='email' value={email} onChangeText={(Text)=> setemail(Text)}/>
          <Input containerStyle={styles.inputContainer} placeholder='Password'  type='password' secureTextEntry value={password} onChangeText={(Text)=> setpassword(Text)}/>
        </View>
            <Button containerStyle={styles.Button} onPress={signIN} title="Login"/>
            <Button containerStyle={styles.Button} onPress={()=>navigation.navigate('Register')}type='outline' title="Register"/>
      
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      backgroundColor:'white',
      flex:1,
      padding:10,
      justifyContent:'center'
      
    },
    Button:{
       width:200,
       margin:10
      
    },
    inputContainer:{
        width:300
    }

});
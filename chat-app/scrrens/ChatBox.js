import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements/dist/input/Input'
import { Button } from 'react-native-elements/dist/buttons/Button'
import {db} from '../firebase'


const ChatBox = ({navigation}) => {
  const [input,setInput]=useState("")

  const createChat = async () => {
    
  }
  
   
  
  return (
    <View>
      <Input placeholder='Enter chat name' value={input} onChangeText={(Text) => setInput(Text)} />
      <Button title='Create new chat' onPress={createChat}/>
    </View>
  )
}

export default ChatBox

const styles = StyleSheet.create({})
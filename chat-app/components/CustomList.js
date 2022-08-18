import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ListItem,Avatar} from 'react-native-elements'
//import { ListItem } from 'react-native-elements/dist/list/ListItem'
//import { Avatar } from 'react-native-elements/dist/avatar/Avatar'

const CustomList = () => {
  return (
    <ListItem>
      <Avatar 
      rounded
      source={{
        uri:"https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/2e/0b/b0/2e0bb026-c85f-a793-6b2e-c70f0a80d559/source/512x512bb.jpg"
      }}/>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight:"800"}}>
            Crush
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            I love you very very very very very very very very very very very much
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomList

const styles = StyleSheet.create({})
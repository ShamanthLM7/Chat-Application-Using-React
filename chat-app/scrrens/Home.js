import { SafeAreaView, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomList from '../components/CustomList'
import { Button } from 'react-native-elements/dist/buttons/Button'




const Home = ({navigation}) => {
  return (
      
    <SafeAreaView>
        <ScrollView>
            <CustomList />
            <Button containerStyle={styles.Button} title="Create Chat" onPress={() => navigation.navigate('ChatBox')}/>
        </ScrollView>
       
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    Button:{
            backgroundColor:'purple',
            marginTop:585

            
    },
})
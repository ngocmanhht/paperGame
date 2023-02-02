import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';





export const Home = ({ navigation }) => {



  return (

   <View style={styles.backGround}>
    <Text style={{color:'#D9DE4B', fontSize:35, bottom:40}}>ROCK PAPER SCISSOR</Text>
    <TouchableOpacity style={styles.playBtn} onPress={()=> navigation.navigate("Game")}>
      <Text style={{fontSize:35, alignSelf:'center'}}>CLICK HERE TO PLAY! </Text>
    </TouchableOpacity>
    
   </View>
  )
}

export default Home
const styles = StyleSheet.create({
  backGround:
  {
    backgroundColor:'#070606', 
    flex:1,
     alignItems:'center', 
     justifyContent:'center'
  },
  playBtn:{
    width:'95%',
     height:60,
      backgroundColor:'#C6B057', 
      borderRadius:15
  }
})
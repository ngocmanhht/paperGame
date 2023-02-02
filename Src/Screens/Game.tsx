import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PointBoard } from './PointBoard'
import {data } from "../data";
const rulesGame = (small, big) => {

  if (small == 'Paper' && big == 'Rock') {
    return small
  }
  if (small == 'Paper' && big == 'Scri') {

    return big

  }
  if (small == 'Rock' && big == 'Scri') {
    return small

  }
}
export const Game = () => {
  useEffect(() => {
    reset()
    let choice= Math.round((Math.random()*10)/5+1)
    if(choice==1)
    {
      setcomChoice('Paper')
    }
    if(choice==2)
    {
      setcomChoice('Rock')
    }
    if(choice==3)
    {
      setcomChoice('Scri')
    }
    console.log(` COM CHOICE IS ${comChoice}`)
  }, []);
  const [yourPoint, setYourPoint] = useState(0)
  const [comPoint, setComPoint] = useState(0)
  const [yourChoice, setYourChoice] = useState()
  const [comChoice, setcomChoice] = useState('Scri')
  const reset = () => {
    setComPoint(0)
    setYourPoint(0)
  }
  const ifWin = (yourPoint, comPoint) => {
    if (yourPoint == 3) {
      Alert.alert('YOU WIN')
      reset()
    }
    if (comPoint == 3) {
      Alert.alert("COM WIN")
      reset()

    }

  }
  const handleGame = (you, com) => {
    if (you == com) {
      null
    }
    else {
      let value = rulesGame(you, com)
      if (you == value) {
        setYourPoint(yourPoint + 1)
      }
      else {
        setComPoint(comPoint + 1)
      }
    }

  }
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ top: 40, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>YOUR CHOICE</Text>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) =>
            <View style={{ width: 90, height: 90, borderWidth: 1, borderRadius: 5, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => handleGame(item.name, comChoice)}>
                <Image style={{ width: 80, height: 80 }}
                  source={item.source} />
              </TouchableOpacity>
            </View>
          }
        />
        <Text style={{ fontSize: 20 }}>REACH 3 POINTS TO WIN THE GAME</Text>
      </View>
      <PointBoard you={yourPoint}
        com={comPoint}
      />
      {
        ifWin(yourPoint, comPoint)
      }
    </View>
  )
}
export default Game
const styles = StyleSheet.create({})
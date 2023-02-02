import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const PointBoard = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', top: 50, width: '80%', borderWidth: 1, height: 40, alignSelf: 'center' }}>
       <View style={{ width: "50%", paddingLeft: 50, borderRightWidth: 1 }}>
         <Text>YOU</Text>
         <Text>{props.you}</Text>

      </View>
      <View style={{ width: "50%", paddingLeft: 50 }}>
        <Text>COM</Text>
        <Text>{props.com}</Text>

       </View>
     </View>
  )
}

export default PointBoard

const styles = StyleSheet.create({})
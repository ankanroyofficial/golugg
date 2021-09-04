import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { primarycolor } from '../../constant/Constant'

export default function HomePage() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:primarycolor }}>
           <StatusBar backgroundColor={primarycolor} barStyle="light-content" />
            <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>HomePage</Text>
        </View>
    )
}

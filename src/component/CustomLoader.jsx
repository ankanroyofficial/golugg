import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { height, primarycolor, width } from '../constant/Constant'

export default function CustomLoader() {
    return (
        <View style={{ height: height, width: width, backgroundColor: "rgba(100, 100, 100, 0.5)", position: "absolute", justifyContent: "center", alignItems: "center" }}>
            <StatusBar backgroundColor={"rgba(100, 100, 100, 0.5)"} />
            <View style={{ height: height * 0.08, width: height * 0.08, backgroundColor: "white", justifyContent: "center", alignItems: "center",borderRadius:(height * 0.08)/2 }}>
                <ActivityIndicator size="large" color={primarycolor} />
            </View>
        </View>
    )
}

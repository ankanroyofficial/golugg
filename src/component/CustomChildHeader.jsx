import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { height, paddinghorizontal, primarycolor, width } from '../constant/Constant'
import { useNavigation } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';

export default function CustomChildHeader(props) {
    const navigation = useNavigation()
    return (
        <View style={{ height: height * 0.06, backgroundColor: primarycolor, flexDirection: "row", paddingRight: width * 0.05,paddingLeft:width * 0.05,elevation:4 }}>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: "flex-start" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={width * 0.075} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", color:"white", fontSize: width * 0.04 }}>{props.title}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => alert("Notification page is Not Completed")} style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                <Image source={require("../assets/icon/icon-2.png")} style={{ height: "60%", width: "60%", resizeMode: "contain" }} />
            </TouchableOpacity>
        </View>
    )
}

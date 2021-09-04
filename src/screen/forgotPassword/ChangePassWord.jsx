import React, { useState } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import { borderadius, height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation } from "@react-navigation/native"
import CustomBtm from '../../component/CustomBtm'


export default function ChangePassWord() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <Text style={style.detailsText}>That's easy to change. Just fill up the below required fields</Text>

            <View style={{ height: height * 0.08, flexDirection: "row", marginBottom: height * 0.04 }}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icon/icon-31.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 5 }}>
                    <TextInput
                        label="Old Password"
                        mode="flat"
                        placeholderTextColor="gray"
                        theme={{ colors: { primary: 'steelblue' } }}
                        style={{ backgroundColor: "white" }} />
                </View>
            </View>
            <View style={{ height: height * 0.08, flexDirection: "row", marginBottom: height * 0.04 }}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icon/icon-31.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 5 }}>
                    <TextInput
                        label="New Password"
                        mode="flat"
                        placeholderTextColor="gray"
                        theme={{ colors: { primary: 'steelblue' } }}
                        style={{ backgroundColor: "white" }} />
                </View>
            </View>
            <View style={{ height: height * 0.08, flexDirection: "row", marginBottom: height * 0.04 }}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icon/icon-31.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 5 }}>
                    <TextInput
                        label="Confirm Password"
                        mode="flat"
                        placeholderTextColor="gray"
                        theme={{ colors: { primary: 'steelblue' } }}
                        style={{ backgroundColor: "white" }} />
                </View>
            </View>

            <CustomBtm title="Save Changes" color={primarycolor} onPress={() => alert("Save changes")} />

        </View>
    )
}

const style = StyleSheet.create({
    detailsText: {
        fontSize: width * 0.045,
        color: "black",
        marginVertical: height * 0.04
    },
    textBlack: { fontSize: width * 0.035, color: "black" },
    textRed: { color: "red", marginLeft: width * 0.015, fontSize: width * 0.035 },
    borderStyleBase: {
        width: 30,
        height: 45
    },
    otpView: {
        width: '80%',
        height: 200,
        color: 'black',
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: 'black',
        borderBottomColor: '#17BED0',
    },
})

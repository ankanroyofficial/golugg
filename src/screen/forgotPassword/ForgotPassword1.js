import React from 'react'
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { borderadius, height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation } from "@react-navigation/native"
import CustomBtm from '../../component/CustomBtm'
export default function ForgotPassword1() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Text style={style.headline}>Oh, Forgot Your Password?</Text>
            <Text style={style.detailsText}>Please enter your Mobile Number and we'll send you a OTP to reset your password.</Text>

            <View style={{ height: height * 0.08, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                    <Image source={require("../../assets/icon/icon-31.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                </View>
                <View style={{ flex: 5 }}>
                    <TextInput
                        label="Phone Number"
                        mode="flat"
                        placeholderTextColor="gray"
                        theme={{ colors: { primary: 'steelblue' } }}
                        style={{ backgroundColor: "white" }} />
                </View>
            </View>

            <CustomBtm title="Continue" color={primarycolor} onPress={() => navigation.navigate("ForgotOTP")} />
            <View style={style.bottomBox}>
                <Text style={style.textBlack}>remember the Password?</Text>
                <Text onPress={() => navigation.navigate("Login")} style={style.textRed}>Back to Login</Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    headline: {
        fontSize: width * 0.065,
        fontWeight: "bold",
        marginTop: height * 0.04
    },
    detailsText: {
        fontSize: width * 0.035,
        color: "gray",
        marginVertical: height * 0.02
    },
    bottomBox: {
        height: height * 0.09,
        marginTop: height * 0.06,
        borderRadius: borderadius,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 0.3,
        flexDirection: "row"
    },
    textBlack: { fontSize: width * 0.035, color: "black" },
    textRed: { color: "red", marginLeft: width * 0.015, fontSize: width * 0.035 }
})

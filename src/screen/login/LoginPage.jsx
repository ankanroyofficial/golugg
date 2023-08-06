import React, { useState } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
import { borderadius, height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation } from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';
import CustomBtm from '../../component/CustomBtm'
import axios from 'axios'
import CustomLoader from '../../component/CustomLoader'
export default function LoginPage() {
    const navigation = useNavigation();
    // const [clickEye, setClickEye] = useState(true)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const phoneError = () => {
        return phone.length != 10 && phone.length > 1
    };
    const passwordError = () => {
        return password.length < 6 && password.length > 0
    };
    const loginButtom = async () => {

        if (phone === "" || password === "") {
            alert("all Field Should be Fillup")
        } else {

            setLoading(true)
            try {
                const res = await axios.post(" https://phpwebdevelopmentservices.com/development/test/api/login", {
                    "jsonrpc": "2.0",
                    "params": {
                        "mobile": phone,
                        "password": password,
                        "firebase_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
                    }
                }
                )
                if (res.data.error === undefined) {
                    console.log(res.data)
                    navigation.navigate("Drawernavi")
                } else {
                    alert(res.data.error.message)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: width * 0.065, fontWeight: "bold", marginVertical: height * 0.04 }}>Welcome Back!</Text>

                <View style={{ height: height * 0.085, flexDirection: "row", marginBottom: height * 0.04 }}>
                    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                        <Image source={require("../../assets/icon/icon-32.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Phone Number"
                            mode="flat"
                            keyboardType="number-pad"
                            // onBlur={phoneError}
                            maxLength={10}
                            value={phone}
                            onChangeText={(e) => setPhone(e)}
                            theme={{ colors: { primary: primarycolor } }}
                            placeholderTextColor="gray"
                            style={{ backgroundColor: "white" }}
                        />
                        {/* <HelperText type="error" style={{ color: "red", textAlign: "right" }} visible={phoneError()}>
                        Enter 10 digits numbers
                    </HelperText> */}
                    </View>
                </View>
                <View style={{ height: height * 0.08, flexDirection: "row" }}>
                    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }}>
                        <Image source={require("../../assets/icon/icon-31.png")} style={{ height: "50%", width: "50%", resizeMode: "contain" }} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Password"
                            mode="flat"
                            autoCapitalize="none"
                            value={password}
                            // secureTextEntry={clickEye ? true : false}
                            secureTextEntry={true}
                            onChangeText={(e) => setPassword(e)}
                            placeholderTextColor="gray"
                            theme={{ colors: { primary: primarycolor } }}
                            style={{ backgroundColor: "white" }} />
                        {/* <HelperText type="error" style={{ color: "red",textAlign:"right" }} visible={passwordError()}>
                            Enter minimum 6 characters
                        </HelperText> */}
                    </View>
                    {/* <TouchableOpacity onPress={() => setClickEye(!clickEye)} activeOpacity={1} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Entypo name={clickEye ? "eye" : "eye-with-line"} size={width * 0.06} color="gray" />
                </TouchableOpacity> */}
                </View>

                <Text onPress={() => navigation.navigate("Forgot Password")} style={{ textAlign: "right", marginTop: height * 0.02, color: "red" }}>Forgot password?</Text>
                <CustomBtm title="Login" onPress={() => loginButtom()} color={primarycolor} />
                <View style={{ height: height * 0.09, marginTop: height * 0.06, borderRadius: borderadius, justifyContent: "center", alignItems: "center", borderColor: "gray", borderWidth: 0.3, flexDirection: "row" }}>
                    <Text style={{ fontSize: width * 0.037, color: "black" }}>Don't have an account on Golugg?</Text>
                    <Text onPress={() => navigation.navigate("Signup")} style={{ fontSize: width * 0.04, color: "red", marginLeft: width * 0.015 }}>Signup</Text>
                </View>
            </View>
            {loading == true ?<CustomLoader/>: null}
        </View>
    )
}

const styles = StyleSheet.create({

})

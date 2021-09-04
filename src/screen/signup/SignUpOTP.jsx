
import React, { useRef, useState } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { borderadius, grayborder, height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation, useRoute } from "@react-navigation/native"
import CustomBtm from '../../component/CustomBtm'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import LoginPage from '../login/LoginPage'
import CustomLoader from '../../component/CustomLoader'
// import OtpInputs from '../../component/OtpInputs'

export default function SignUpOTP() {
    const navigation = useNavigation();
    const route = useRoute();
    // const focusFunc = () => {
    //     input1.current.focus()
    // }
    // React.useEffect(() => {
    //     // focusFunc()
    // }, [])

    const [loading, setLoading] = useState(false)

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();

    // const [pin1, setPin1] = useState()
    // const [pin2, setPin2] = useState()
    // const [pin3, setPin3] = useState()
    // const [pin4, setPin4] = useState()
    // const [pin5, setPin5] = useState()
    // const [pin6, setPin6] = useState()
    // const [otp, setOtp] = useState()
    // const data = "123456"
    const data = route.params.otp.toString()
    const submitButton = async () => {
        // if (pin1 === "" || pin2 === "" || pin3 === "" || pin4 === "" || pin5 === "" || pin6 === "") {
        //     alert("not Submit")
        // } else {
        //     console.warn("OTP = " + pin1 + pin2 + pin3 + pin4 + pin5 + pin6)
        // }
        // console.log(typeof (route.params.otp.toString()))
        // const data = route.params.otp.toString()
        // console.log(data[0])
        // navigation.navigate("Login")
        try {
            setLoading(true)
            const res = await axios.post(" https://phpwebdevelopmentservices.com/development/test/api/login", {
                "jsonrpc": "2.0",
                "params": {
                    "mobile": route.params.phone,
                    "mobile_otp": route.params.otp,
                    "firebase_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
                }
            }
            )
            setLoading(false)
            navigation.navigate("Login")

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <Text style={style.headline}>OTP Verification</Text>
            <Text style={style.detailsText}>Please enter the 6 digit code sent to you at{"\n"} +91 {route.params.phone}</Text>

            <View style={{ height: height * 0.08, flexDirection: "row", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                <View style={style.smallinputbox}>
                    <TextInput
                        ref={input1}
                        maxLength={1}
                        value={data[0]}
                        // onChangeText={
                        //     (e) => {
                        //         setPin1(e)
                        //         if (pin1 != "") {
                        //             input2.current.focus()
                        //         }
                        //     }
                        // }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input2}
                        value={data[1]}
                        // onChangeText={
                        //     (e) => {
                        //         setPin2(e)
                        //         if (pin2 != "") {
                        //             input3.current.focus()
                        //         }
                        //     }
                        // }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        value={data[2]}
                        ref={input3}
                        // onChangeText={
                        //     (e) => {
                        //         setPin3(e)
                        //         if (pin3 != "") {
                        //             input4.current.focus()
                        //         }
                        //     }
                        // }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input4}
                        value={data[3]}
                        // onChangeText={
                        //     (e) => {
                        //         setPin4(e)
                        //         if (pin4 != "") {
                        //             input5.current.focus()
                        //         }
                        //     }
                        // }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input5}
                        value={data[4]}
                        // onChangeText={
                        //     (e) => {
                        //         setPin5(e)
                        //         if (pin5 != "") {
                        //             input6.current.focus()
                        //         }
                        //     }
                        // }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input6}
                        value={data[5]}
                        // onChangeText={
                        //     (e) => {
                        //         setPin6(e)
                        //     }}
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>


            </View>

            <CustomBtm title="Sign up" color={primarycolor} onPress={() => submitButton()} />
            <View style={style.bottomBox}>
                <Text style={style.textBlack}>Did not received verification code yet</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn("Resend Code")} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                    <View style={{ height: width * 0.035, width: width * 0.035 }}>
                        <Image source={require("../../assets/icon/icon-48.png")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                    </View>

                    <Text style={style.textRed}>Resend Code</Text>
                </TouchableOpacity>

            </View>
            {loading == true ? <CustomLoader /> : null}

        </View>
    )
}

const style = StyleSheet.create({
    headline: {
        fontSize: width * 0.065,
        fontWeight: "bold",
        marginTop: height * 0.04,
        letterSpacing: 1
    },
    detailsText: {
        fontSize: width * 0.036,
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
        // flexDirection: "row"
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
    smallinputbox: {
        height: width * 0.14,
        width: width * 0.12,




    },
    smalltextInput: {
        height: width * 0.14,
        backgroundColor: "white",
        borderColor: grayborder,
        borderWidth: 2,
        fontSize: width * 0.06,
        textAlign: "center",

    }
})



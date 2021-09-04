import React, { useRef, useState } from 'react'
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { borderadius, grayborder,  height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation } from "@react-navigation/native"
import CustomBtm from '../../component/CustomBtm'
import { TextInput } from 'react-native-paper'
// import OtpInputs from '../../component/OtpInputs'

export default function ForgotOTP() {
    const navigation = useNavigation();
    const focusFunc = () => {
        input1.current.focus()
    }
    React.useEffect(() => {
        focusFunc()
    }, [])

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();
    const input6 = useRef();

    const [pin1, setPin1] = useState()
    const [pin2, setPin2] = useState()
    const [pin3, setPin3] = useState()
    const [pin4, setPin4] = useState()
    const [pin5, setPin5] = useState()
    const [pin6, setPin6] = useState()

    const submitButton = () => {
        if (pin1 === "" || pin2 === "" || pin3 === "" || pin4 === "" || pin5 === "" || pin6 === "") {
            alert("not Submit")
        } else {
            console.warn("OTP = ", pin1 + pin2 + pin3 + pin4 + pin5 + pin6)
        }

    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <Text style={style.headline}>Oh, Forgot Your Password?</Text>
            <Text style={style.detailsText}>Please enter the 6 digit code sent to you at{"\n"} +91 9876543210</Text>

            <View style={{ height: height * 0.08, flexDirection: "row", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                <View style={style.smallinputbox}>
                    <TextInput
                        ref={input1}
                        maxLength={1}
                        value={pin1}
                        onChangeText={
                            (e) => {
                                setPin1(e)
                                if (pin1 != "") {
                                    input2.current.focus()
                                }
                            }

                        }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input2}
                        value={pin2}
                        onChangeText={
                            (e) => {
                                setPin2(e)
                                if (pin2 != "") {
                                    input3.current.focus()
                                }
                            }

                        }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        value={pin3}
                        ref={input3}
                        onChangeText={
                            (e) => {
                                setPin3(e)
                                if (pin3 != "") {
                                    input4.current.focus()
                                }
                            }

                        }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input4}
                        value={pin4}
                        onChangeText={
                            (e) => {
                                setPin4(e)
                                if (pin4 != "") {
                                    input5.current.focus()
                                }
                            }
                        }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input5}
                        value={pin5}
                        onChangeText={
                            (e) => {
                                setPin5(e)
                                if (pin5 != "") {
                                    input6.current.focus()
                                }
                            }
                        }
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>
                <View style={style.smallinputbox}>
                    <TextInput maxLength={1}
                        ref={input6}
                        value={pin6}
                        onChangeText={
                            (e) => {
                                setPin6(e)
                            }}
                        keyboardType="decimal-pad"
                        style={style.smalltextInput}
                        theme={{ colors: { primary: primarycolor } }}
                    />
                </View>


            </View>

            <CustomBtm title="Submit" color={primarycolor} onPress={() => submitButton()} />
            <View style={style.bottomBox}>
                <Text style={style.textBlack}>Did not received verification code yet</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => console.warn("Resend Code")} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                    <View style={{ height: width * 0.035, width: width * 0.035 }}>
                        <Image source={require("../../assets/icon/icon-48.png")} style={{ height: "100%", width: "100%", resizeMode: "cover" }} />
                    </View>

                    <Text style={style.textRed}>Resend Code</Text>
                </TouchableOpacity>

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



import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
import axios from "axios"
import { borderadius, height, paddinghorizontal, primarycolor, width } from "../../constant/Constant"
import { useNavigation } from "@react-navigation/native"
import CustomBtm from '../../component/CustomBtm'
import CustomLoader from '../../component/CustomLoader'

export default function SignupPage() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const phoneError = () => {
        return phone.length != 10 && phone.length > 1
    };
    const passwordError = () => {
        return password.length < 6 && password.length > 0
    };
    const continueButtom = async () => {

        if (firstname === "" || lastname === "" || password === "" || confirmedPassword === "") {
            alert("all Field Should be Fillup")
        } else {
            if (phone.length != 10) {
                alert("enter 10 Digit Valid number")
            } else {
                if (password == confirmedPassword) {
                    setLoading(true)
                    try {
                        const res = await axios.post("https://phpwebdevelopmentservices.com/development/test/api/register", {
                            "jsonrpc": "2.0",
                            "params": {
                                "email": email,
                                "password": password,
                                "password_confirmation": confirmedPassword,
                                "phone": phone,
                                "first_name": firstname,
                                "last_name": lastname
                            }
                        })
                        if (res.data.error === undefined) {
                            console.log(res.data.result.mobile_otp)
                            navigation.navigate("SignUpOTP", { otp: res.data.result.mobile_otp, phone: res.data.result.phone })
                        } else {
                            alert(res.data.error.message)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    setLoading(false)
                } else {
                    alert("Password & Confirmed Password Should be Same")
                }
            }

        }
    }
    return (

        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal }}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}>
                <Text style={{ fontSize: width * 0.065, fontWeight: "bold", marginTop: height * 0.04, marginBottom: height * 0.01 }}>Welcome To Golugg</Text>
                <View style={{ height: height * 0.075, flexDirection: "row", marginBottom: height * 0.025 }}>
                    <View style={style.iconview}>
                        <Image source={require("../../assets/icon/icon-34.png")} style={style.inputicon} />
                    </View>
                    <View style={{ flex: 2.5, justifyContent: "center", paddingHorizontal: width * 0.02 }}>
                        <TextInput
                            label="First Name"
                            mode="flat"
                            value={firstname}
                            onChangeText={(e) => { setFirstName(e) }}
                            theme={{ colors: { primary: 'steelblue' } }}
                            style={{ backgroundColor: "white", }}
                            style={{ backgroundColor: "white" }} />
                    </View>
                    <View style={{ flex: 2.5, justifyContent: "center", paddingHorizontal: width * 0.02 }}>
                        <TextInput
                            label="Last Name"
                            mode="flat"
                            value={lastname}
                            onChangeText={(e) => { setLastName(e) }}
                            theme={{ colors: { primary: 'steelblue' } }}
                            style={{ backgroundColor: "white", }}
                            style={{ backgroundColor: "white" }} />
                    </View>
                </View>
                <View style={style.textinputView}>
                    <View style={style.iconview}>
                        <Image source={require("../../assets/icon/icon-33.png")} style={style.inputicon} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Email (Optional)"
                            mode="flat"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={(e) => { setEmail(e) }}
                            theme={{ colors: { primary: 'steelblue' } }}
                            style={{ backgroundColor: "white", }} />
                    </View>
                </View>
                <View style={style.textinputView}>
                    <View style={style.iconview}>
                        <Image source={require("../../assets/icon/icon-32.png")} style={style.inputicon} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Phone Number"
                            mode="flat"
                            maxLength={10}
                            keyboardType="number-pad"
                            onBlur={phoneError}
                            value={phone}
                            onChangeText={(e) => { setPhone(e) }}
                            theme={{ colors: { primary: phone.length != 10 && phone.length != 0 ? "red" : 'steelblue' } }}
                            style={{ backgroundColor: "white", }}
                            style={{ backgroundColor: "white" }} />
                        <HelperText type="error" style={{ color: "red", textAlign: "right" }} visible={phoneError()}>
                            Enter 10 digits numbers
                        </HelperText>
                    </View>
                </View>
                <View style={style.textinputView}>
                    <View style={style.iconview}>
                        <Image source={require("../../assets/icon/icon-31.png")} style={style.inputicon} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Password"
                            secureTextEntry={true}
                            onBlur={passwordError}
                            mode="flat"
                            autoCapitalize="none"
                            value={password}
                            onChangeText={(e) => { setPassword(e) }}
                            theme={{ colors: { primary: password.length < 6 && password.length > 0 ? "red" : 'steelblue' } }}
                            style={{ backgroundColor: "white", }}
                            style={{ backgroundColor: "white" }} />
                        <HelperText type="error" style={{ color: "red", textAlign: "right" }} visible={passwordError()}>
                            Enter minimum 6 characters
                        </HelperText>
                    </View>
                </View>

                <View style={{ height: height * 0.08, flexDirection: "row" }}>
                    <View style={style.iconview}>
                        <Image source={require("../../assets/icon/icon-31.png")} style={style.inputicon} />
                    </View>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            label="Confirm Password"
                            secureTextEntry={true}
                            mode="flat"
                            autoCapitalize="none"
                            value={confirmedPassword}
                            onChangeText={(e) => { setConfirmedPassword(e) }}
                            theme={{ colors: { primary: 'steelblue' } }}
                            style={{ backgroundColor: "white", }}
                            style={{ backgroundColor: "white" }} />
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: height * 0.04, justifyContent: "center" }}>
                    <Text style={{ color: "black", fontSize: width * 0.035 }}>By clicking an below, I agree to the</Text>
                    <Text onPress={() => console.log("Terms of Use")} style={style.textRed}>Terms of Use</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={style.textBlack}>and have read the</Text>
                    <Text onPress={() => console.log("Privacy Policy")} style={style.textRed}>Privacy Policy</Text>
                </View>

                {/* <CustomBtm title="Continue" color={primarycolor} onPress={() => navigation.navigate("SignUpOTP")} /> */}
                <CustomBtm title="Continue" color={primarycolor} onPress={() => continueButtom()} />
                <View style={{ height: height * 0.09, marginTop: height * 0.06, borderRadius: borderadius, justifyContent: "center", alignItems: "center", borderColor: "gray", borderWidth: 0.3, flexDirection: "row" }}>
                    <Text style={style.textBlack}>already have an account on Golugg?</Text>
                    <Text onPress={() => navigation.navigate("Login")} style={{ fontSize: width * 0.035, color: "red", marginLeft: width * 0.015 }}>Login</Text>
                </View>
            </ScrollView>
            {loading == true ? <CustomLoader /> : null}
        </View >

    )
}

const style = StyleSheet.create({
    textinputView: { height: height * 0.08, flexDirection: "row", marginBottom: height * 0.025, justifyContent: "center" },
    iconview: { flex: 1, justifyContent: "flex-end", alignItems: "flex-start" },
    inputicon: { height: "52%", width: "52%", resizeMode: "contain" },
    textBlack: { fontSize: width * 0.035, color: "black" },
    textRed: { color: "red", marginLeft: width * 0.015, fontSize: width * 0.035 }
})






// Object {
//     "jsonrpc": "2.0",
//     "result": Object {
//       "email": "iamakon810@gmail.com",
//       "mail_message": "verification code is sent to your mail",
//       "message_2": "Registation successfull",
//       "mobile_otp": 813377,
//       "phone": "70019 73683",
//     },
//   }


// IF phone number already exists:
// {
//     "jsonrpc": "2.0",
//     "error": {
//         "code": "-32723",
//         "message": "Mobile Number exist",
//         "meaning": "Mobile numbers already exist on our platform."
//              },
//     "message": "This number is already exists"
// }



// SUCCESSFUL REGISTER:
// {
//     "jsonrpc": "2.0",
//     "message_1": "verification code is sent to your mail",
//     "results": {
//         "email": "jeetbasak54@gmail.com",
//         "phone": "1234567940",
//         "mobile_otp": 410943
//     },
//     "message_2": "Registation successfull"
// }

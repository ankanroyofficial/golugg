import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import { height, paddinghorizontal, primarycolor, width } from '../../constant/Constant'
import { Picker } from '@react-native-picker/picker';
import { useNavigation, useRoute } from "@react-navigation/native"
import CustomChildHeader from '../../component/CustomChildHeader'
import CustomBtm from '../../component/CustomBtm';

export default function EditProfile() {
    const navigation = useNavigation()
    const route = useRoute()
    const [country, setCountry] = useState();
    const [countryList] = useState([
        "India",
        "Australia",
        "UK",
        "Dubai",
        "Spain",
        "Brazil"
    ].sort()
    );
    console.log(country)
    return (
        <View style={{ flex: 1 }}>
            <CustomChildHeader title={route.params.title} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ height: height * 0.22 }}>
                    <ImageBackground source={require("../../assets/icon/icon-60.png")} style={styles.topimagebackground} resizeMode="stretch">
                        <View style={styles.profileimagebox}>
                            <Image source={require("../../assets/image/icon-100.png")} style={{ height: "100%", width: "100%", resizeMode: "cover", borderRadius: 100 }} />
                            <TouchableOpacity onPress={() => alert("function Not Added")} style={styles.imagechangeicon}>
                                <Image source={require("../../assets/icon/icon-81.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: width * 0.04, fontWeight: "bold" }}>Abhijeet Chatterjee</Text>
                            <Text style={{ color: "white", fontSize: width * 0.036, fontWeight: "bold", marginTop: width * 0.008 }}>+91 9876543210</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: paddinghorizontal, paddingTop: height * 0.02 }}>
                    <View style={{ height: height * 0.075, flexDirection: "row", marginBottom: height * 0.0125, }}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-34.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 2.5, justifyContent: "center", paddingHorizontal: width * 0.02 }}>
                            <TextInput
                                label="First Name"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white" }} />
                        </View>
                        <View style={{ flex: 2.5, justifyContent: "center", paddingHorizontal: width * 0.02 }}>
                            <TextInput
                                label="Last Name"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white" }} />
                        </View>
                    </View>
                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-33.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                label="Email (Optional)"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white", }} />
                        </View>
                    </View>
                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-33.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                label="Phone Number"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white", }} />
                        </View>
                    </View>

                    <Text style={{ fontSize: width * 0.04, marginTop: height * 0.025, fontWeight: "bold", color: "black" }}>Address Information</Text>

                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-77.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5, justifyContent: "center", borderBottomWidth: 0.5, borderBottomColor: "black" }}>
                            <Picker
                                selectedValue={country}
                                onValueChange={(itemValue) =>
                                    setCountry(itemValue)
                                }>
                                {countryList.map((item, index) => (
                                    <Picker.Item key={index} label={item} value={item} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-76.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                label="State"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white", }} />
                        </View>
                    </View>
                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-75.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                label="City"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white", }} />
                        </View>
                    </View>
                    <View style={styles.textinputView}>
                        <View style={styles.iconview}>
                            <Image source={require("../../assets/icon/icon-74.png")} style={styles.inputicon} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <TextInput
                                label="Full address"
                                mode="flat"
                                theme={{ colors: { primary: 'steelblue' } }}
                                style={{ backgroundColor: "white", }} />
                        </View>
                        <View style={{ flex: 0.7, justifyContent: "flex-end", alignItems: 'center', paddingBottom: width * 0.01 }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => alert("Map Not Added")} style={{ height: height * 0.033, width: height * 0.033 }}>
                                <Image source={require("../../assets/icon/icon-80.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <CustomBtm title="Save All Changes" color="red" onPress={() => alert(" Change Sucessfully")} />
                    <Text onPress={() => alert("Change Password?")} style={{ marginTop: height * 0.0125, marginBottom: height * 0.02, textAlign: "center", color: primarycolor, fontWeight: "bold" }}>Changes Password?</Text>
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    topimagebackground: { height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" },
    profileimagebox: { height: height * 0.12, width: height * 0.12, backgroundColor: "white", borderRadius: (height * 0.12) / 2 },
    imagechangeicon: { height: height * 0.03, width: height * 0.03, position: "absolute", top: width * 0.01, right: 0, borderRadius: (height * 0.03) / 2 },
    iconview: { flex: 1, justifyContent: "flex-end", alignItems: "flex-start" },
    inputicon: { height: "52%", width: "52%", resizeMode: "contain" },
    textinputView: { height: height * 0.075, flexDirection: "row", marginVertical: height * 0.0125, justifyContent: "center" },
})

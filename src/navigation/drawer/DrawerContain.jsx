import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { height, primarycolor, width } from '../../constant/Constant'
export default function DrawerContain(props) {
    const navigation = useNavigation();
    const notCompletealart = (val) => {
        alert(val + " Page is Coming Soon !" + "\n " + "only DashBoard & Edit profile  Page is done ")
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ImageBackground source={require("../../assets/icon/icon-60.png")} style={{ height: height * 0.2, borderBottomLeftRadius: width * 0.1, flexDirection: "row" }} resizeMode="stretch">
                <View style={{ flex: 0.9, justifyContent: "center", alignItems: "flex-end" }}>

                    <View style={{ height: height * 0.08, width: height * 0.08, backgroundColor: "pink", borderRadius: (height * 0.085) / 2, marginRight: width * 0.01, overflow: "hidden" }}>
                        <Image source={require("../../assets/image/icon-62.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ flex: 2.2, justifyContent: "center", marginLeft: width * 0.01 }}>
                    <Text style={{ fontSize: width * 0.045, color: "white" }}>Abhijeet Manna</Text>
                    <View style={{ flexDirection: "row", marginTop: width * 0.01 }}>
                        <View style={{ height: width * 0.04, width: width * 0.04 }}>
                            <Image source={require("../../assets/icon/icon-57.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={{ fontSize: width * 0.032, color: "white", marginLeft: width * 0.01 }}>Wallet Balance : $99999.00</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ flex: 1 }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate("DashBoardPage", { title: 'DashBoard' }) }} style={styles.drawersectionwhite}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-73.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>DashBoard</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("My Trips") }} style={styles.drawersectionwhite}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-72.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>My Trips</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("My Wallet") }} style={styles.drawersectionwhite}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-71.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>My Wallet</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("chat") }} style={styles.drawersectionwhite}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-70.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.drawertext}>Chat</Text>
                        <View style={styles.redcircle}>
                            <Text style={styles.redcircletext}>10</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("Notifications") }} style={styles.drawersectionwhite}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-69.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={styles.drawertext}>Notifications</Text>
                        <View style={styles.redcircle}>
                            <Text style={styles.redcircletext}>24</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("EditProfile", { title: 'Edit Profile' })} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-68.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("Change Password") }} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-67.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>Change Password</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("Contact Us") }} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-66.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>Contact Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("About Us") }} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-65.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>About Us</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("Terms and Condition") }} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-64.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>Terms and Condition</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { notCompletealart("Privacy Policy") }} style={styles.drawersectiongray}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.drawericon}>
                            <Image source={require("../../assets/icon/icon-64.png")} style={styles.imagestyle} />
                        </View>
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={styles.drawertext}>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate("Login") }} style={{ height: height * 0.066, backgroundColor: "#F8F8F8", borderTopColor: "white", borderTopWidth: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.drawericon}>
                        <Image source={require("../../assets/icon/icon-63.png")} style={styles.imagestyle} />
                    </View>
                </View>
                <View style={{ flex: 3, justifyContent: "center" }}>
                    <Text style={styles.drawertext}>Logout</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    drawersectionwhite: { flex: 1, flexDirection: "row", backgroundColor: "white" },
    drawersectiongray: { flex: 1, flexDirection: "row", backgroundColor: "#F8F8F8" },
    drawericon: { height: height * 0.026, width: height * 0.026 },
    drawertext: { fontSize: width * 0.038 },
    imagestyle: { height: "100%", width: "100%", resizeMode: "contain" },
    redcircle: { height: height * 0.035, width: height * 0.035, backgroundColor: "red", borderRadius: (height * 0.035) / 2, marginRight: width * 0.05, justifyContent: "center", alignItems: "center" },
    redcircletext: { fontWeight: "bold", color: "white", fontSize: width * 0.035 }
})

{/* <View style={[styles.drawersection,{backgroundColor:"green"}]} ></View> */ }
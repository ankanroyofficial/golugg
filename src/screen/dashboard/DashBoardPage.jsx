import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { borderadius, elevation, grayborder, graytext, height, paddinghorizontal, primarycolor, width } from '../../constant/Constant'
import CustomChildHeader from '../../component/CustomChildHeader'
import { useRoute } from "@react-navigation/native"
import CustomBtm from "../../component/CustomBtm"
export default function DashBoardPage() {
    const route = useRoute();
    return (
        <View style={{ flex: 1, backgroundColor: "#f8f8f8",paddingBottom:width*0.03 }}>
            <CustomChildHeader title={route.params.title} />
            <View style={{ height: height * 0.22 }}>
                <ImageBackground source={require("../../assets/icon/icon-86.png")} style={styles.topimagebackground} resizeMode="stretch">
                    <View style={styles.profileimagebox}>
                        <Image source={require("../../assets/image/icon-100.png")} style={{ height: "100%", width: "100%", resizeMode: "cover", borderRadius: 100 }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: width * 0.04, fontWeight: "bold" }}>Abhijeet Chatterjee</Text>
                        <Text style={{ color: "white", fontSize: width * 0.036, fontWeight: "bold", marginTop: width * 0.008 }}>+91 9876543210</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: height * 0.02, }}>
                <View style={styles.squarebox}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <View style={styles.bottomcurvebox}>
                            <Image source={require("../../assets/icon/icon-83.png")} style={{ height: "100%", width: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035 }}>Past Trips</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035, color: primarycolor }}>18</Text>
                    </View>
                </View>
                <View style={styles.squarebox}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <View style={styles.bottomcurvebox}>
                            <Image source={require("../../assets/icon/icon-83.png")} style={{ height: "100%", width: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035 }}>Cancel Trips</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035, color: primarycolor }}>10</Text>
                    </View>
                </View>
                <View style={styles.squarebox}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <View style={styles.bottomcurvebox}>
                            <Image source={require("../../assets/icon/icon-82.png")} style={{ height: "100%", width: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035 }}>Wallet Balance</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: width * 0.035, color: primarycolor }}>$9999.99</Text>
                    </View>
                </View>
            </View>
            <Text style={{ marginVertical: height * 0.02, marginHorizontal: paddinghorizontal, fontSize: width * 0.045, fontWeight: 'bold' }}>RECENT TRIP</Text>


            <View style={{ height: height * 0.21, backgroundColor: 'white', marginHorizontal: width * 0.035, elevation: elevation, borderRadius: borderadius }}>
                <View style={{ flex: 0.5, flexDirection: "row", paddingHorizontal: width * 0.02, borderBottomWidth: 1.5, borderBottomColor: grayborder }}>
                    <View style={{ flex: 1.6, justifyContent: "center" }}>
                        <Text style={{ fontSize: width * 0.034, color: graytext, fontWeight: "bold" }}>ID : AB-111-00004</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.034, color: graytext }}>Industrial Machinery Product</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                        <Text style={{ fontSize: width * 0.034, color: primarycolor, fontWeight: "bold" }}>$ 9999.50</Text>
                        <Text style={{ fontSize: width * 0.028, color: graytext }}>Payment Pending</Text>
                    </View>
                </View>
                <View style={{ flex: 0.8, flexDirection: "row" }}>
                    <View style={{ flex: 0.12, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: width * 0.04, width: width * 0.04 }}>
                            <Image source={require("../../assets/icon/icon-6.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <View style={{ height: width * 0.06, width: width * 0.015 }}>
                            <Image source={require("../../assets/icon/icon-4.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <View style={{ height: width * 0.04, width: width * 0.04 }}>
                            <Image source={require("../../assets/icon/icon-5.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, color: graytext }}>Rajeev Colony,Punjub Bagh,Nereal,Delhi,10,india ,earth,galaxy</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, color: graytext }}>Abc Road,Bawana Industry,sec-1,India,Asia,earth,galaxy</Text>
                    </View>
                </View>
                <View style={{ flex: 0.4, flexDirection: "row", borderTopWidth: 1.5, borderTopColor: grayborder }}>
                    <View style={styles.smallsection}>
                        <View style={styles.smallsectionIcon}>
                            <Image source={require("../../assets/icon/icon-46.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={styles.smallsectiontext}>Eicher 19FT</Text>
                    </View>
                    <View style={[styles.smallsection, { borderLeftColor: grayborder, borderRightColor: grayborder, borderLeftWidth: 1.5, borderRightWidth: 1.5 }]}>
                        <View style={styles.smallsectionIcon}>
                            <Image source={require("../../assets/icon/icon-45.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={styles.smallsectiontext}>410 Km</Text>
                    </View>
                    <View style={styles.smallsection}>
                        <View style={styles.smallsectionIcon}>
                            <Image source={require("../../assets/icon/icon-44.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                        <Text style={styles.smallsectiontext}>2020-06-10</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: "12%", width: "70%" }}>
                            <Image source={require("../../assets/icon/icon-59.png")} style={{ height: "100%", width: "100%", resizeMode: "contain" }} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, }}></View>

            <TouchableOpacity onPress={() => alert("Truck Booking Confirmed")} activeOpacity={1} style={{ height: height * 0.07, backgroundColor: "red", borderRadius: borderadius, justifyContent: "center", alignItems: "center", marginHorizontal: width * 0.035 }}>
                <Text style={{ fontWeight: "bold", fontSize: width * 0.052, color: "white", letterSpacing: 0.5 }}>Book A Truck</Text>
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    topimagebackground: { height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" },
    profileimagebox: { height: height * 0.12, width: height * 0.12, backgroundColor: "white", borderRadius: (height * 0.12) / 2 },
    imagechangeicon: { height: height * 0.03, width: height * 0.03, position: "absolute", top: width * 0.01, right: 0, borderRadius: (height * 0.03) / 2 },
    squarebox: { height: width * 0.27, width: width * 0.29, backgroundColor: "white", borderRadius: borderadius, elevation: elevation },
    bottomcurvebox: { height: "100%", width: "38%" },
    smallsection: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", flexDirection: "row" },
    smallsectionIcon: { height: width * 0.035, width: width * 0.035, },
    smallsectiontext: { fontSize: width * 0.03, marginLeft: width * 0.01, color: graytext },
})
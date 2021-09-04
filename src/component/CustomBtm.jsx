import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { borderadius, height, paddinghorizontal, width } from '../constant/Constant'
import PropTypes from 'prop-types';
export default function CustomBtm(props) {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.7} style={{ height: height * 0.07, backgroundColor: props.color, marginTop: height * 0.04, borderRadius: borderadius, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: width * 0.052, color: "white", letterSpacing: 0.5 }}>{props.title}</Text>
        </TouchableOpacity>


    )
}
// CustomBtm.PropTypes = {
//     title: PropTypes.string,
//     onPress: PropTypes.func
// }
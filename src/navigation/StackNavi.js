import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screen/login/LoginPage';
import SignupPage from '../screen/signup/SignupPage';
import ForgotPassword1 from '../screen/forgotPassword/ForgotPassword1';
import ForgotOTP from '../screen/forgotPassword/ForgotOTP';
import SignUpOTP from '../screen/signup/SignUpOTP';
import ChangePassWord from '../screen/forgotPassword/ChangePassWord';
import HomePage from '../screen/home/HomePage';
import Drawernavi from './drawer/Drawernavi';
import EditProfile from '../screen/editprofile/EditProfile';
import DashBoardPage from '../screen/dashboard/DashBoardPage';
export default function StackNavi() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }} />
                <Stack.Screen name="Forgot Password" component={ForgotPassword1} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotOTP" component={ForgotOTP} options={{ headerShown: false }} />
                <Stack.Screen name="SignUpOTP" component={SignUpOTP} options={{ headerShown: false }} />
                <Stack.Screen name="ChangePassWord" component={ChangePassWord} options={{ headerShown: false }} />
                <Stack.Screen name="Drawernavi" component={Drawernavi} options={{ headerShown: false }} />
                <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name="DashBoardPage" component={DashBoardPage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

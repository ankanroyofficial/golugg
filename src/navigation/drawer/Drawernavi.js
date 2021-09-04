import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../../screen/home/HomePage';
import DrawerContain from './DrawerContain';
const Drawer = createDrawerNavigator();
export default function Drawernavi() {

    return (
        <Drawer.Navigator drawerContent={props=><DrawerContain {...props} />}>
            <Drawer.Screen name="HomePage" component={HomePage} options={{headerShown:true}} />
        </Drawer.Navigator>
    )
}

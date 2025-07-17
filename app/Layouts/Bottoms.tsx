import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Useraccount from '../Screens/useraccount';
import All from '../Screens/All';
import MainSerach from '../Screens/MainSerach';
import Login from '../Screens/Login';
import Advertise from '../Screens/Advertise';
import MyDrawer from './Drawer';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="خانه"
        >
            <Tab.Screen name="خانه" component={Home}
                options={{
                    headerTitleStyle: {
                        fontFamily: "IRANYekan"
                    },
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { paddingTop: 10, fontFamily: 'IRANYekan', fontSize: 11, color: "gray" },
                    tabBarStyle: {
                        borderRadius: 20, position: "absolute", backgroundColor: '#fff',
                        margin: 30,
                        shadowColor: "#6E8E59",
                        shadowOpacity: 0.5,
                        shadowRadius: 7,
                        height: 70,
                    },
                    tabBarActiveTintColor: '#00b064',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIconStyle: {
                        top: 8,
                    },
                    tabBarIcon: ({ focused, color }) => focused ? <Ionicons name='home' size={30} color={color} /> : <Ionicons name='home-outline' size={30} color={color} />
                }}
            />
            <Tab.Screen name="مورد علاقه " component={Login}
                options={{
                    headerStyle: { backgroundColor: '#D4C7B4', },
                    headerTitleStyle: {
                        fontFamily: "IRANYekan"
                    },
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { paddingTop: 10, fontFamily: 'IRANYekan', fontSize: 11, color: "gray" },
                    tabBarStyle: {
                        borderRadius: 20, position: "absolute", backgroundColor: '#fff',
                        margin: 30,
                        shadowColor: "#6E8E59",
                        shadowOpacity: 0.5,
                        shadowRadius: 7,
                        height: 70,
                    }, tabBarActiveTintColor: '#00b064',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIconStyle: {
                        top: 8,
                    },
                    tabBarIcon: ({ color, focused }) => focused ? <AntDesign name='heart' size={28} color={color} /> : <AntDesign name='hearto' size={28} color={color} />
                }}
            />
            <Tab.Screen name="جستجو" component={MainSerach}
                options={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { paddingTop: 10, fontFamily: 'IRANYekan', fontSize: 11, color: "gray" },
                    tabBarStyle: {
                        borderRadius: 20, position: "absolute", backgroundColor: '#fff',
                        margin: 30,
                        shadowColor: "#6E8E59",
                        shadowOpacity: 0.5,
                        shadowRadius: 7,
                        height: 70,
                    }, tabBarActiveTintColor: '#00b064',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIconStyle: {
                        top: 8,
                    },
                    tabBarIcon: ({ focused, color }) =>
                        <View style={{
                            height: 60,
                            width: 60,
                            justifyContent: 'center',
                            alignItems: "center",
                            backgroundColor: "#00b064",
                            borderRadius: 30,
                            top: -25,
                            elevation: 10,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                        }}>
                            <AntDesign name='search1' size={30} color={"#fff"} />
                        </View>
                }}
            />
            <Tab.Screen name="ثبت آگهی" component={Advertise}
                options={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { paddingTop: 10, fontFamily: 'IRANYekan', fontSize: 11, color: "gray" },
                    tabBarStyle: {
                        borderRadius: 20, position: "absolute", backgroundColor: '#fff',
                        margin: 30,
                        shadowColor: "#6E8E59",
                        shadowOpacity: 0.5,
                        shadowRadius: 7,
                        height: 70,
                    }, tabBarActiveTintColor: '#00b064',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIconStyle: {
                        top: 8,
                    },
                    tabBarIcon: ({ focused, color }) => focused ? <AntDesign name='pluscircle' size={28} color={color} /> : <AntDesign name='pluscircleo' size={28} color={color} />
                }}
            />
            <Tab.Screen name="حساب من" component={Useraccount}
                options={{
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { paddingTop: 10, fontFamily: 'IRANYekan', fontSize: 11, color: "gray" },
                    tabBarStyle: {
                        borderRadius: 20, position: "absolute", backgroundColor: '#fff',
                        margin: 30,
                        shadowColor: "#6E8E59",
                        shadowOpacity: 0.5,
                        shadowRadius: 7,
                        height: 70,
                    }, tabBarActiveTintColor: '#00b064',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIconStyle: {
                        top: 8,
                    },
                    tabBarIcon: ({ color, focused }) => focused ? <FontAwesome name='user' size={28} color={color} /> : <FontAwesome name='user-o' size={28} color={color} />

                }}
            />
        </Tab.Navigator>
    );
}


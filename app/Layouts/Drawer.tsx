import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyTabs from './MyTabs';
import Search from '../Screens/Search';
import Home from '../Screens/Home';
import BottomTabs from './Bottoms';
import Faq from '../Screens/Faq';
import { useNavigation } from '@react-navigation/native';

const DrawerContent = (props: any) => {
    const navigation = useNavigation();


    return (
        <DrawerContentScrollView style={{ backgroundColor: "#fff" }} {...props} nestedScrollEnabled={true}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}> پتوس</Text>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />

                </View>
                <TouchableOpacity style={{

                    justifyContent: "center", alignItems: "center",
                    backgroundColor: "#fff", marginTop: 10,
                    padding: 10,
                    borderWidth: 1, borderColor: "#00b064",
                    borderRadius: 5,
                    marginVertical: 30,
                    marginHorizontal: 10,

                }}>
                    <View style={{ flexDirection: "row", }}>

                        <Text style={{

                            color: "#000",
                            fontSize: 14,
                            fontFamily: "IRANYekan",
                        }}> ورود به حساب کاربری</Text>
                    </View>
                </TouchableOpacity>

                {/* <View style={styles.logoContainer}>
                    <AntDesign style={{  padding:20, }} name='left' size={20} color="#060709" />
                    <Text style={{ flex: 1, fontSize:16,  }}>09022836815</Text>

                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'IRANYekan',
                        color: "#111",
                        paddingHorizontal: 10,
                    }}>فایزه یادگاری</Text>
                    <FontAwesome name='user-circle-o' size={35} color="#060709" onPress={() => props.navigation.goBack()} />

                </View> */}

                <View style={{ borderTopWidth: .2, borderColor: '#ccc', }}></View>
{/* 
                <TouchableOpacity onPress={() => { props.navigation.navigate('BottomTabs') }}
                    style={styles.head}>

                    <Text style={styles.label}>صفحه اصلی</Text>

                    <Feather name="home" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { props.navigation.navigate('About') }}
                    style={styles.head}>

                    <Text style={styles.label}> درباره ما</Text>
                    <AntDesign name="exclamationcircleo" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Faq') }}
                    style={styles.head}>
                    <Text style={styles.label}> سوالات متداول </Text>
                    <AntDesign name="questioncircleo" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
           
                <TouchableOpacity onPress={() => { props.navigation.navigate('ContactUs') }}
                    style={styles.head}>
                    <Text style={styles.label}>تماس با ما</Text>
                    <Feather name="phone-call" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Agent') }}
                    style={styles.head}>
                    <Text style={styles.label}> مشاوران </Text>
                    <Feather name="phone-call" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Agency') }}
                    style={styles.head}>
                    <Text style={styles.label}> آژانس </Text>
                    <Feather name="phone-call" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { props.navigation.navigate('ImageScreen') }}
                    style={styles.head}>
                    <Text style={styles.label}> آژانس </Text>
                    <Feather name="phone-call" color='gray' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
              */}
            </View>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();





function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerType: 'front',
                drawerStyle: { width: 300 },
            }}>
            <Drawer.Screen name="Home" component={BottomTabs} options={{ headerShown: false }} />
            {/* <Drawer.Screen name="Search" component={Search} options={{ headerShown: false }} /> */}
        </Drawer.Navigator>
    );
}

export default MyDrawer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 15,

    },

    head: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    logo: {
        width: 38,
        height: 38,
        marginLeft: 5,

    },
    title: {
        fontSize: 18,
        color: "#111",
        fontFamily: "Ghonche",


    },
    label: {
        fontSize: 13,
        textAlign: 'right',
        fontFamily: 'Iranyekan',
        color: "#000",
    },
});
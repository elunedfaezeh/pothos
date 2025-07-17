import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Home from "./Home"
import Feather from "react-native-vector-icons/Feather"
import Tobtabs from "../Layouts/MyTabs"
import { useNavigation } from "@react-navigation/native"
const Useraccount = (props: any) => {
    const navigation = useNavigation();

    return (

        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.title}> پتوس </Text>
                    {/* <Image style={styles.logo} source={require('../../assets/logo.png')} /> */}
                    <AntDesign name='right' size={20} color="#060709" onPress={navigation.goBack} />
                </View>

                <View style={styles.logoContainer}>
                    <AntDesign style={{ padding: 20, }} name='left' size={20} color="#060709" />
                    <Text style={{ flex: 1, fontSize: 16, }}>09022836815</Text>

                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'IRANYekan',
                        color: "#111",

                    }}> خروج از حساب کاربری</Text>
                    <Feather style={{ paddingRight: 5 }} name='log-out' size={20} color="#060709" onPress={() => props.navigation.goBack()} />

                </View>

                <View style={{ borderTopWidth: .2, borderColor: '#ccc', }}></View>

                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Home') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />

                    <Text style={styles.label}>صفحه اصلی</Text>

                    <AntDesign name="home" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Search') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />

                    <Text style={styles.label}> درباره پتوس</Text>
                    <FontAwesome name="question-circle-o" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('MyTabs') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />

                    <Text style={styles.label}>املاک نشان شده </Text>
                    <FontAwesome name="bookmark-o" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Search') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />
                    <Text style={styles.label}>پتوس برای کسب و کار</Text>
                    <AntDesign name="notification" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Search') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />
                    <Text style={styles.label}>  قوانین</Text>
                    <AntDesign name="warning" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { props.navigation.navigate('Search') }}
                    style={styles.head}>
                    <AntDesign style={{ flex: 1, }} name='left' size={20} color="#060709" />
                    <Text style={styles.label}>  پشتیبانی</Text>
                    <Feather name="headphones" color='#222' size={22} style={{ marginLeft: 15, textAlign: "right", }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 40, }}>
                <FontAwesome name="send-o" color='gray' size={25} style={{ marginLeft: 15, }} />
                <AntDesign name="instagram" color='gray' size={25} style={{ marginLeft: 15, }} />

                <Feather name="phone" color='gray' size={25} style={{ marginLeft: 15, }} />
                <FontAwesome name="whatsapp" color='gray' size={25} style={{ marginLeft: 15, }} />


            </View>
        </SafeAreaView>
    )
}

export default Useraccount;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 15,

    },

    head: {
        borderBottomWidth: .2,
        borderColor: '#ccc',
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'flex-end',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginBottom: 20
    },
    logo: {
        width: 38,
        height: 38,
        marginLeft: 5,

    },
    title: {
        fontFamily: 'Ghonche', fontSize: 22, color: "#347928",

    },
    label: {
        fontSize: 13,
        textAlign: 'right',
        fontFamily: 'Iranyekan',
        color: "#000",
    },
});
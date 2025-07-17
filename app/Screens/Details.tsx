import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Image, Animated, TouchableOpacity, Text, ImageBackground, ScrollView, } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Detalsscreen = (props: any) => {
    const navigation = useNavigation();
    const data = props.route.params.item;


    return (
        <SafeAreaView style={{ direction: "rtl", flex: 1, backgroundColor: "#fff", }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.backgroundcontainer}>
                    <ImageBackground source={data.img} style={styles.background}>
                        <View style={styles.header}>
                            <View style={styles.headerBtn}>
                                <Feather name='bookmark' color="#000" size={22} onPress={navigation.goBack} />
                            </View>
                            <View style={styles.headerBtn}>
                                <AntDesign name='left' color="#000" size={22} onPress={navigation.goBack} />
                            </View>
                        </View>
                    </ImageBackground>

                </View >
                <View style={styles.dataContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={{ fontWeight: "bold", fontFamily: "IRANYekan", color: "#000" }}>
                            {data.title}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={styles.rating}>
                                <AntDesign name='star' color="#fff" size={18} onPress={navigation.goBack} />
                                <Text style={{ fontSize: 16, color: "#fff", paddingLeft: 5, paddingRight: 5 }}>4.5</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        paddingVertical: 10,
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}>
                        <Text style={{ fontSize: 12, fontFamily: "IRANYekan", }}> 6 </Text>
                        <Ionicons name='bed-outline' size={25} color="gray" onPress={() => props.navigation.navigate('Showall')}
                        />

                        <Text style={{ fontSize: 12, fontFamily: "IRANYekan", paddingLeft: 15 }}> 1 </Text>
                        <MaterialCommunityIcons name='shower' size={22} color="gray" onPress={() => props.navigation.navigate('Showall')}
                        />
                        <Text style={{ fontSize: 12, fontFamily: "IRANYekan", paddingLeft: 15 }}> 2 </Text>
                        <Ionicons name='car-outline' size={25} color="gray" onPress={() => props.navigation.navigate('Showall')}
                        />
                        <Text style={{ fontSize: 12, fontFamily: "IRANYekan", paddingLeft: 15 }}> 120m </Text>
                        <Ionicons name='scan-outline' size={23} color="grey" onPress={() => props.navigation.navigate('Showall')}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}>
                        <Text style={{ fontSize: 16, fontFamily: "IRANSansWeb(FaNum)", color: "#000" }} > قیمت:   {data.price} </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, marginHorizontal: 10 }}>
                        <View style={{ paddingRight: 30, borderColor: "#B5C18E", borderRightWidth: 1, elevation: 4, paddingTop: 5, paddingHorizontal: 8, }}>
                            <Text style={{ fontFamily: "IRANYekan", }}>متراژ</Text>
                            <Text style={{ fontFamily: "IRANYekan", }}>۱۳۰</Text>
                        </View>
                        <View style={{ elevation: 4, paddingTop: 5, paddingHorizontal: 8, }}>
                            <Text style={{ fontFamily: "IRANYekan", }} >ساخت</Text>
                            <Text style={{ fontFamily: "IRANYekan", }}>۱۳۷۷</Text>
                        </View>
                        <View style={{ paddingLeft: 30, borderLeftWidth: 1, borderColor: "#B5C18E", backgroundColor: '#fff', elevation: 4, paddingTop: 5, paddingHorizontal: 8, }}>
                            <Text style={{ fontFamily: "IRANYekan", }}>اتاق</Text>
                            <Text style={{ fontFamily: "IRANYekan", }}>۶</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderTopWidth: 1,
                        borderColor: "#B5C18E",
                        marginVertical: 40,
                    }}>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} > ودیعه</Text>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} > ۳۰۰,۰۰۰,۰۰۰</Text>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderTopWidth: 1,
                        borderColor: "#B5C18E",
                    }}>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} >  اجاره ماهانه</Text>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} > ۳۰,۰۰۰,۰۰۰</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        borderTopWidth: 1,
                        borderColor: "#B5C18E",
                        marginVertical: 40,
                        justifyContent: "space-between",

                    }}>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} > ودیعه و اجاره</Text>
                        <Text style={{ fontSize: 14, fontFamily: "IRANYekan", color: "#000" }} > غیر قابل تبدیل</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10, marginBottom: 80, }}>
                    <View style={{ paddingRight: 30, elevation: 4, paddingTop: 5, paddingHorizontal: 8, }}>
                        <Text style={{ textAlign: "left", fontFamily: "IRANYekan", fontSize: 20, fontWeight: "bold", }}>توضیحات</Text>
                        <Text style={{ textAlign: "left", fontFamily: "IRANYekan", fontSize: 14, }}>آپارتمان نقلی  انباری و پاسیو دارد همکف دسترسی عالی،لوکیشن تاپ منطقه  مناسب سکونت و سرمایه گذاری</Text>
                    </View>
                </View>



            </ScrollView>
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 5,
                paddingVertical: 25,
                backgroundColor: '#e7f2ef',
                flexDirection: 'row',
                justifyContent: "center",
                alignItems: 'center',
            }}>


                <TouchableOpacity style={{
                    justifyContent: "space-between",
                    width: "96%",
                    backgroundColor: "#fff",
                    borderRadius: 90,
                    alignItems: "center",
                    flexDirection: "row",

                }}>

                    <Image style={{

                        resizeMode: "cover",
                        width: 85,
                        height: 85,
                        borderRadius: 90,
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "white"
                    }} source={require("../../assets/pro3.jpg")} />
                    <Text>jfgcufcg</Text>
                    <View style={{ borderColor: "#fff", padding: 30, backgroundColor: "#00b064", borderRadius: 70, borderWidth: 1, }}>
                        <Feather name='phone-call' color="#fff" size={18} onPress={navigation.goBack} />

                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

};
export default Detalsscreen;

const styles = StyleSheet.create({
    backgroundcontainer: {
        elevation: 20,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
        height: 350,
    },
    background: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
    },
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    headerBtn: {
        height: 35,
        width: 35,
        backgroundColor: "#fff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",

    },

    dataContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40,

    },
    rating: {
        padding: 8,
        backgroundColor: "#00b064",
        borderRadius: 5,
        justifyContent: "center",
        flexDirection: "row",

    },

});   
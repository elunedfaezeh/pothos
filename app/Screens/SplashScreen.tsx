import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable, Animated, } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";

const { width, height } = Dimensions.get("window");

const SplashScreen = (props: any) => {

    const navigation = useNavigation();
    // const [isShowSplash, setSplash] = useState(true);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start();
    };

    useEffect(() => {
        fadeIn();
        setTimeout(() => { props.navigation.navigate('MyDrawer') }, 3000);
    });

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setSplash(false);
    //         props.navigation.navigate('Home'); 
    //     }, 3000); 
    //     return () => clearTimeout(timer);
    // }, [navigation]);

    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Animated.Image style={[styles.logo, { opacity: fadeAnim }]} source={require('../../assets/logo.png')} />

            <Animated.Text style={[styles.splashtext, { opacity: fadeAnim }]}>
                پتوس
            </Animated.Text>
        </View>
    );
};


export default SplashScreen;

const styles = StyleSheet.create({
    splashtext: {
        color: "#00b064",
        fontSize: 30,
        marginBottom: 10,
        alignItems: "center",
        fontFamily: "Ghonche",
    },
    logo:{
        width:100,
        height:100,
        resizeMode:"cover"

    }

})

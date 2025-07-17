import { Modal, Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable, Switch, SafeAreaView, } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Favs from "./Favs";





const Search = (props: any) => {

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };


    const state = {
        data: [
            { id: 0, img: require('../../assets/p3.jpg'), title: " خرید   ", },
            { id: 1, img: require('../../assets/p2.jpg'), title: " اجاره ", },


        ]
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const navigation = useNavigation();



    return (

        <View style={styles.container}>
            <View style={styles.inner}>
                <View style={styles.search}>
                </View>
            </View>
            
            {/* <GestureHandlerRootView style={styles.modalContainer}>
                <TouchableOpacity onPress={onOpen}>
                    <Text>Open the modal</Text>
                </TouchableOpacity>

                <Modalize ref={modalizeRef}>
                    <Favs/>
                 </Modalize>
            </GestureHandlerRootView> */}

    </View >
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#347928",
        paddingBottom: 30,
        top: -70,
        height: "16%", borderBottomRightRadius: 29, borderBottomLeftRadius: 29, paddingHorizontal: 50,
    },
    inner: {
        flexDirection: "row",

    },
    search: {
        position: "absolute",
        top: 110,
        left: 10,
        zIndex: 1,

    },
    fild: {
        top: 100,
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 26,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        textShadowRadius: 7,
        color: "#3F2305",
        fontSize: 16,
        textAlign: "right",
        fontFamily: "IRANYekan",

    },
    menu: {
        top: 70,
        textAlign: "right",
        fontSize: 23,
        color: "#fff",
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center', // Center content if needed
        alignItems: 'center', // Center content if needed
        width: '100%',
        zIndex: 10, // Set a higher zIndex

    }

});

export default Search;

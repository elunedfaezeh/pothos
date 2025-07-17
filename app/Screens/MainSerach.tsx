import { useRef } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import AntDesign from "react-native-vector-icons/AntDesign";
import Login from "./Login";
import Switch from "./Switch";
import { useNavigation } from "@react-navigation/native";
const MainSerach = (props:any) => {
    const navigation = useNavigation();

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    return (

        <ScrollView style={{marginTop:10, flex: 1, }}>
               <View style={styles.headerBtn}>
                <AntDesign name='left' color="#000" size={24} onPress={navigation.goBack} />
            </View>
        <Switch/>

        </ScrollView >
    )
}
export default MainSerach;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 10,
        height: "100%",
        borderRadius: 50,
        borderTopRightRadius: 70,

    },
    headerBtn: {
        paddingVertical: 35,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',

    },

})
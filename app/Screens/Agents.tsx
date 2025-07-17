import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Agents = (props: any) => {
    const navigation = useNavigation();

    const data = [
        { id: 0, img: require('../../assets/pro3.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
        { id: 1, img: require('../../assets/profile.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
        { id: 2, img: require('../../assets/pro3.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", }}>
            <View style={styles.inner}>
                <View style={styles.search}>
                    <AntDesign name='search1' size={28} color="#000" />
                </View>
                <TextInput style={styles.fild}
                    placeholder="جستجوی مشاورین" />

            </View>
            <SafeAreaView style={styles.container}>

                <FlatList style={{ marginTop: 10, }} data={data} renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Agent', { item: item })} key={item.id} style={{
                        paddingHorizontal: 15, flex: 1, flexDirection: "row", backgroundColor: "#F6F5F2", marginVertical: 5, marginHorizontal: 15, borderRadius: 15, alignItems: "center", justifyContent: "center", shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                    }}>
                        <Image source={item.img} style={{ borderRadius: 90, maxWidth: "20%", height: 80, }} />
                        <View style={{
                            alignItems: "flex-start",
                            justifyContent: "center", padding: 10, flex: 3, paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                marginTop: 15,
                                textAlign: "right", fontFamily: "IRANYekan",
                                fontWeight: "bold",

                            }}>{item.title}</Text>
                            <Text style={{ textAlign: "right", marginTop: 5, fontFamily: "IRANYekan", }}>{item.price} تومان </Text>
                            <View style={{
                                flexDirection: "row",
                                paddingVertical: 10,

                            }}>

                            </View>
                        </View>

                    </TouchableOpacity>
                } />
            </SafeAreaView>

        </View>
    )
}

export default Agents;

const styles = StyleSheet.create({
    container: {
        direction: 'rtl',
        flex: 1,
    },
    inner: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        width: "85%",

    },

    filter: {
        top: 10,
        left: 10,
    },
    search: {
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 1,

    },
    fild: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        textShadowRadius: 7,
        color: "#3F2305",
        fontSize: 16,
        paddingLeft: 8,
        textAlign: "right",
        fontFamily: "IRANYekan",

    },

})
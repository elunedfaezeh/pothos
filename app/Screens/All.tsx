import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const All = (props: any) => {
    const navigation = useNavigation();

    const data = [
        { id: 0, img: require('../../assets/p2.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
        { id: 1, img: require('../../assets/p3.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
        { id: 2, img: require('../../assets/photo.jpg'), title: "برج باغ مجلل رونیکا", price: "۱۲۰،۰۰۰،۰۰۰" },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBtn}>
                <AntDesign name='left' color="#000" size={24} onPress={navigation.goBack} />
            </View>
            <FlatList style={{ marginTop: 10,  }} data={data} renderItem={({ item }) =>
                <TouchableOpacity onPress={() => props.navigation.navigate('Detalsscreen', { item: item })} key={item.id} style={{ padding: 5, flex: 1, flexDirection: "row", backgroundColor: "#fff", marginVertical: 3, borderRadius: 15, }}>
                    <Image source={item.img} style={{ borderRadius: 10, maxWidth: "49%", height: 130, }} />
                    <View style={{ alignItems:"flex-end",
                            justifyContent: "center", padding: 10, flex: 3, paddingHorizontal: 10, }}>
                        <Text style={{
                            marginTop: 15,
                            textAlign: "left", fontFamily: "IRANYekan",
                            fontWeight: "bold",
                            
                        }}>{item.title}</Text>
                        <Text style={{ textAlign: "left", marginTop: 5, fontFamily: "IRANYekan", }}>{item.price} تومان </Text>
                        <View style={{
                            flexDirection: "row",
                            paddingVertical: 10,
                         
                        }}>
                            <Text style={{ fontSize: 12, fontFamily: "IRANYekan", }}> 6 </Text>
                            <Ionicons name='bed-outline' size={23} color="gray" onPress={() => props.navigation.navigate('Showall')}
                            />

                            <Text style={{ fontSize: 12, fontFamily: "IRANYekan", }}> 1 </Text>
                            <MaterialCommunityIcons name='shower' size={22} color="gray" onPress={() => props.navigation.navigate('Showall')}
                            />
                            <Text style={{ fontSize: 12, fontFamily: "IRANYekan", }}> 2 </Text>
                            <Ionicons name='car-outline' size={22} color="gray" onPress={() => props.navigation.navigate('Showall')}
                            />
                            <Text style={{ fontSize: 12, fontFamily: "IRANYekan", }}> 120m </Text>
                            <Ionicons name='scan-outline' size={23} color="gray" onPress={() => props.navigation.navigate('Showall')}
                            />
                        </View>
                    </View>

                </TouchableOpacity>
            } />
        </SafeAreaView>
    )
}

export default All;
const styles = StyleSheet.create({
    container: {
        // direction: 'rtl',
        flex: 1,
    },
    headerBtn: {
  
        flexDirection: 'row',
        alignItems: 'flex-end',


    },
}

)
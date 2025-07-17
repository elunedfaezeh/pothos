import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');

const Agency = (props:any) => {
    const state = {
        data: [
            { id: 1, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
            { id: 2, img: require('../../assets/photo.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
            { id: 3, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        ]

    }
    const navigation = useNavigation();
    return (
        <View style={{  flex: 1,
            backgroundColor: "#fff",
            position: 'relative',}}>
            <ScrollView >
                <Image
                    style={{ height: 280, width: "100%", resizeMode: "stretch", zIndex: -1 }}
                    source={require("../../assets/p2.jpg")} />
                <View style={{
                    top: -50,
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 99,
                    bottom: 0,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        style={{ height: 125,
                            width: screenWidth * 0.3, 
                            resizeMode: 'cover',
                            borderRadius: 60, 
                            borderWidth: 4,
                            borderColor: '#fff',
                            marginTop: -60,}}
                        source={require("../../assets/logo3.jpeg")} />


                </View>
                <View style={{ marginTop: -60, flexDirection: 'row', direction: "rtl", padding: 13, justifyContent: "space-between", }}>
                    <View>
                        <Text style={{
                            textAlign: "left",
                            fontSize: 16, fontWeight: "bold", fontFamily: "IRANYekan",
                        }}> سید رهام عباسی</Text>
                        <Text style={{
                            textAlign: "left",
                            color: "gray",
                            fontSize: 14, fontFamily: "IRANYekan",
                        }}>دسته بندی
                        </Text>
                        <Text style={{
                            textAlign: "left",
                            color: "gray",
                            fontSize: 14, fontFamily: "IRANYekan",
                        }}>تعداد فروش در ماه گذشته
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <AntDesign name='star' color="#00b064" size={18} onPress={navigation.goBack} />
                        <Text style={{ fontSize: 16, color: "#000", paddingLeft: 5, paddingRight: 5 }}>4.5</Text>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 10, direction: "rtl" }}>

                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ textAlign: "left", fontFamily: "IRANYekan", fontWeight: "bold", }}> آژانس یگانه</Text>

                        <TouchableOpacity style={{ flex: 1, }}>

                            <Feather name='phone-call' color="#00b064" size={28} onPress={navigation.goBack} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20, }}>
                    <View style={{ elevation: 4, paddingTop: 5, paddingHorizontal: 7, }}>
                        <Text style={{ textAlign: "right", fontFamily: "IRANYekan", fontSize: 16, fontWeight: "bold", }}>توضیحات در مورد مشاور</Text>
                        <Text style={{ textAlign: "right", fontFamily: "IRANYekan", fontSize: 13, color: "gray" }}>آپارتمان نقلی  انباری و پاسیو دارد همکف دسترسی عالی،لوکیشن تاپ منطقه  مناسب سکونت و سرمایه گذاری</Text>
                    </View>

                </View>
                <View style={{ elevation: 4, paddingHorizontal: 15, }}>
                    <Text style={{ textAlign: "right", fontFamily: "IRANYekan", fontSize: 16, fontWeight: "bold", }}>سابقه فروش</Text>
                </View>
                <ScrollView style={{ direction: "rtl", }} horizontal showsHorizontalScrollIndicator={false}>

                    {
                        state.data.map((item, index) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen', { item: item })} key={item.id} style={{
                                backgroundColor: "#e7f2ef",
                                shadowColor: "#e7f2ef",
                                shadowOpacity: 0.5,
                                shadowRadius: 7,
                                borderRadius: 14,
                                marginHorizontal: 20,
                                marginVertical: 10,
                                alignItems: "center",
                                shadowOffset: { width: 4, height: 4 },

                            }}>
                                <Image source={item.img} style={{
                                    width: 260, height: 140, resizeMode: "center", borderRadius: 8,
                                }} />

                                <View style={{
                                    flexDirection: "row",

                                    justifyContent: "space-between",
                                    paddingVertical: 10,
                                    marginHorizontal: 20,
                                }}>

                                    <Text style={{ fontSize: 14, fontFamily: "IRANYekan", }}> {item.title} </Text>
                                    <Text style={{ fontSize: 14, fontFamily: "IRANSansWeb(FaNum)", paddingLeft: 5 }}> {item.price} </Text>
                                </View>




                                <View style={{
                                    marginBottom:30,
                                    flexDirection: "row",
                                    paddingVertical: 10,
                                    alignItems: "center",
                                    marginHorizontal: 20,
                                    justifyContent: "space-between",
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
                                    <Ionicons name='scan-outline' size={23} color="gray" onPress={() => props.navigation.navigate('Showall')}
                                    />
                                </View>

                              


                           
                            </TouchableOpacity>
                        ))
                    }



                </ScrollView>
            </ScrollView>
            
        </View>
    )
}

export default Agency;

const styles = StyleSheet.create({

})
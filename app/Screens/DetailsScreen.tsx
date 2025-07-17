import React from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
const DetailsScreen = (props: any) => {
    const navigation = useNavigation();
    const data = props.route.params.item;

    const list = [

        { id: 1, img: require('../../assets/bed.jpeg'), title: " تعداد اتاق خواب ", price: 27000000 },
        { id: 2, img: require('../../assets/ggr.jpg'), title: "  تعداد پارکینگ ", price: 27000000 },
        { id: 3, img: require('../../assets/p2.jpg'), title: " اطلاعات  به خانه  ", price: 27000000 },

    ]

    return (
        <View style={{ backgroundColor: "white" }}>
            <ScrollView >
                <Image
                    style={{ height: 300, width: "100%", resizeMode: "stretch", zIndex: -1 }}
                    source={data.img} />
                <View style={{
                    top: -50,
                    width: "100%",
                    backgroundColor: "white",
                    zIndex: 99,
                    bottom: 0,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={{ flexDirection: 'row', direction: "rtl", padding: 20, justifyContent: "space-between", }}>
                        <View>
                            <Text style={{
                                fontSize: 16, fontWeight: "bold", fontFamily: "IRANYekan",
                            }}>{data.title}</Text>
                            <Text style={{
                                marginRight: 20,
                                color: "gray",
                                fontSize: 14, fontFamily: "IRANYekan",
                            }}>{data.title}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <AntDesign name='star' color="#00b064" size={18} onPress={navigation.goBack} />
                            <Text style={{ fontSize: 16, color: "#000", paddingLeft: 5, paddingRight: 5 }}>4.5</Text>
                        </View>

                    </View>

                    <View style={{ paddingHorizontal: 20, direction: "rtl" }}>
                        <Text style={{ textAlign: "left", fontFamily: "IRANYekan", fontWeight: "bold", }}> آژانس یگانه</Text>
                        <View style={{ flexDirection: "row", paddingVertical: 10, alignItems: "center" }}>
                            <Image
                                style={{
                                    resizeMode: "cover",
                                    width: 70,
                                    height: 70,
                                    borderRadius: 70 / 2,
                                    borderWidth: 1,
                                    borderColor: "white"
                                }}
                                source={require("../../assets/pro3.jpg")}
                            />
                            <View >
                                <Text style={{ textAlign: "left", fontSize: 14, fontFamily: "IRANYekan", fontWeight: "bold", }} > اسم مشاور املاک</Text>
                                <Text style={{ fontFamily: "IRANYekan", fontSize: 12, color: "gray" }}>تعداد فروش در ماه </Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 'auto' }}>
                                <TouchableOpacity>
                                    <Feather name='phone-call' color="#00b064" size={28} onPress={navigation.goBack} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <Text style={{ textAlign: "right", paddingRight: 20, fontSize: 14, fontFamily: "IRANYekan", fontWeight: "bold", }}> ویژگی های خانه</Text>

                        {/* <ScrollView >
                            <Image style={{
                                height:80,
                                width:90,
                                resizeMode:"stretch",
                                borderTopRightRadius:20,
                                borderTopLeftRadius:20,
                            }} source={require("../../assets/p3.jpg")} />
                        </ScrollView> */}
                    </View>
                    <View
                        style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 30, justifyContent: "space-between", alignItems: "center", }}

                    >



                        {list.map((item, index) => (
                            <TouchableOpacity style={{
                                shadowColor: "green",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.2, backgroundColor: "#e7f2ef", borderRadius: 20, justifyContent: "center", alignItems: "center",
                            }} key={index} >
                                <Image style={{
                                    height: 90,
                                    width: 120,
                                    resizeMode: "stretch",
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                }} source={item.img}

                                />
                                <Text style={{ padding: 10, fontSize: 13, fontFamily: "IRANYekan", }}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                        {/* {list.map((item, index) => (
                                <Image style={{
                                    height: 80,
                                    width: 90,
                                    resizeMode: "stretch",
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                }} source={item.img} 
                                
                                />
                                <Text>hhh</Text>
                            ))} */}
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 80, }}>
                        <View style={{ elevation: 4, paddingTop: 5, paddingHorizontal: 8, }}>
                            <Text style={{ textAlign: "right", fontFamily: "IRANYekan", fontSize: 20, fontWeight: "bold", }}>توضیحات</Text>
                            <Text style={{ textAlign: "right", fontFamily: "IRANYekan", fontSize: 14, }}>آپارتمان نقلی  انباری و پاسیو دارد همکف دسترسی عالی،لوکیشن تاپ منطقه  مناسب سکونت و سرمایه گذاری</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default DetailsScreen;
const styles = StyleSheet.create({

});
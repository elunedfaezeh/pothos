import React from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');
const About = (props: any) => {
    const data = [
        { id: 0, img: require('../../assets/prof1.jpg'), title: "مصیب ملکی", description: "مشاور املاک یک عامل است ، که به افراد در خرید و فروش املاک و مستغلات کمک می کند. وظایف آنها شامل بررسی لیست املاک ، بحث در مورد شرایط فروش و تهیه پیش نویس قرارداد است،  و بررسی مدارک احراز هویت طرفین وملک می باشد." },
        { id: 1, img: require('../../assets/prof2.jpg'), title: "الهام گودرزی", description: "مشاور املاک یک عامل است ، که به افراد در خرید و فروش املاک و مستغلات کمک می کند. وظایف آنها شامل بررسی لیست املاک ، بحث در مورد شرایط فروش و تهیه پیش نویس قرارداد است،  و بررسی مدارک احراز هویت طرفین وملک می باشد." },
        { id: 2, img: require('../../assets/prof3.jpg'), title: "حجازی", description: "مشاور املاک یک عامل است ، که به افراد در خرید و فروش املاک و مستغلات کمک می کند. وظایف آنها شامل بررسی لیست املاک ، بحث در مورد شرایط فروش و تهیه پیش نویس قرارداد است،  و بررسی مدارک احراز هویت طرفین وملک می باشد." },
    ]

    return (

        <View style={{
            flex: 1,
            backgroundColor: "#CAE0BC",
            justifyContent: 'center'
        }}>
            <ScrollView >
                <View style={{  paddingHorizontal: 90, }}>
                    <Image
                        style={{ width: 250, height: 250, resizeMode: "cover", marginBottom: 20, }}
                        source={require("../../assets/about.png")}
                    />
                </View>
                <View style={{
                    marginHorizontal: 15,
                    marginTop: -35,
                    paddingVertical:20,
                    backgroundColor: "#EAFAEA",
                    borderRadius: 30,
                    alignItems: 'center',
                }}>
                    <View style={{
                        justifyContent: "center", alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fontFamily: "IRANYekan",
                            
                        }}>آشنایی با پتوس</Text>


                        <View style={{
                            marginHorizontal: 10,
                            padding: 10,
                        }}>


                            <Text style={{
                                textAlign: "center",
                                color: "black",
                                fontSize: width * 0.03,
                                marginTop: 13,
                                fontFamily: 'IRANYekan',

                            }}> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                                و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد  </Text>

                        </View>
                    </View>
                  
                        {data.map((item, index) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('Agent', { item: item })} key={item.id} style={{
                                flexDirection: "row", backgroundColor: "#F6F5F2", marginVertical: 5,marginHorizontal:20, borderRadius: 15, shadowColor: "#000",
                                shadowOffset: { width: 0, height: 3},flex:1,borderTopRightRadius:100,borderBottomRightRadius:100,
                                shadowOpacity: 0.2,
                            }}>
                                <View style={{ alignItems: "flex-end", justifyContent: "center", paddingHorizontal: 10, flex:2,}}>
                                    <Text style={{ marginTop: 15, fontFamily: "IRANYekan", fontWeight: "bold", }}>{item.title}</Text>
                                    <Text style={{
                                        marginTop: 5, fontSize: width * 0.02,
                                        fontFamily: "IRANYekan", textAlign: "right"
                                    }}>{item.description}
                                    </Text>
                                </View>
                                <Image source={item.img} style={{ flex:1,borderRadius: 90,width:'88%',height:'88%', resizeMode: "cover", justifyContent:'center',alignSelf:'center'}} />
                            </TouchableOpacity>
                        ))}
                </View>
            </ScrollView>
        </View>

    )
}

export default About;
const style = StyleSheet.create({

});
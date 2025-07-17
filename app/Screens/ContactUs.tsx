import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get('window');
const { width: screenWidth } = Dimensions.get('window');
const ContactUs = () => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: "#fff",
        }}>
            <ScrollView >
             
                <View style={{
                    marginVertical:40,
                    marginHorizontal: 25,
                    // top: -60,
                    paddingVertical: 20,
                    paddingHorizontal: 60,
                    backgroundColor: "#e7f2ef",
                    borderRadius: 30,

                }}>
                    <View style={{
                        justifyContent: "center", alignItems: "center",
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            fontFamily: "IRANYekan",
                        }}>بیاید باهم صحبت کنیم</Text>
                    </View>
                    <View  >
                        <Text style={{ marginTop: 10, textAlign: "right", fontSize: width * 0.03, fontWeight: "bold", fontFamily: "IRANYekan", }}>نام و نام خانوادگی </Text>

                        <TextInput style={{
                            alignItems: "stretch",
                            margin: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 10,
                            textAlign: "right",
                            borderColor: "#D8D9DA",
                            fontFamily: "IRANYekan",

                        }}
                            placeholder="ما چطوری باید شمارو صدا بزنیم؟" />
                    </View>
                    <View  >
                        <Text style={{ marginTop: 10, textAlign: "right", fontSize: width * 0.03, fontWeight: "bold", fontFamily: "IRANYekan", }}>شماره تماس </Text>

                        <TextInput style={{
                            alignItems: "stretch",
                            margin: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 10,
                            textAlign: "right",
                            borderColor: "#D8D9DA",
                            fontFamily: "IRANYekan",

                        }}
                            placeholder="شماره خودتون رو وارد کنید " />
                    </View>
                    <View  >
                        <Text style={{ marginTop: 10, textAlign: "right", fontSize: width * 0.03, fontWeight: "bold", fontFamily: "IRANYekan", }}> ایمیل  </Text>

                        <TextInput style={{
                            alignItems: "stretch",
                            margin: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 10,
                            textAlign: "right",
                            borderColor: "#D8D9DA",
                            fontFamily: "IRANYekan",

                        }}
                            placeholder="ایمیل پستی را وارد کنید" />
                    </View>
                    <View  >
                        <Text style={{ marginTop: 10, textAlign: "right", fontSize: width * 0.03, fontWeight: "bold", fontFamily: "IRANYekan", }}>  موضوع</Text>

                        <TextInput style={{
                            alignItems: "stretch",
                            margin: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 10,
                            textAlign: "right",
                            borderColor: "#D8D9DA",
                            fontFamily: "IRANYekan",

                        }}
                            placeholder="موضوع مد نظر خودتون رو بنویسید " />
                    </View>
                    <View  >
                        <Text style={{ marginTop: 10, textAlign: "right", fontSize: width * 0.03, fontWeight: "bold", fontFamily: "IRANYekan", }}>پیغام</Text>

                        <TextInput style={{
                            alignItems: "stretch",
                            margin: 5,
                            borderWidth: 1,
                            borderRadius: 5,
                            padding: 10,
                            textAlign: "right",
                            borderColor: "#D8D9DA",
                            fontFamily: "IRANYekan",

                        }}
                            placeholder="پیغام را وارد کنید" />
                    </View>
                    <TouchableOpacity style={{
                        alignSelf: 'stretch',
                        paddingVertical: 10,
                        justifyContent: "center", alignItems: "center",
                        backgroundColor: "#00b064", marginTop: 20,
                        borderWidth: 1, borderColor: "#88AB8E",
                        borderRadius: 10, shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                    }}>

                        <Text style={{
                            paddingRight: 5,
                            color: "#fff",
                            fontSize: 15,
                            fontFamily: "IRANYekan",
                        }}> ارسال </Text>


                    </TouchableOpacity>

                </View>

                <View style={{
                    marginTop:-20,
                    marginVertical:10,
                    paddingVertical: 40,
                    marginHorizontal: 20,
                    borderWidth: .5,
                    borderColor: "#00b064",
                    backgroundColor: "#fff", padding: 6,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    borderRadius: 20,
                }}>
                    <Text style={{
                        color:"gray",
                        textAlign: "center", marginTop: -30, marginVertical: 20, paddingVertical: 10, fontFamily: 'IRANYekan',
                    }}>
                        آدرس شعبه های پتوس - دفتر اصلی
                    </Text>

                    <View style={{ paddingHorizontal: 5, flexDirection: "row", justifyContent: "space-between" }}>

                        <TouchableOpacity style={{
                            width: "45%", paddingVertical: 8, backgroundColor: "#00b064", borderRadius: 8, borderWidth: 1, borderColor: "#86CF93",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                        }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <FontAwesome name='location-arrow' size={16} color="#fff" onPress={() => props.navigation.navigate('Showall')}
                                />
                                <Text style={{ color: "#fff", textAlign: "center", paddingHorizontal: 5, fontFamily: "IRANYekan", }}>اطلاعات</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: "45%", paddingVertical: 8, backgroundColor: "#fff", borderRadius: 8, borderWidth: 1, borderColor: "#86CF93",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                        }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <Feather name='phone-call' size={16} color="#00b064" 
                                />
                                <Text style={{ textAlign: "center", paddingHorizontal: 5, fontFamily: "IRANYekan", }}>تماس</Text>

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{
                    marginBottom:40,
                    marginHorizontal: 20,
                    marginTop: 5,
                    backgroundColor: "#e7f2ef", paddingTop: 15,
                    paddingHorizontal: 10,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            textAlign: "left",
                            color: "#347928",
                            fontSize: width * 0.03,
                            marginTop: 5,
                            fontFamily: 'IRANYekan',
                            fontWeight: "bold",
                        }}>به کمک بیشتری نیاز دارید؟</Text>
                        <Text style={{
                            textAlign: "center",
                            color: "gray", fontFamily: 'IRANYekan',
                            fontWeight: "bold", fontSize:12,
                        }}>تماس با مشاوران ما</Text>
                        <TouchableOpacity style={{
                            paddingHorizontal: 10,
                      
                            justifyContent: "center", alignItems: "center",
                            backgroundColor: "#00b064", marginTop: 10,
                            height: 40, borderWidth: 1, borderColor: "#86CF93",
                            borderRadius: 10, shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                color: "#fff",
                                fontSize: width * 0.03, fontFamily: "IRANYekan",
                            }}>تماس</Text>
                        </TouchableOpacity>
                    </View>

                    <Image style={{
                        width: 190,
                        height: 150,
                        resizeMode: "contain"
                    }}

                        source={require('../../assets/us.png')} />

                </View>
            </ScrollView>
        </View>

    )
}

export default ContactUs;
const style = StyleSheet.create({

});
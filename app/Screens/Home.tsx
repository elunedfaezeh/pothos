
import React, { useRef, useState } from 'react';
import { Pressable, SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, Animated, ImageBackground, FlatList, Alert, Modal, ImageSourcePropType, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
import Search from './Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Favs from './Favs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Switch from './Switch';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = (props: any) => {

    const modalizeRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };


    const imgs = [
        { id: 0, img: 'https://photos.zillowstatic.com/fp/dddb445351b8612d8d9a7e62ddcbf971-cc_ft_1536.jpg' },
        { id: 1, img: 'https://photos.zillowstatic.com/fp/1c8eaed548932063b3067de0663fc0f6-p_e.jpg' },
        { id: 2, img: 'https://photos.zillowstatic.com/fp/43427276bdeda4dc1ac69191cadcd0fe-cc_ft_960.jpg' },
        { id: 4, img: 'https://photos.zillowstatic.com/fp/949dfcacebe4fafa17f2042d0bd50099-cc_ft_960.jpg' },

    ];
    const navigation = useNavigation();

    const data = props.route.params;
    const [showMore, setShowMore] = useState(false);
    // const onPress = (item: any) => setSlider(item);
    const scrollX = useRef(new Animated.Value(0)).current;

    const list = [

        { id: 1, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        { id: 2, img: require('../../assets/photo.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        { id: 3, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        { id: 4, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        { id: 5, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        { id: 6, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },

    ]


    const state = {
        data: [
            { id: 1, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
            { id: 2, img: require('../../assets/photo.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
            { id: 3, img: require('../../assets/p2.jpg'), title: " اطلاعات مربوط به خانه  ", price: 27000000 },
        ]

    }

    const sliders = () => imgs.map((item, index) =>
        <TouchableOpacity activeOpacity={0.9} style={{ width: width - 2.5, height: 250, paddingHorizontal: 20, }} key={index}>
            <ImageBackground source={{ uri: item.img.toString() }} style={styles.slider} />
        </TouchableOpacity>


    )
    const [modalVisible, setModalVisible] = useState(false);


    return (

        <SafeAreaView style={styles.container}>


            <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center", }} showsVerticalScrollIndicator={false} >
                <View style={styles.inner}>
                    <View style={styles.search}>
                        <TouchableOpacity onPress={onOpen}>
                            <AntDesign name='search1' size={28} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <TextInput style={styles.fild}
                        placeholder="جستجوی محصولات" />
                    <View style={styles.filter}>
                        <AntDesign name='bars' size={30} color="#000" onPress={() => props.navigation.openDrawer()} />
                    </View>
                </View>
                <GestureHandlerRootView style={styles.modalContainer}>
                    <Modalize
                        ref={modalizeRef}>
                        <Switch />
                    </Modalize>
                </GestureHandlerRootView>
                
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
                   onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                    scrollEventThrottle={1}>
                    {sliders()}
                </ScrollView>

                <View style={styles.indicatorContainer}>
                    {imgs.map((item, index) => {
                        const w = scrollX.interpolate({
                            inputRange: [
                                width * (index - 1),
                                width * index,
                                width * (index + 1),
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View key={index} style={[styles.dot, { width: w, }]} />
                        );
                    })}
                </View>

                <View style={{
                    flexDirection: "row",
                    paddingVertical: 10,
                    alignItems: "center",
                    marginHorizontal: 20,
                }}>
                    <AntDesign name='left' size={18} color="#060709" onPress={() => props.navigation.navigate('All')}
                    />

                    <Text style={{ fontSize: 12, fontFamily: "IRANYekan", flex: 1, }}>مشاهده همه </Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold", fontFamily: "IRANYekan", }}> جدید ترین املاک</Text>
                </View>

                <ScrollView style={{ direction: "rtl", }} horizontal showsHorizontalScrollIndicator={false}>

                    {
                        state.data.map((item, index) => (
                            <TouchableOpacity onPress={() => props.navigation.navigate('DetailsScreen', { item: item })} key={item.id} style={{
                                backgroundColor: "#fff",
                                shadowColor: "#fff",
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

                                <View style={{
                                    flexDirection: "row",
                                    paddingVertical: 10,
                                    alignItems: "center",
                                    marginHorizontal: 10,
                                }}>




                                </View>

                            </TouchableOpacity>
                        ))
                    }



                </ScrollView>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                    backgroundColor: "#BFD3AD", padding: 6,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    borderRadius: 20,
                    width: "89%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>

                    <Image style={{
                        width: 190,
                        height: 150,
                        resizeMode: "contain"
                    }}

                        source={require('../../assets/home.png')} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            color: "#347928",
                            fontSize: width * 0.03,
                            marginTop: 15,
                            fontFamily: 'IRANYekan',
                            fontWeight: "bold",
                        }}>  دنبال اینی که خونتو بفروشی  </Text>
                        <Text style={{
                            color: "#fff", fontFamily: 'IRANYekan',
                            fontWeight: "bold", marginLeft: 40, fontSize: width * 0.03,
                        }}> یا اجاره بدی؟ </Text>
                        <TouchableOpacity style={{

                            justifyContent: "center", alignItems: "center",
                            backgroundColor: "#CCD5AE", marginTop: 10,
                            width: "80%", height: 40, borderWidth: 1, borderColor: "#88AB8E",
                            borderRadius: 10, shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.2,
                        }}>
                            <Text style={{
                                color: "#000",
                                fontSize: width * 0.02, fontFamily: "IRANYekan",
                            }}>ثبت آگهی</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    direction: "rtl",
                    marginBottom: 70,
                    marginTop: 20,
                    backgroundColor: "#FFf", width: "95%", height: 140, padding: 6,
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    borderRadius: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>

                    <Image style={{
                        width: 170,
                        height: 150,
                        resizeMode: "contain"
                    }}

                        source={require('../../assets/map.png')} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={{
                            textAlign: "left",
                            color: "#347928",
                            fontSize: 14,
                            marginRight: 10,
                            // marginBottom: 10,
                            marginTop: 15,
                            // fontFamily: "Ghonche",
                            fontFamily: 'IRANYekan',
                            fontWeight: "bold",

                        }}>  خونتو روی نقشه پیدا کن.</Text>
                        {/* <Text style={{ color: "#fff", fontFamily: "Ghonche", marginLeft: 40, fontSize: 19 }}> یا اجاره بدی؟ </Text> */}
                        <TouchableOpacity style={{
                            justifyContent: "center", alignItems: "center",
                            backgroundColor: "#CCD5AE", marginTop: 20,
                            width: "90%", height: 40, borderWidth: 1, borderColor: "#88AB8E",
                            borderRadius: 10, shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                        }}>
                            <View style={{ flexDirection: "row", }}>

                                <Text style={{
                                    paddingRight: 5,
                                    color: "#000",
                                    fontSize: width * 0.02, fontFamily: "IRANYekan",
                                }}> همین الان امتحانش کن</Text>
                                <AntDesign name='arrowleft' color="Gray" size={18} />

                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                </ScrollView>

            </ScrollView>

        </SafeAreaView >



    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        justifyContent: "center",
        alignItems: "center",

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




    slider: {
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,


    },
    seedetail: {
        backgroundColor: '#00b064',
        padding: 8,
        marginBottom: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 25,

    },
    bookmark: {
        backgroundColor: "#e7f2ef",
        marginTop: -20,
        padding: 8,
        borderRadius: 5,

    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#000',
        marginHorizontal: 4,
        margin: 10,

    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -35,
        backgroundColor: "gray",
        marginVertical: 15,
        borderRadius: 28,
        marginHorizontal: 150,
        opacity: .80,

    },
    Details: {
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 30,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
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






});


export default Home;


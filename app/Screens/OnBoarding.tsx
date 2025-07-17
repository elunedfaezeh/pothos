import { FlatList, Animated } from "react-native";
import { StyleSheet, View, Text } from "react-native"
import OnBoardingitems from "./OnBoardingitems";
import { useState, useRef, useEffect } from "react";
import Sliders from "./Sliders";
import NextButton from "./NextButton";
import { useNavigation } from "@react-navigation/native";
const OnBoarding = (props:any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollx = useRef(new Animated.Value(0)).current;
    const data = [
        { id: 0, img: require('../../assets/6.png'), title: " به پتوس خوش آمدید ", description: "دسترسی آسان به هزاران ملک" },
        { id: 1, img: require('../../assets/office.png'), title: " اجاره و فروش", description: "دسترسی آسان به هزاران ملک" },
        { id: 2, img: require('../../assets/7.png'), title: "با خیال راحت معاوضه کنید",  description: "دسترسی آسان به هزاران ملک"},
        { id: 3, img: require('../../assets/loc2.png'), title: "   خونتو روی نقشه پیدا کن  ",  description: "دسترسی آسان به هزاران ملک" },

    ]
    const slidesref = useRef(null);
    const viewabItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;


    const navigation = useNavigation();
    // const [isShowSplash, setSplash] = useState(true);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, { toValue: 1, duration: 2000, useNativeDriver: true }).start();
    };

    useEffect(() => {
        fadeIn();
        // setTimeout(() => { props.navigation.navigate('MyDrawer') }, 3000);
    });

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                {/* <Animated.Image style={[styles.logo, { opacity: fadeAnim }]} source={require('../../assets/logo.png')} /> */}

                <Animated.Text style={[styles.splashtext, { opacity: fadeAnim }]}>
                    پتوس
                </Animated.Text>
            </View>           
             <View style={{ flex: 3 }}>

                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <OnBoardingitems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }],
                        {
                            useNativeDriver: false
                        })}
                    onViewableItemsChanged={viewabItemChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesref}
                />
            </View>
            <Sliders data={data} scrollx={scrollx} />
            <NextButton />
        </View>

    )
}
export default OnBoarding;
const styles = StyleSheet.create({
    
    container: {
        backgroundColor: "#e7f2ef",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    splashtext: {
        color: "#00b064",
        fontSize: 26,
        alignItems: "center",
        fontFamily: "Ghonche",
    },
    logo: {
        marginTop:40,
        width: 50,
        height: 50,
        resizeMode: "cover"

    }
})
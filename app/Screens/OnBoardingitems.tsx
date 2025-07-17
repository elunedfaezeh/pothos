import { Image, Text } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet, View, useWindowDimensions } from "react-native";

const OnBoardingitems = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image 
                source={item.img} 
                style={[styles.image, { width: width * 0.8, height: 200, resizeMode: "contain" }]} 
            />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};

export default OnBoardingitems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 0.7,
        justifyContent: "center",
        borderColor: "#88AB8E",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
    },
    title: {
        fontFamily: "IRANSansWeb(FaNum)",
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 10,
        color: "black",
        textAlign: "center",
    },
    description: {
        fontFamily: "IRANSansWeb(FaNum)",
        fontSize: 13,
        color: "gray",
        textAlign: "center",
    }
});

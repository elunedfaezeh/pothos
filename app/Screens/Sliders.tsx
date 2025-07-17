import { StyleSheet, Text, Animated, useWindowDimensions } from "react-native"
import { View } from "react-native"

const Sliders=({data, scrollx})=>{
    const {width}= useWindowDimensions()
    return(

        <View style={{flexDirection:"row", height:64,}}>
            {data.map((_,i)=>{
                const inputRange=[(i - 1) * width, i * width, (i + 1)* width];
                const dotWidth= scrollx.interpolate({
                    inputRange,
                    outputRange:[10,30,10],
                    extrapolate: 'clamp',
                });
                const opacity= scrollx.interpolate({
                    inputRange,
                    outputRange:[0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });
                

                return <Animated.View style={[styles.dot,
                    {width:dotWidth,
                        opacity
                    }]}
                     key={i.toString()}/>;
            })} 
        </View>
    )
}
export default Sliders;
const styles=StyleSheet.create({
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:"#00b064",
        marginHorizontal:9, 
    }
}) 
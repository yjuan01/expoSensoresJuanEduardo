import { Image } from 'expo-image'
import { StyleSheet, Text, View } from "react-native"

export const Item = ({ name, text, image }: { name: string, text: string, image: string }) => {
    return (
        <View style={s.itemList}>
            <Image style={s.imageStyle} source={image} />
            <Text style={s.txt}>{name}</Text>
            <Text style={s.txt2}>{text}</Text>
        </View>
    )
}

const s = StyleSheet.create({
    itemList: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#a198a700',
        margin: 10,
        height: 320,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        padding: 20,
    },
    imageStyle: {
        width: 170,
        height: 170,
        borderRadius: 5,
        shadowColor: "#5e4646",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    txt: {
        color: '#1900ff',
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'rgb(253, 250, 250)', 
        textShadowOffset: { width: -2, height: 2 }, 
        textShadowRadius: 10, 
    },
    txt2: {
        color: '#000000c3',
        fontSize: 15,
        fontWeight: 'bold',
    },
   
  
})
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
        backgroundColor: '#827788d4',
        margin: 10,
        height: 320,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    txt: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)', 
        textShadowOffset: { width: -2, height: 2 }, 
        textShadowRadius: 10, 
    },
    txt2: {
        color: '#000000c3',
        fontSize: 15,
        fontWeight: 'bold',
    },
   
  
})
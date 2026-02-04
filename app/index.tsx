import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Home() {

    const go = () => {
        router.push('/(tabs)');
    }

    return ( 
        <View style={s.container}>
            <View style={s.imageContainer}>
                <Image 
                    source={require('../assets/images/sensores.webp')} 
                    style={s.image}
                    resizeMode="contain"
                />
            </View>

            <View style={s.contentContainer}>
                <Text style={s.title}>Aperte em começar</Text>
                <Text style={s.subtitle}>Sistema de Sensores</Text>
                
                <TouchableOpacity style={s.button} onPress={go}>
                    <Text style={s.buttonText}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
    image: {
        width: '80%',
        height: '80%',
    },
    placeholderText: {
        fontSize: 18,
        color: '#999',
    },
    contentContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#090909',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#ff0000',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
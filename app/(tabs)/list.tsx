import dados from '@/assets/constants/mock';
import { Item } from "@/components/item";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <>
      <Text style={s.title}> Sensores de Temperatura </Text>
      
      
      <View>
              
            </View>
      
       <SafeAreaView style={s.wrapList}>
                <FlatList data={dados} renderItem={({ item }) => (
                    <Item name={item.nome} text={item.text} image={item.imagem} />
                )}>
                </FlatList>
        </SafeAreaView>
    </>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
    backgroundColor: '#222831',
    color: '#fff',
    paddingBottom: 10,
    textAlign: 'center',
  },
  wrapList:{
        flex: 1
  },
   backBtn: {
        fontSize: 40,
        position: 'absolute',
        top: -250
  },
  
});
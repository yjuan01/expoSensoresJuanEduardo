import { StyleSheet, Text } from "react-native";

export default function ListScreen() {
  return (
    <>
      <Text style={s.title}> 🖥️ Componentes 🖥️ </Text>
    </>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
  }
});
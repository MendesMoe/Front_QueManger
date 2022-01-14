import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Recipe from "./src/views/Recipe";
import {
  useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
} from "@expo-google-fonts/merriweather";

export default function App() {
  let [fontsLoaded] = useFonts({
    merriweather_regular: Merriweather_400Regular,
    merriweather_bold: Merriweather_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <SafeAreaView>
        <StatusBar />
        <Recipe />
      </SafeAreaView>
    );
  }
}

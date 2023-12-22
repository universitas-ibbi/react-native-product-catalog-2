import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";

import ProductItem from "./ProductItem";

import dataProduct from "./products.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {dataProduct.map((product) => (
          <ProductItem {...product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

import { View, Text, Image, Button, StyleSheet } from "react-native";

import { Rating } from "react-native-ratings";

export default function ProductItem(props) {
  return (
    <View style={styles.productItem}>
      <Image
        source={{
          uri: props.productImage,
        }}
        width={"100%"}
        height={240}
        resizeMode="contain"
        style={styles.productImage}
      />
      <Text style={styles.textProductName}>{props.productName}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Rating ratingCount={5} startingValue={props.rating} />
        <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>
          {props.reviews}
        </Text>
      </View>
      <Text style={styles.textFeature}>
        100% cotton • Light weight • Best finish Unique design • For Men •
        Casual
      </Text>
      <View style={styles.viewPrice}>
        <Text style={styles.textPriceAfter}>$ {props.priceAfter}</Text>
        <Text style={styles.textPriceBefore}>$ {props.priceBefore}</Text>
      </View>
      <Text style={styles.textShipping}>Free Shipping</Text>
      <Button title="Details" />
      <Button title="Add to Wishlist" />
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    borderColor: "rgb(222, 226, 230)",
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  productImage: {
    marginBottom: 15,
  },
  textProductName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textFeature: {
    fontSize: 20,
    color: "rgba(33, 37, 41, 0.75)",
    marginVertical: 10,
  },
  viewPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  textPriceAfter: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textPriceBefore: {
    fontSize: 20,
    color: "red",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  textShipping: {
    color: "rgb(25, 135, 84)",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});

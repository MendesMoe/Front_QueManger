import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

import lasagne from "../../assets/lasagne.jpeg";

const width = Dimensions.get("screen").width;

export default function Recipe() {
  return (
    <>
      <Text style={format.title_recipe}> Lasagne au Saumon</Text>
      <Image source={lasagne} style={format.img_recipe} />
    </>
  );
}

const format = StyleSheet.create({
  img_recipe: {
    width: "100%",
    resizeMode: "contain",
    marginTop: -80,
  },
  title_recipe: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    color: "red",
    padding: 0,
    fontFamily: "merriweather_bold",
  },
});

import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantData/About";
import MenuItem from "../components/restaurantData/MenuItems";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}

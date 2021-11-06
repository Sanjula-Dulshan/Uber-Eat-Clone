import React from "react";
import { View, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantData/About";
import MenuItem from "../components/restaurantData/MenuItems";
import ViewCart from "../components/restaurantData/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ marginBottom: 320 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem />
      </ScrollView>

      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}

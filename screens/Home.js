import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurant,
} from "../components/RestaurantItems";
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY = "";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurant);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

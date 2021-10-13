import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <HeaderTabs />
          <SearchBar />
        </View>
      </View>
    </SafeAreaView>
  );
}

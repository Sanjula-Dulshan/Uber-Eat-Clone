import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import SafeViewAndroid from "./SafeViewAndroid";

export default function HeaderTabs() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <HeaderButton />
    </SafeAreaView>
  );
}
const HeaderButton = () => <Text>Delivery</Text>;

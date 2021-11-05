import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "p9LnUP0gMWHUrg72WZsr3gTsU36FmF8tzTeH2_ik80KGmUNydJX7zXm2PK3v4f5KWaxo5_WWblP5n6-2fP7TGxYOYjK0K6HvPPzRpn5LOabVZk7YQ2A_84WAfv52YXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("SanDiego");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "white", padding: 10 }}>
          <HeaderTabs />
          <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

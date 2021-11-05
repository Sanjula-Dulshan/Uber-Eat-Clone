import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai  • Comfort Food  • $$   • 🎫 • ⭐";

export default function About() {
  return (
    <View>
      {/* RestaurantImage */}
      <RestaurantImage image={image} />

      {/* RestaurantTitle */}
      <RestaurantTitle title={title} />

      {/* RestaurantDescription */}
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);

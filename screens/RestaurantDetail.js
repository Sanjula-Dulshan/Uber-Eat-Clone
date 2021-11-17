import React from "react";
import { View, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/restaurantData/About";
import MenuItem from "../components/restaurantData/MenuItems";
import ViewCart from "../components/restaurantData/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  const foods = [
    {
      title: "Soups and Congees",
      description: "Instead of adding milk or cream into the soup.",
      price: "$16.50",
      image:
        "https://www.chinadiscovery.com/assets/images/travel-guide/food/food-culture/soup.jpg",
    },
    {
      title: "Banana oatmeal pancakes",
      description:
        "Delicious healthy pancakes that are gluten-free, dairy-free, and sugar-free.",
      price: "$10.70",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2017/01/DSC_0516-copy-1024x796.jpg",
    },
    {
      title: "Beef pot roast",
      description:
        "Tender, slow-cooked, flavorful beef pot roast with golden potatoes and savory carrots.",
      price: "$9.20",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2021/09/Beef-Pot-Roast-11-1-1529x2048.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Blackberry Cobbler",
      description:
        "A Texas favorite! This Blackberry Cobbler is made with a sweet, buttery crust with fresh sweetened blackberries and topped with vanilla bean ice cream.",
      price: "$19.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2021/08/Blackberry-Cobbler-6-1536x2048.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
    {
      title: "Peach Cobbler",
      description:
        "Fresh peaches tossed with a touch of sugar and topped with a homemade sweet.",
      price: "$8.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2021/06/Peach-Cobbler-9-1532x2048.jpg",
    },
    {
      title: "Chinese Orange Chicken",
      description:
        "Chinese orange chicken made with crispy fried chicken covered in an authentic orange sauce.",

      price: "$15.00",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2018/01/Chinese-Orange-Chicken-2-1024x729.jpg",
    },
    {
      title: "Levain Bakery Chocolate Chip Cookies",
      description:
        "The Famous Levain Bakery Chocolate Chip Cookie Recipe that everyone goes crazy over! ",

      price: "$10.00",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2015/12/Levain-Bakery-Chocolate-Chip-Copycat-Cookie-Recipe-3-1024x870.jpg",
    },
  ];
  return (
    <View style={{ marginBottom: 320 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem restaurantName={route.params.name} foods={foods} />
      </ScrollView>

      <ViewCart navigation={navigation} />
    </View>
  );
}

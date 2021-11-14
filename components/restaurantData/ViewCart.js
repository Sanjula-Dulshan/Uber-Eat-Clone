import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import numbro from "numbro";

export default function ViewCart() {
  const { items } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });
  const totalUSD = numbro(total).formatCurrency({ mantissa: 2 });
  console.log(totalUSD);
  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 120,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 250,
                position: "absolute",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 20 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import numbro from "numbro";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const { items } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD",
  // });
  const totalUSD = numbro(total).formatCurrency({ mantissa: 2 });

  const checkoutModalContext = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContext()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 40,
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
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
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

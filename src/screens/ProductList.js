import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import api from "../Services/api";

export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [products]);

  const fetchProducts = async () => {
    const response = await api.get("/products");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10, fontWeight: "bold" }}>Clique no item para ver mais infos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
           style={{ padding: 10, borderWidth: 1, marginBottom: 10, borderRadius: 5, }}>
            <Text style={styles.item}>{item.name}</Text>
            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("ProductForm", { product: item })
              }
            />
            <Button title="Deletar" onPress={() => deleteProduct(item._id)} />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Adicionar Produto"
        onPress={() => navigation.navigate("ProductForm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { fontSize: 18, marginBottom: 8, },
});
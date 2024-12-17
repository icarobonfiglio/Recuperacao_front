import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{product.name}</Text>
      <Text style={styles.label}>Preço:</Text>
      <Text style={styles.value}>R$ {product.price}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 18, fontWeight: 'bold' },
  value: { fontSize: 16, marginBottom: 16 },
});
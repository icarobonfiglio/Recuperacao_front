import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{product.name}</Text>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.value}>{product.description}</Text>
      <Text style={styles.label}>Quantidade:</Text>
      <Text style={styles.value}>{product.quantity}</Text>
      <Image source={{ uri: product.photoUrl }} style={{ width: 200, height: 200, marginHorizontal: "auto", marginBottom: 10 }} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 18, fontWeight: 'bold' },
  value: { fontSize: 16, marginBottom: 16 },
});
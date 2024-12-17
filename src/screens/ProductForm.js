import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../Services/api';

export default function ProductForm({ route, navigation }) {
  const product = route.params?.product || { name: '', price: '' };
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price.toString());

  const handleSave = async () => {
    if (product.id) {
      await api.put(`/products/${product.id}`, { name, price });
    } else {
      await api.post('/products', { name, price });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, marginBottom: 16, padding: 8, fontSize: 16 },
});
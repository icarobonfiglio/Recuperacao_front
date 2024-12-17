import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../Services/api';

export default function ProductForm({ route, navigation }) {
  const product = route.params?.product || { name: '', price: '' };
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [quantity, setQuantity] = useState(product.quantity);
  const [photoUrl, setPhotoUrl] = useState(product.photoUrl);

  const handleSave = async () => {
    if (product._id) {
      await api.put(`/products/${product._id}`, { name, description, quantity, photoUrl });
    } else {
      await api.post('/products', { name, description, quantity, photoUrl });
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
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        keyboardType='numeric'
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="URL"
        value={photoUrl}
        onChangeText={setPhotoUrl}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, marginBottom: 16, padding: 8, fontSize: 16 },
});
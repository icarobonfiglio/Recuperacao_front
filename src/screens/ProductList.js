import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../Services/api';

export default function ProductList({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await api.get('/products');
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
        await api.delete(`/products/${id}`);
        fetchProducts();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                        <Text style={styles.item}>{item.name}</Text>
                        <Button title="Editar" onPress={() => navigation.navigate('ProductForm', { product: item })} />
                        <Button title="Deletar" onPress={() => deleteProduct(item.id)} />
                    </TouchableOpacity>
                )}
            />
            <Button title="Adicionar Produto" onPress={() => navigation.navigate('ProductForm')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    item: { fontSize: 18, marginBottom: 8 },
});
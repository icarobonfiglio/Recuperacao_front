import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductList from './src/screens/ProductList';
import ProductForm from './src/screens/ProductForm';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Produtos' }} />
        <Stack.Screen name="ProductForm" component={ProductForm} options={{ title: 'Novo Produto' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
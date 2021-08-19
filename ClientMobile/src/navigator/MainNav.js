import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import chitiet from "../screen/ChiTietSanPham";
import danhsach from "../screen/DanhSachSanPham";

const Stack = createStackNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode='false' >
        <Stack.Screen name="List" component={danhsach} />
        <Stack.Screen name="Detail" component={chitiet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
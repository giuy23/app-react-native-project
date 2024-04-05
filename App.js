import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Destinations from './screens/Destinations';
import Hotels from './screens/Hotels';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.nameEnterprise}>
        Empresa Verde
      </Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2ECC71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
          },
          drawerActiveTintColor: 'green',
          drawerLabelStyle: {
            fontSize: 18,
            color: '#1C2833',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Inicio',
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={30} color="#808080" />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Destinys"
          options={{
            drawerLabel: 'Destinos',
            drawerIcon: () => (
              <MaterialIcons name="place" size={20} color="#808080" />
            ),
          }}
          component={Destinations}
        />
        <Drawer.Screen
          name="Hotels"
          options={{
            drawerLabel: 'Hoteles',
            drawerIcon: () => (
              <MaterialIcons name="hotel" size={20} color="#808080" />
            ),
          }}
          component={Hotels}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  nameEnterprise : {
    color: '#239B56',
    fontWeight: 'bold',
    fontSize: 26,
    marginHorizontal: 50,
    marginVertical: 20,
  }
});
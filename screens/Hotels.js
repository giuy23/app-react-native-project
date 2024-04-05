import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardHotel from './CardHotel';
import { FlatList } from "react-native-gesture-handler";

const data = [
  { id: "1", title: "Iberostar Selection Miraflores", starts: '4.5', price: '5500',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/38/5f/14/lobby.jpg?w=300&h=300&s=1" },
  { id: "2", title: "Hotel Estelar Miraflores", starts: '4.6', price: '6000',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a7/d7/bc/hotel-estelar-miraflores.jpg?w=300&h=300&s=1" },
  { id: "3", title: "Hyatt Centric San Isidro Lima", starts: '4.3', price: '7000',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/39/2c/16/not-set.jpg?w=300&h=300&s=1" },
  { id: "4", title: "Palacio del Inka, a Luxury Collection Hotel, Cusco", starts: '3.9', price: '5800',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/02/36/d7/courtyard.jpg?w=300&h=300&s=1" },
  { id: "5", title: "Union Hotel Cusco", starts: 'Brasil', price: '4.2',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/02/70/7c/union-hotel-cusco.jpg?w=300&h=300&s=1" },
  { id: "6", title: "Inti Punku MachuPicchu Hotel & Suites", starts: '4.5', price: '8000',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e6/2f/2d/vista-desde-la-sala-de.jpg?w=300&h=300&s=1" },
  { id: "7", title: "Holiday Inn Lima Airport", starts: '4.7', price: '7500',  image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2f/fd/bc/hotel-exterior.jpg?w=300&h=300&s=1" },
];

const titleDestinations = () => (
  <View>
    <Text style={styles.headerText}>Los mejores hoteles del Perú!</Text>
    <Text style={styles.custom}></Text>
    <Text style={styles.customSecond}></Text>
  </View>
);
const Hotels = () => {
  return (
    <FlatList
      ListHeaderComponent={titleDestinations}
      data={data}
      renderItem={({ item }) => <CardHotel item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
  },

  headerText: {
    marginTop: 10,
    width: '80%',
    padding: 16,
    fontSize: 26,
    fontWeight: "bold",
    color: "#34495E",
  },

  custom: {
    width: '80%',
    height: 3,
    marginLeft: 15,
    backgroundColor: 'red',
  },
  
  customSecond: {
    width: '70%',
    height: 3,
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: '#F39C12',
  },
})

export default Hotels;
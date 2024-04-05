import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CardDestination from "./CardDestination";
import { FlatList } from "react-native-gesture-handler";

const data = [
  { id: "1", title: "Gran Muralla China", place: 'China', price: '5500',  image: "https://historia.nationalgeographic.com.es/medio/2014/06/12/china1_2000x1339.jpg" },
  { id: "2", title: "Chichen Itzá", place: 'México', price: '6000',  image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/chichen-itza-arquitectura-que-visitar.png" },
  { id: "3", title: "Petra", place: 'Jordania', price: '7000',  image: "https://blog.grandvoyage.com/wp-content/uploads/2018/12/petra-grandvoyage-01.jpg" },
  { id: "4", title: "Machu Picchu", place: 'Perú', price: '5800',  image: "https://static.nationalgeographic.es/files/styles/image_3200/public/wide-machu-picchu-temple-of-the-sun_92491_600x450.jpg?w=1900&h=1425" },
  { id: "5", title: "Cristo Redentor", place: 'Brasil', price: '6200',  image: "https://www.catolicos.red/wp-content/uploads/2016/12/revistaliving_desfrute-1080x675.jpg" },
  { id: "6", title: "Coliseo Romano", place: 'Italia', price: '8000',  image: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/05/15/5fa3c5d7ef234.jpeg" },
  { id: "7", title: "Taj Mahal", place: 'India', price: '7500',  image: "https://static.nationalgeographicla.com/files/styles/image_3200/public/93080.jpg?w=1900&h=1425" },
];

const titleDestinations = () => (
  <View>
    <Text style={styles.headerText}>Los mejores destinos para ti y tu familia!</Text>
    <Text style={styles.custom}></Text>
    <Text style={styles.customSecond}></Text>
  </View>
);
export default function Destinations() {
  return (
    <FlatList
      ListHeaderComponent={titleDestinations}
      data={data}
      renderItem={({ item }) => <CardDestination item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
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
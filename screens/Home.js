import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { useState } from "react";
import ModalHotel from "./Hotel/ModalHotel";
import ModalDestination from "./Destination/ModalDestination";
const dataPlaces = [
  {
    id: "1",
    title: "Gran Muralla China",
    place: "China",
    price: "5500",
    image:
      "https://historia.nationalgeographic.com.es/medio/2014/06/12/china1_2000x1339.jpg",
  },
  {
    id: "2",
    title: "Chichen Itzá",
    place: "México",
    price: "6000",
    image:
      "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/chichen-itza-arquitectura-que-visitar.png",
  },
  {
    id: "3",
    title: "Petra",
    place: "Jordania",
    price: "7000",
    image:
      "https://blog.grandvoyage.com/wp-content/uploads/2018/12/petra-grandvoyage-01.jpg",
  },
  {
    id: "4",
    title: "Machu Picchu",
    place: "Perú",
    price: "5800",
    image:
      "https://static.nationalgeographic.es/files/styles/image_3200/public/wide-machu-picchu-temple-of-the-sun_92491_600x450.jpg?w=1900&h=1425",
  },
];

const dataHotels = [
  {
    id: "1",
    title: "Iberostar Selection",
    starts: "4.5",
    price: "5500",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/38/5f/14/lobby.jpg?w=300&h=300&s=1",
  },
  {
    id: "2",
    title: "Hotel Estelar ",
    starts: "4.6",
    price: "6000",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a7/d7/bc/hotel-estelar-miraflores.jpg?w=300&h=300&s=1",
  },
  {
    id: "3",
    title: "Hyatt Centric ",
    starts: "4.3",
    price: "7000",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/39/2c/16/not-set.jpg?w=300&h=300&s=1",
  },
  {
    id: "4",
    title: "Palacio del Inka",
    starts: "3.9",
    price: "5800",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/02/36/d7/courtyard.jpg?w=300&h=300&s=1",
  },
];

const Home = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const renderItemHotel = ({ item }) => (
    <View >
      <TouchableOpacity onPress={() => setSelectedHotel(item)}
      style={styles.item}>
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.textCard}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItemDestinations = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => setSelectedDestination(item)}
        style={styles.item}
      >
        <View>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.textCard}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Encuentra el Viaje que deseas</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Explorar</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={{
            uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
          }}
          style={styles.imageHeader}
        />
      </View>
      <Text style={styles.custom}></Text>
      <Text style={styles.customSecond}></Text>
      <View>
        <Text style={styles.headerText}>Mejores Lugares Turisticos</Text>
      </View>
      {/* Agregamos la FlatList de destinos */}
      <FlatList
        data={dataPlaces}
        renderItem={renderItemDestinations}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
      <View>
        <Text style={styles.headerText}>Mejores Lugares Hoteles</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Renderizamos el encabezado y la FlatList de hoteles */}
      <FlatList
        ListHeaderComponent={renderHeader}
        data={dataHotels}
        renderItem={renderItemHotel}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
      />

      {/* Mostramos el modal del hotel seleccionado */}
      {selectedHotel && (
        <ModalHotel
          item={selectedHotel}
          modalVisible={selectedHotel !== null}
          closeModal={() => setSelectedHotel(null)}
        />
      )}

      {/* Mostramos el modal del destino seleccionado */}
      {selectedDestination && (
        <ModalDestination
          item={selectedDestination}
          modalVisible={selectedDestination !== null}
          closeModal={() => setSelectedDestination(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: "auto",
  },

  header: {
    // backgroundColor: "#3498db",
    padding: 16,
    display: "flex",
    flexWrap: "wrap",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTextContainer: {
    // flex: 1,
    marginRight: 36,
  },
  headerText: {
    marginTop: 30,
    width: 250,
    padding: 16,
    fontSize: 26,
    fontWeight: "bold",
    color: "#34495E",
  },
  button: {
    width: 130,
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    marginLeft: 15,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    flex: 1,
    margin: 18,
    height: "100%",
    display: "flex",
    marginVertical: 20,
    backgroundColor: "#EAECEE",
    borderRadius: 22,
    // padding: 16,
    // alignItems: "center",
  },
  imageHeader: {
    width: 250,
    height: 150,
    marginTop: 8,
    borderRadius: 15,
  },

  image: {
    width: 250,
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // marginTop: 8,
    // borderRadius: 15,
  },

  textCard: {
    // marginTop: 10,
    // marginLeft: 20,
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
  },

  custom: {
    width: "80%",
    height: 3,
    marginTop: 25,
    marginLeft: 15,
    backgroundColor: "red",
  },

  customSecond: {
    width: "70%",
    height: 3,
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: "#F39C12",
  },
});

export default Home;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CardDestination = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textCard}>{item.title}</Text>
          <Text style={styles.subTextCard}>Lugar: {item.place}</Text>
          <Text style={styles.subTextCard}>Precio: $ {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 25,
    backgroundColor: "#EAECEE",
    borderRadius: 22,
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  image: {
    width: 200,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  textContainer: {
    marginLeft: 10, // Espacio entre la imagen y el texto
  },
  textCard: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTextCard: {
    padding: 10,
    fontSize: 18,
  }
});

export default CardDestination;

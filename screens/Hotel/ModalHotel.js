// import React from 'react';
// import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';

// const ModalHotel = ({ item, modalVisible, closeModal }) => {
//   if (!item) return null; // Si item es null, no muestra el modal
//   return (
//     <Modal visible={modalVisible} animationType="slide" transparent={true}>
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Image source={{ uri: item.image }} style={styles.modalImage} />
//           <Text style={styles.modalTitle}>{item.title}</Text>
//           <Text style={styles.modalInfo}>Calificación: {item.starts}</Text>
//           <Text style={styles.modalInfo}>Precio: ${item.price}</Text>
//           <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
//             <Text style={styles.closeButtonText}>Cerrar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalImage: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   modalInfo: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#2ECC71',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ModalHotel;

import React from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const ModalHotel = ({ item, modalVisible, closeModal }) => {
  if (!item) return null; // Si item es null, no muestra el modal
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{ uri: item.image }} style={styles.modalImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.modalTitle}>{item.title}</Text>
            <Text style={styles.modalInfo}>Calificación: {item.starts}</Text>
            <Text style={styles.modalInfo}>Precio: ${item.price}</Text>
          </View>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo claro semi-transparente
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalHotel;

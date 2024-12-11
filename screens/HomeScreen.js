import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Datos de los pacientes
const pacientes = [
  { id: '1', nombre: 'Juan', apellido: 'Pérez', genero: 'Masculino', edad: 30, telefono: '555-1234' },
  { id: '2', nombre: 'Ana', apellido: 'García', genero: 'Femenino', edad: 25, telefono: '555-5678' },
  { id: '3', nombre: 'Pedro', apellido: 'Martínez', genero: 'Masculino', edad: 45, telefono: '555-9876' },
  { id: '4', nombre: 'María', apellido: 'López', genero: 'Femenino', edad: 35, telefono: '555-4321' },
  { id: '5', nombre: 'Luis', apellido: 'Rodríguez', genero: 'Masculino', edad: 40, telefono: '555-8765' },
];

const HomeScreen = () => {
  // Función para renderizar cada paciente
  const renderPaciente = ({ item }) => (
    <View style={styles.pacienteContainer}>
      <Text style={styles.pacienteText}>Nombre: {item.nombre} {item.apellido}</Text>
      <Text style={styles.pacienteText}>Género: {item.genero}</Text>
      <Text style={styles.pacienteText}>Edad: {item.edad}</Text>
      <Text style={styles.pacienteText}>Teléfono: {item.telefono}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pacientes</Text>
      <FlatList
        data={pacientes}
        renderItem={renderPaciente}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pacienteContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  pacienteText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HomeScreen;


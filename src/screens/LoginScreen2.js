import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const farmers = [
  { id: '1', name: 'John Doe', creditScore: 7.5, crops: 'Wheat, Corn' },
  { id: '2', name: 'Emma Smith', creditScore: 7.0, crops: 'Tomatoes, Potatoes' },
];

const FarmerHome = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filteredFarmers = farmers.filter(farmer =>
    farmer.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Farmer Search</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Farmers"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Farmer List */}
      <FlatList
        data={filteredFarmers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.farmerImage} />
            <View style={styles.cardText}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.creditScore}>Credit Score: {item.creditScore}</Text>
              <Text style={styles.crops}>{item.crops}</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="green" />
          <Text style={[styles.navText, styles.selectedNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="help-circle" size={24} color="gray" />
          <Text style={styles.navText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card" size={24} color="gray" />
          <Text style={styles.navText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="gray" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16 },
  backButton: { position: 'absolute', top: 20, left: 16, zIndex: 1 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 40 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  farmerImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  cardText: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  creditScore: { fontSize: 14, color: 'gray' },
  crops: { fontSize: 14, color: 'gray' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 12, color: 'gray' },
  selectedNavText: { color: 'green', fontWeight: 'bold' },
});

export default FarmerHome;

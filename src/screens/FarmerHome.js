import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const farmers = [
  { id: '1', name: 'John Doe', creditScore: 7.5, crops: 'Wheat, Corn' },
  { id: '2', name: 'Emma Smith', creditScore: 7.0, crops: 'Tomatoes, Potatoes' },
];

const FarmerHome = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Home');

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
        style={{ flex: 1 }} // Ensure FlatList doesn't push buttons down
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Home')}>
          <Icon name="home" size={24} color={selectedTab === 'Home' ? 'green' : 'gray'} />
          <Text style={[styles.navText, selectedTab === 'Home' && styles.selectedNavText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Help')}>
          <Icon name="help-circle" size={24} color={selectedTab === 'Help' ? 'green' : 'gray'} />
          <Text style={[styles.navText, selectedTab === 'Help' && styles.selectedNavText]}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Transaction')}>
          <Icon name="credit-card" size={24} color={selectedTab === 'Transaction' ? 'green' : 'gray'} />
          <Text style={[styles.navText, selectedTab === 'Transaction' && styles.selectedNavText]}>Transaction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => setSelectedTab('Profile')}>
          <Icon name="user" size={24} color={selectedTab === 'Profile' ? 'green' : 'gray'} />
          <Text style={[styles.navText, selectedTab === 'Profile' && styles.selectedNavText]}>Profile</Text>
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
  
  // Fixed Bottom Navigation Bar
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    position: 'absolute', // Ensures it stays at the bottom
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: 'center', flex: 1 }, // Ensures equal spacing
  navText: { fontSize: 12, color: 'gray' },
  selectedNavText: { color: 'green', fontWeight: 'bold' },
});

export default FarmerHome;

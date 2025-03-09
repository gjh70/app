import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IndustryProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Industry Profile</Text>
        <Icon name="insert-chart-outlined" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" />
        <TextInput
          placeholder="Search industries..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Industry Information */}
      <Text style={styles.industryTitle}>Agricultural Industry</Text>
      <Text style={styles.description}>This is a list of key materials in the agricultural industry:</Text>
      
      {/* List of Materials */}
      <View style={styles.materialList}>
        <Text style={styles.materialItem}>- Wheat</Text>
        <Text style={styles.materialItem}>- Barley</Text>
        
      </View>

      {/* Industry Location Map (Static Image for now) */}
      

      {/* Contact Information */}
      <Text style={styles.contactText}>Contact Agricultural Support Team for more details</Text>
      <Text style={styles.contactInfo}>Phone: 800-123-4567</Text>
      <Text style={styles.contactInfo}>Email: support@agriculture.com</Text>
      <Text style={styles.contactInfo}>Address: 45 Greenway Road, Farmville</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },
  industryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  materialList: {
    marginBottom: 16,
  },
  materialItem: {
    fontSize: 14,
    color: '#333',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  contactText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 14,
    color: '#666',
  },
});

export default IndustryProfile;

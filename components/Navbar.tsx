import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isActive = (name: string) => route.name === name;

  const linkStyle = (name: string) =>
    `px-3 py-2 rounded ${isActive(name) ? 'bg-white bg-opacity-20' : ''}`;

  return (
    <View className="flex-row justify-between items-center bg-gradient-to-r from-slate-800 to-gray-900 px-4 py-3 shadow-md">
      <Pressable onPress={() => navigation.navigate('Home')} style={{ flex: 1 }}>
        <Text className={
          `${linkStyle('Home')} text-white text-base font-medium`
        }>
          Home
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('About')} style={{ flex: 1 }}>
        <Text className={
          `${linkStyle('About')} text-white text-base font-medium`
        }>
          About
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AppPage')} style={{ flex: 1 }}>
        <Text className={
          `${linkStyle('AppPage')} text-white text-base font-medium`
        }>
          AppPage
        </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;

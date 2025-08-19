import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useAuth } from '../../context/authContext';

export default function home() {
  const {logout} = useAuth();
  const handleLogout = async()=> {
    await logout()
  }
  return (
    <View>
      <Text>Home</Text>
      
      <Pressable onPress={handleLogout}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  )
}
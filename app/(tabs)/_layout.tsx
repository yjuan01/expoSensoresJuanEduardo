import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: '#f4f4f4',
        borderTopWidth: 8,
        borderTopColor: '#eee',
        height: 70,
        paddingTop: 5,
        shadowColor: '#2065db85',
        shadowOffset: {
           width: 0, 
           height: -10 
        },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5
        }
    }}>
      <Tabs.Screen
        name="list"
        options={{
          title: 'Temperatura', 
          headerShown: false,
          tabBarIcon: () => <Image style={s.iconTab} source={require('@/assets/icons8-hygrometer.gif')}/>
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movimento',
          headerShown: false,
          tabBarIcon: () => <Image style={s.iconTab} source={require('@/assets/icons8-sensor.gif')}/>
        }}
      />
      <Tabs.Screen 
        name='explore' 
        options={{
          title: 'Toque',
          headerShown: false,
          tabBarIcon: () => <Image style={s.iconTab} source={require('@/assets/icons8-touch-id.gif')}/>
        }} 
      />
      
    </Tabs>
    
  );
}

const s = StyleSheet.create({
  iconTab: {
    width: 30,
    height: 30
  }
})
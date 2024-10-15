import { Tabs } from 'expo-router';
import React from 'react';
import {StyleSheet } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
          position: "absolute",
          bottom:20,
          backgroundColor: '#050554',
          borderRadius: 50,
          marginLeft:20,
          marginRight:20,
          height:50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
          elevation: 5,
        },
        tabBarIconStyle: {
          color: "#fff"
        }
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   fontWeight: "bold",
        //   marginBottom: 10,
        //   },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} style={styles.iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={ focused ? 'person' : 'person-outline'} color={color} style={styles.iconColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} style={styles.iconColor} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox' : 'chatbox-outline'} color={color} style={styles.iconColor} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconColor: {
    color: "#ffffffd4",
  },
});

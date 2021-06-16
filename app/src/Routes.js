import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

import MovingAvarage from '../src/screens/MovingAvarage';
import Report from '../src/screens/Report';

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Média Móvel"
          component={MovingAvarage}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather focused={focused} name="activity" size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Relatório"
          component={Report}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather focused={focused} name="file-text" size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

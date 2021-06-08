import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useTheme } from 'styled-components'
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { ServiceReportRoutes } from '../../routes/report.routes';
import TabBarActionButton from '../../components/TabBarActionButton';
import About from './About';
import Test from './Tests';


const { Navigator, Screen } = createBottomTabNavigator()

export function DashBoardRoutes() {
  const theme = useTheme();
  return (
    <>
    <Screen 
        name="Add" 
        component={ServiceReportRoutes} 
        
        options={{
          tabBarButton: (props) => (
            <TabBarActionButton {...props} />
          )
        }}
      />
      <Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.text,
          labelPosition: 'beside-icon',
          style: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 58,
          },
          keyboardHidesTabBar: true,
        }}
      >
        <Screen name="Home" component={Test} 
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                  name="home"
                  size={size}
                  color={color}
                />
              ),
            }}
        />
        <Screen 
          name="Add" 
          component={ServiceReportRoutes} 
          
          options={{
            tabBarButton: (props) => (
              <TabBarActionButton {...props} />
            )
          }}
        />
        <Screen name="About" component={About}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons
                name="info-outline"
                size={size}
                color={color}
              />
            ),
          }} 
        />
      </Navigator>
      
    </>
  )
}
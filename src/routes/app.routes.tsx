import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { ServiceReportRoutes } from './report.routes'

import { DashBoardRoutes } from '../screens/Dashboard'

const { Navigator, Screen } = createStackNavigator()
export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'push',
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
      }}
      
    >
      <Screen name="Dashboard" component={DashBoardRoutes} />
      <Screen name="ServiceReport" component={ServiceReportRoutes} options={{
        
      }} />
    </Navigator>
  )
}
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Name from '../screens/ServiceReport/Name'
import Publications from '../screens/ServiceReport/Publications'
import Videos from '../screens/ServiceReport/Videos'
import Hours from '../screens/ServiceReport/Hours'
import Revisits from '../screens/ServiceReport/Revisits'
import Studies from '../screens/ServiceReport/Studies'
import Summary from '../screens/Summary'
import { useTheme } from 'styled-components'
import CreditCard from '../screens/ServiceReport/CreditCard'
import FieldTest from '../screens/ServiceReport/FieldTest'

const { Navigator, Screen } = createStackNavigator()

export function ServiceReportRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: theme.colors.shape,
        },
        headerTintColor: theme.colors.title,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 24,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Screen name="FieldTest" component={FieldTest} options={{ title: 'Informações básicas' }} />
      <Screen name="Name" component={Name} options={{ title: 'Nome' }} />
      <Screen name="Publications" component={Publications}  options={{ title: 'Publicações' }}  />
      <Screen name="Videos" component={Videos}  options={{ title: 'Vídeos' }}  />
      <Screen name="Hours" component={Hours}  options={{ title: 'Horas' }}  />
      <Screen name="Revisits" component={Revisits}  options={{ title: 'Revisitas' }}  />
      <Screen name="Studies" component={Studies}  options={{ title: 'Estudos' }}  />
      <Screen name="CreditCard" component={CreditCard} options={{ title: 'Cartão de Crédito' }} />
      <Screen name="Summary" component={Summary}  options={{ title: 'Resumo' }}  />
    </Navigator>
  )
}
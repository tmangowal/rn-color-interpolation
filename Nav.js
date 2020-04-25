import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Screen from './Screen'
import Screen2 from './Screen'
import CustomTab from './CustomTab'

export default createAppContainer(
  createMaterialTopTabNavigator({
    Screen,
    Screen2
  },
  {
    style: {
      paddingTop: 36
    },
    tabBarComponent: (navigationProps) => <CustomTab navigationProps={navigationProps} />
  })
)


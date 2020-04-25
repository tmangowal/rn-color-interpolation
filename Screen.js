import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated'
import { onScroll } from 'react-native-redash'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const { Value, interpolate, Extrapolate } = Animated

export default () => {

  const y = new Value(0)

  const translateX = interpolate(y, {
    inputRange: [0, 100],
    outputRange: [100, 0],
    extrapolate: Extrapolate.EXTEND
  })

  return ( 
    <Animated.ScrollView scrollEventThrottle={1} onScroll={onScroll({ y })}>
      <Animated.Text style={{ transform: [{ translateX }]}}>Hello There</Animated.Text>
    </Animated.ScrollView>
  )
}
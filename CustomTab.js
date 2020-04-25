import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

const { round, interpolate, Extrapolate, color, Value } = Animated;

const colorRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

const hexToRgb = hex => {
  const result = colorRegex.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
};

const white = { r: 255, g: 255, b: 255 };

export const interpolateColors = (animationValue, inputRange, hexColors) => {
  const colors = hexColors.map(hexColor => hexToRgb(hexColor) || white);
  const r = round(
    interpolate(animationValue, {
      inputRange,
      outputRange: colors.map(c => c.r),
      extrapolate: Extrapolate.CLAMP
    })
  );
  const g = round(
    interpolate(animationValue, {
      inputRange,
      outputRange: colors.map(c => c.g),
      extrapolate: Extrapolate.CLAMP
    })
  );
  const b = round(
    interpolate(animationValue, {
      inputRange,
      outputRange: colors.map(c => c.b),
      extrapolate: Extrapolate.CLAMP
    })
  );
  return color(r, g, b);
};

export default props => {
  const { navigationProps } = props;
  const {
    navigationState: { index },
    position
  } = navigationProps;

  return (
    <Animated.View
      style={{
        backgroundColor: interpolateColors(
          position,
          [0, 1],
          ["#F7AFEF", "#000000"]
        ),
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {
        // input ranges need to be modified to prevent lag in low grade android devices
      }
      <Animated.Text
        style={{
          color: interpolateColors(position, index ? [0.5, 1] : [0, 0.3], [
            "#000000",
            "#F7AFEF"
          ]),
          fontSize: interpolate(position, {
            inputRange: index ? [0.5, 1] : [0, 0.3],
            outputRange: [20, 24],
            extrapolate: Extrapolate.CLAMP
          })
        }}
      >
        Tab bar
      </Animated.Text>
    </Animated.View>
  );
};

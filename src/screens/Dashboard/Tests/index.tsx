import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  useDerivedValue,
  interpolateColor
} from 'react-native-reanimated'

import { Container, Card, Title, ProgressIndicator } from './styles';

const Tests: React.FC = () => {
  const width = Dimensions.get('screen').width;
  const titleValue = useSharedValue(0)
  const progressValue = useSharedValue(0)
  const progressColor = useDerivedValue(() => interpolateColor(
    progressValue.value, [0, width - 80], ['#BFEAF5', '#00da6d']));
  const progressStyle = useAnimatedStyle(() => ({
    width: progressValue.value,
    backgroundColor: progressColor.value,
    height: interpolate(
      progressValue.value,
      [0, width - 80],
      [2, 3],
      Extrapolate.CLAMP
    )
  }))
  const textStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      titleValue.value,
      [0, 40],
      [0, 1],
      Extrapolate.CLAMP
    ),
    marginLeft: interpolate(
      titleValue.value,
      [0, 40],
      [-20, 0],
      Extrapolate.CLAMP
    )
  }))

  useEffect(() => {
    progressValue.value = withTiming(width - 80, {
      duration: 4000,
    }, () => {
      return titleValue.value = withTiming(40, { duration: 500 })
    })
  }, [])

  return (
    <Container>
      <Card>
        <Title style={textStyle}>Enviado!</Title>
        <ProgressIndicator style={progressStyle} />
      </Card>
    </Container>
  )
}

export default Tests;
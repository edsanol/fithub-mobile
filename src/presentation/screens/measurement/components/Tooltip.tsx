import {Circle, Text} from '@shopify/react-native-skia';
import type {SharedValue} from 'react-native-reanimated';

export function ToolTip({
  x,
  y,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
}) {
  return (
    <>
      <Circle cx={x} cy={y} r={8} color="black" />
    </>
  );
}

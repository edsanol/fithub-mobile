import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {
  Circle,
  Line as SkiaLine,
  vec,
  Text as SkiaText,
  useFont,
  Vertices,
} from '@shopify/react-native-skia';

const ActiveValueIndicator = ({
  xPosition,
  yPosition,
  top,
  bottom,
  activeValue,
  textColor,
  lineColor,
  topOffset = 0,
}: {
  xPosition: SharedValue<number>;
  yPosition: SharedValue<number>;
  activeValue: SharedValue<number>;
  bottom: number;
  top: number;
  textColor: string;
  lineColor: string;
  topOffset?: number;
}) => {
  const font = useFont(require('../../../assets/fonts/Roboto-Regular.ttf'), 10);
  const activeValueDisplay = useDerivedValue(() =>
    activeValue.value.toFixed(2),
  );
  const activeValueWidth = useDerivedValue(
    () => font?.getTextWidth(activeValueDisplay.value) || 0,
  );
  const activeValueX = useDerivedValue(
    () => xPosition.value - activeValueWidth.value / 2,
  );
  const activeValueY = useDerivedValue(() => yPosition.value - 26);

  const valueCircleX = useDerivedValue(() => xPosition.value);
  const valueCircleY = useDerivedValue(() => yPosition.value - 30);
  // const vertices = [vec(64, 0), vec(128, 256), vec(0, 256)];
  const vertices = [
    vec(xPosition.value, yPosition.value - 10),
    vec(xPosition.value - 10, yPosition.value - 20),
    vec(xPosition.value + 10, yPosition.value - 20),
  ];

  return (
    <>
      <Circle cx={valueCircleX} cy={valueCircleY} r={16} color="#371D6C" />
      <Vertices vertices={vertices} color={'#371D6C'} />
      <Circle
        cx={valueCircleX}
        cy={valueCircleY}
        r={13}
        color="hsla(0, 0, 100%, 0.25)"
      />
      <SkiaText
        color={textColor}
        font={font}
        text={activeValueDisplay}
        x={activeValueX}
        y={activeValueY}
      />
    </>
  );
};

export default ActiveValueIndicator;

import {Text, View, useWindowDimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Skeleton} from 'moti/skeleton';
import {MotiView} from 'moti';
import {MotiSkeletonProps} from 'moti/build/skeleton/types';

const Spacer = ({height = 16}) => <MotiView style={{height}} />;

const SkeletonCommonsProps: Omit<MotiSkeletonProps, 'Gradient'> = {
  colorMode: 'dark',
  transition: {
    type: 'timing',
    duration: 1000,
  },
  backgroundColor: 'rgba(50, 0, 240, 0.1)',
};

const MeasurementLoadingSkeleton = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Spacer height={20} />
      <Skeleton
        show
        radius={8}
        height={32}
        width={140}
        {...SkeletonCommonsProps}
      />
      <Spacer height={24} />
      <View
        style={{
          width: '100%',
          height: 240,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignContent: 'space-between',
        }}>
        <Skeleton
          show
          radius={8}
          height={110}
          width={width * 0.42}
          {...SkeletonCommonsProps}
        />
        <Skeleton
          show
          radius={8}
          height={110}
          width={width * 0.42}
          {...SkeletonCommonsProps}
        />
        <Skeleton
          show
          radius={8}
          height={110}
          width={width * 0.42}
          {...SkeletonCommonsProps}
        />
        <Skeleton
          show
          radius={8}
          height={110}
          width={width * 0.42}
          {...SkeletonCommonsProps}
        />
      </View>
      <Spacer height={18} />
      <Skeleton
        show
        radius={8}
        height={28}
        width={80}
        {...SkeletonCommonsProps}
      />
      <Spacer height={24} />
      <Skeleton
        show
        radius={8}
        height={200}
        width={'100%'}
        {...SkeletonCommonsProps}
      />
    </View>
  );
};

export default MeasurementLoadingSkeleton;

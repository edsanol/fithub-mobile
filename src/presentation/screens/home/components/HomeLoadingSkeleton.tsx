import {View, Text} from 'react-native';
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

const HomeLoadingSkeleton = () => {
  return (
    <>
      <View
        style={{
          height: 0.5,
          width: '60%',
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          marginTop: 8,
        }}
      />
      <Spacer height={24} />
      <Skeleton radius={8} height={26} width={80} {...SkeletonCommonsProps} />
      <Spacer height={4} />
      <Skeleton radius={8} height={18} width={100} {...SkeletonCommonsProps} />
      <Spacer height={4} />
      <View
        style={{
          marginVertical: 8,
          width: '100%',
          height: 0.8,
          backgroundColor: '#6B7280',
        }}
      />
      <Spacer height={4} />
      <Skeleton radius={8} height={26} width={80} {...SkeletonCommonsProps} />
      <Spacer height={4} />
      <Skeleton radius={8} height={18} width={100} {...SkeletonCommonsProps} />
      <Spacer height={20} />
      <Skeleton
        radius={18}
        height={160}
        width={'100%'}
        {...SkeletonCommonsProps}></Skeleton>
      <Spacer height={20} />
      <Skeleton radius={8} height={26} width={160} {...SkeletonCommonsProps} />
      <Spacer height={12} />
      <Skeleton
        radius={12}
        height={80}
        width={'100%'}
        {...SkeletonCommonsProps}
      />
    </>
  );
};

export default HomeLoadingSkeleton;

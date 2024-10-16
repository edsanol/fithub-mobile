import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Category} from '../../screens/profile/contact/ViewModel';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type AccordionProps = {
  value: Category;
};

const Accordion = ({value}: AccordionProps) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{rotate: `${progress.value * -180}deg`}],
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              'worklet';
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name={value.icon}
            size={22}
            color="#2A49FF"
            style={{bottom: -1}}
          />
          <Text style={styles.textTitle}>{value.title}</Text>
        </View>
        <Animated.View style={iconStyle}>
          <Icon name={'chevron-down-sharp'} size={18} color={'white'} />
        </Animated.View>
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          <View style={styles.content}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 6,
                backgroundColor: '#2A49FF',
                alignSelf: 'center',
                marginRight: 12,
              }}
            />
            <Text style={styles.textContent}>{value.content}</Text>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 2,
    marginVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#6B7280',
    overflow: 'hidden',
  },
  titleContainer: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 20,
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#6B7280',
    paddingLeft: 40,
  },
  textContent: {
    fontSize: 14,
    color: 'white',
  },
});

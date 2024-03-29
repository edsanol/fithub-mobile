import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SelectDropdownProps {
  name?: string;
  masterData: {value: string; label: string}[];
  handleSelectChange: (value: string) => void;
  initialSelected?: string;
}

const SelectDropdown = ({
  name,
  masterData,
  handleSelectChange,
  initialSelected,
}: SelectDropdownProps) => {
  const [data, setData] = useState(masterData);
  const [drowpdown, setDropDown] = useState({
    itemValue: initialSelected || null,
    itemLabel: initialSelected
      ? masterData.find(item => item.value === initialSelected)?.label
      : null,
  });
  const {itemValue, itemLabel} = drowpdown;
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleLong, setToggleLong] = useState<boolean>(false);

  const animation = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    handleAnimatedLong();
  }, [toggleLong]);

  const handleAnimatedLong = () => {
    Animated.spring(scale, {
      toValue: toggleLong ? 1 : 0,
      friction: 5,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    handleAnimated();
  }, [toggle]);

  const handleAnimated = () => {
    Animated.timing(animation, {
      toValue: toggle ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const arrowStyle = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '90deg'],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const translate = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [itemValue ? -12 : 0, -12],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [itemValue ? -24 : 0, -24],
          extrapolate: 'clamp',
        }),
      },
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [itemValue ? 0.8 : 1, 0.8],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const listStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scaleStyle = {
    transform: [
      {
        scale: scale,
      },
    ],
  };

  const Item = ({value, label}: {value: string; label: string}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDropDown({
            itemValue: value,
            itemLabel: label,
          });
          setData(masterData);
          setToggle(false);
          handleSelectChange(value || '');
        }}
        style={styles.item}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '300',
              color: itemValue === value ? '#FFFFFF' : '#6B7280',
            }}>
            {label}
          </Text>
        </View>
        {itemValue === value && (
          <View style={styles.checkContainer}>
            <Icon name={'checkmark-sharp'} size={18} color={'#008F39'} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableWithoutFeedback
        onPressIn={() => setToggleLong(true)}
        onPressOut={() => setToggleLong(false)}
        onPress={() => setToggle(!toggle)}>
        <View style={styles.button}>
          <Animated.View style={[styles.titleBox, translate]}>
            <Text style={{fontSize: 14, color: '#6B7280', fontWeight: '300'}}>
              Genero
            </Text>
          </Animated.View>
          {itemValue && (
            <View style={[styles.titleBox, {zIndex: 0}]}>
              <Text style={{fontSize: 13, fontWeight: '300', color: '#FFFFFF'}}>
                {itemLabel}
              </Text>
            </View>
          )}
          <Animated.View style={[styles.arrowRight, arrowStyle]}>
            <Icon name={'chevron-forward'} size={18} color={'white'} />
            <Animated.View style={[styles.circle, scaleStyle]} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.container, listStyle]}>
        <View style={[styles.listContainer, {opacity: 1}]}>
          {/* lista */}
          <View style={styles.list}>
            {toggle && (
              <View style={styles.list}>
                {data.map((item, index) => (
                  <Item key={index} {...item} />
                ))}
              </View>
            )}
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 'auto',
    alignSelf: 'stretch',
    marginTop: 12,
  },
  button: {
    height: 50,
    width: '96%',
    alignSelf: 'center',
    backgroundColor: '#1F222A',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 10,
    borderRadius: 18,
  },
  leftIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
    zIndex: 10,
  },
  titleBox: {
    position: 'absolute',
    left: 12,
    backgroundColor: '#1F222A',
    paddingHorizontal: 4,
    zIndex: 0,
    borderRadius: 8,
  },
  arrowRight: {
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    zIndex: 10,
  },
  circle: {
    height: 35,
    width: 35,
    backgroundColor: 'rgba(64, 122, 195, 0.08)',
    borderRadius: 50,
    position: 'absolute',
    zIndex: 0,
  },
  container: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: '#1F222A',
    left: 0,
    top: -48,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 2,
    zIndex: 0,
  },
  listContainer: {
    flex: 1,
  },
  searchBar: {
    height: 43,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
  },
  magnify: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 8,
    fontWeight: '300',
    fontSize: 15,
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
  item: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkContainer: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

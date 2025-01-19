import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeViewModel from '../ViewModel';

interface DateHeaderProps {
  navigation?: any;
  unreadNotifications: number;
  resetUnreadNotifications: () => void;
}

function capitalizarPrimeraLetra(str: string) {
  const stringReturn = str.charAt(0).toUpperCase() + str.slice(1);
  if (stringReturn.charAt(stringReturn.length - 1) === '.') {
    return stringReturn.slice(0, stringReturn.length - 1);
  }

  return stringReturn;
}

const DateHeader = ({
  navigation,
  unreadNotifications,
  resetUnreadNotifications,
}: DateHeaderProps) => {
  const {date, value, weeks, athlete, gym} = HomeViewModel();

  const handleNavigateToNotifications = () => {
    resetUnreadNotifications();
    navigation.navigate('Notification');
  };

  return (
    <View style={{minHeight: 148, maxHeight: 148}}>
      <View style={styles.container}>
        <View style={{justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#FFFFFF'}}>
            Hola, {athlete?.athleteName}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#7f8490'}}>
            {gym?.gymName}.
          </Text>
        </View>
        <View>
          {/* <SvgXml xml={FitHub} width={60} height={20} /> */}
          <TouchableWithoutFeedback
            onPress={handleNavigateToNotifications}
            style={{
              backgroundColor: '#2f0743',
              borderRadius: 40,
              padding: 4,
            }}>
            <View>
              <Icon name={'notifications'} size={30} color={'white'} />
              {unreadNotifications > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{unreadNotifications}</Text>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textDate}>{capitalizarPrimeraLetra(date)}</Text>
        {weeks.map((dates, index) => (
          <View style={styles.itemRow} key={index}>
            {dates.map((item, dateIndex) => {
              const isActive =
                value.toDateString() === item.date.toDateString();
              return (
                <TouchableWithoutFeedback key={dateIndex}>
                  <View
                    style={[
                      styles.item,
                      isActive && {
                        backgroundColor: '#2A49FF',
                        borderColor: '#111',
                      },
                    ]}>
                    <Text
                      style={[styles.itemWeekday, isActive && {color: '#fff'}]}>
                      {capitalizarPrimeraLetra(item.weekday)}
                    </Text>
                    <Text
                      style={[
                        styles.itemDate,
                        isActive && {
                          backgroundColor: '#FFFFFF',
                          color: '#000000',
                          overflow: 'hidden',
                        },
                      ]}>
                      {item.date.getDate()}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({
  container: {
    height: '28%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDate: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBottom: 8,
  },
  item: {
    flex: 1,
    height: 70,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    borderRadius: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  itemWeekday: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  itemDate: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    backgroundColor: 'transparent',
    lineHeight: 28,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

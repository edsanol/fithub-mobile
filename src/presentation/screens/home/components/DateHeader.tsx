import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import HomeViewModel from '../ViewModel';
import {SvgXml} from 'react-native-svg';
import {FitHub} from '../../../assets/svg/iconSVG';

function capitalizarPrimeraLetra(str: string) {
  const stringReturn = str.charAt(0).toUpperCase() + str.slice(1);
  if (stringReturn.charAt(stringReturn.length - 1) === '.') {
    return stringReturn.slice(0, stringReturn.length - 1);
  }

  return stringReturn;
}

const DateHeader = () => {
  const {date, value, weeks, athlete, gym} = HomeViewModel();

  return (
    <View style={{minHeight: 148, maxHeight: 148}}>
      <View style={styles.container}>
        <View style={{justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 14, fontWeight: '700', color: '#FFFFFF'}}>
            Hola, {athlete?.athleteName}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#6B7280'}}>
            {gym?.gymName}.
          </Text>
        </View>
        <View>
          <SvgXml xml={FitHub} width={60} height={20} />
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
    height: '24%',
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
    textAlignVertical: 'center',
  },
});

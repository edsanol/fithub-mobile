import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MembershipExpirationProps {
  startDate?: string | Date | null;
  endDate?: string | Date | null;
}

const MembershipExpiration = ({
  startDate,
  endDate,
}: MembershipExpirationProps) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diff = end.getTime() - start.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    }
  }, [startDate, endDate]);

  return (
    <View
      style={{
        width: '100%',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon name="calendar-outline" size={30} color="#FFFFFF" />
      <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 12, fontWeight: '700', color: '#FFFFFF'}}>
          Tiempo restante
        </Text>
        <Text
          style={{fontSize: 12, fontWeight: '500', color: '#797f8b'}}
          maxFontSizeMultiplier={1.1}>
          {daysLeft > 0
            ? `Te quedan ${daysLeft} días para que expire tu membresía`
            : 'Tu membresía ha expirado'}
        </Text>
      </View>
    </View>
  );
};

export default MembershipExpiration;

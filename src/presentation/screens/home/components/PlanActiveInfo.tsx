import {View, Text} from 'react-native';

interface PlanActiveInfoProps {
  membershipName?: string | null;
}

const PlanActiveInfo = ({membershipName}: PlanActiveInfoProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: 44,
        marginTop: 24,
      }}>
      <Text style={{fontSize: 18, fontWeight: '700', color: '#FFFFFF'}}>
        Plan Activo
      </Text>
      <Text style={{fontSize: 12, fontWeight: '500', color: '#6B7280'}}>
        {membershipName ? membershipName : 'No tienes un plan activo'}
      </Text>
    </View>
  );
};

export default PlanActiveInfo;

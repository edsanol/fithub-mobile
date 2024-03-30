import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { BackgoundComponent } from '../../components';
import DateHeader from './components/DateHeader';
import homeStyles from './styles';
import HomeViewModel from './ViewModel';
import ProgressCard from './components/ProgressCard';
import { StackScreenProps } from '@react-navigation/stack';
import { MeasurementStackParamList } from '../../navigation/MeasurementNavigation';
import PlanActiveInfo from './components/PlanActiveInfo';
import MembershipExpiration from './components/MembershipExpiration';
import CardInfo from './components/CardInfo';
import HomeLoadingSkeleton from './components/HomeLoadingSkeleton';
import { useCallback, useEffect, useRef, useState } from 'react';

interface HomeProps
  extends StackScreenProps<MeasurementStackParamList, 'Home'> { }

const HomeScreen = ({ navigation }: HomeProps) => {
  const { measurements, loading, athlete, refreshing, handleRefresh } =
    HomeViewModel();
  const timeoutRef = useRef<any>();

  const onRefresh = useCallback(() => {
    handleRefresh(true);
    timeoutRef.current = setTimeout(() => {
      handleRefresh(false);
    }, 700);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <BackgoundComponent>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <DateHeader />
        {loading ? (
          <HomeLoadingSkeleton />
        ) : (
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={homeStyles.scrollView}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'white'} />
            }>
            <View
              style={{
                height: 0.5,
                width: '60%',
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                marginTop: 8,
              }}
            />
            <PlanActiveInfo membershipName={athlete?.membershipName} />
            <View
              style={{
                marginVertical: 8,
                width: '100%',
                height: 0.8,
                backgroundColor: '#6B7280',
              }}
            />
            <MembershipExpiration
              startDate={athlete?.startDate}
              endDate={athlete?.endDate}
            />
            <CardInfo measurements={measurements} />
            <View style={homeStyles.titleContainer}>
              <Text style={homeStyles.titleText}>Sigue Tu Proceso</Text>
            </View>
            <View style={{ flex: 1 }}>
              {measurements.map((item, index) => (
                <ProgressCard
                  measurement={item}
                  navigation={navigation}
                  key={index}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </BackgoundComponent>
  );
};

export default HomeScreen;

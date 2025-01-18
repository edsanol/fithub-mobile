import {View, Text, TextInput, FlatList} from 'react-native';
import {BackgoundComponent, HeaderWithBackButton} from '../../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';
import RoutineListViewModel from './ViewModel';
import RoutineListStyles from './Style';
import HeroCard from './components/HeroCard';
import RoutineCard from './components/RoutineCard';
import React from 'react';
import LoadingScreen from '../../Loading';

interface RoutineProps
  extends StackScreenProps<RoutinesStackParamList, 'Routine'> {}

const RoutineScreen = ({navigation}: RoutineProps) => {
  const {routinesList, loading, value, onChangeText, handleRoutinePress} =
    RoutineListViewModel();

  if (loading) {
    return (
      <>
        <LoadingScreen show={false} />
      </>
    );
  }

  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <HeaderWithBackButton navigation={navigation} styles={{height: '6%'}} />
        <View>
          <Text style={RoutineListStyles.titleText}>Rutinas</Text>
          <TextInput
            numberOfLines={1}
            placeholder={'Buscar...'}
            maxFontSizeMultiplier={1}
            placeholderTextColor="#838995"
            style={RoutineListStyles.input}
            keyboardType="default"
            value={value}
            onChangeText={text => onChangeText(text)}
          />
          {routinesList.items.length === 0 ? (
            <Text style={RoutineListStyles.noRoutinesText}>
              No Tienes rutinas programadas
            </Text>
          ) : (
            <FlatList
              style={{top: 12}}
              data={routinesList.items}
              keyExtractor={item => item.routineId.toString()}
              renderItem={({item}) => (
                <RoutineCard
                  item={item}
                  onPress={() => handleRoutinePress(item, navigation)}
                />
              )}
              ListHeaderComponent={<HeroCard />}
              contentContainerStyle={{paddingBottom: 320}}
            />
          )}
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default RoutineScreen;

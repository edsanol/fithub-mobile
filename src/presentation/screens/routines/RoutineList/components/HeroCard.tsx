import {View, Text, Image} from 'react-native';
import RoutineListStyles from '../Style';

const HeroCard = () => {
  return (
    <View>
      <View style={RoutineListStyles.mainContainer}>
        <View
          style={{
            flex: 2,
            padding: 12,
          }}>
          <Text
            style={RoutineListStyles.messageText}
            maxFontSizeMultiplier={1.2}>
            {'¡Tu plan de entrenamiento está aquí! 💪'}
          </Text>
          <View style={{width: '100%', justifyContent: 'flex-end'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: '#DDDDDD',
              }}>
              Cada rutina está diseñada para ayudarte a superar tus límites y
              alcanzar tus metas. ¡Elige una rutina, ponte en movimiento y
              demuestra de qué estás hech@! 🚀
            </Text>
          </View>
        </View>
        <View style={{flex: 1, position: 'relative'}}>
          <View style={{flex: 1, position: 'absolute', bottom: 0}}>
            <Image
              source={require('../../../../assets/card-image-bg.png')}
              style={{width: 106, height: 170, borderRadius: 14}}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={RoutineListStyles.titleRoutines}>Mis Rutinas</Text>
      </View>
    </View>
  );
};

export default HeroCard;

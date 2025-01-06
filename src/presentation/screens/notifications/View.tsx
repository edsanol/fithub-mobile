import {View, Text, FlatList} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BackgoundComponent, HeaderWithBackButton} from '../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {MeasurementStackParamList} from '../../navigation/MeasurementNavigation';
import {
  NotificationIcon,
  RoutineIcon,
  MeasurementIcon,
} from '../../assets/svg/iconSVG';
import {formatDistanceToNow} from 'date-fns';
import {es} from 'date-fns/locale';
import notificationStyles from './styles';
import NotificationViewModel from './ViewModel';
import React from 'react';
import LoadingScreen from '../Loading';

interface NotificationProps
  extends StackScreenProps<MeasurementStackParamList, 'Notification'> {}

const NotificationScreen = ({navigation}: NotificationProps) => {
  const {notifications, loading} = NotificationViewModel();

  if (loading) {
    return (
      <>
        <LoadingScreen show={false} />
      </>
    );
  }

  const formatDateTime = (datetime: string) => {
    return formatDistanceToNow(new Date(datetime), {
      locale: es,
    });
  };

  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <HeaderWithBackButton navigation={navigation} styles={{height: '6%'}} />
        <Text style={notificationStyles.titleText}>Notificaciones</Text>
        <View style={notificationStyles.container}>
          {notifications.length > 0 ? (
            <FlatList
              data={notifications}
              keyExtractor={item => item.notificationId.toString()}
              renderItem={({item}) => (
                <View style={notificationStyles.containerList}>
                  <View style={notificationStyles.leftContainer}>
                    <View style={notificationStyles.iconContainer}>
                      {item.type === 'measurement' ? (
                        <SvgXml xml={MeasurementIcon} width={34} height={34} />
                      ) : item.type === 'routine' ? (
                        <SvgXml xml={RoutineIcon} width={34} height={34} />
                      ) : (
                        <SvgXml xml={NotificationIcon} width={34} height={34} />
                      )}
                    </View>
                  </View>
                  <View style={notificationStyles.rightContainer}>
                    <View style={notificationStyles.rightTextContainer}>
                      <Text style={notificationStyles.titletextNotification}>
                        {item.title}
                      </Text>
                      <Text style={notificationStyles.dateTextNotification}>
                        {formatDateTime(item.sendAt as string)}
                      </Text>
                    </View>
                    <Text style={notificationStyles.messageTextNotification}>
                      {item.message}
                    </Text>
                  </View>
                </View>
              )}
              contentContainerStyle={{paddingBottom: 120}}
            />
          ) : (
            <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
              No hay notificaciones
            </Text>
          )}
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default NotificationScreen;

import {useEffect, useState} from 'react';
import {getNotificationsByAthleteUseCase} from '../../../config/NotificationContainer/container';
import {Notification} from '../../../domain/entities/Notification';

const NotificationViewModel = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);

  const getNotifications = async () => {
    try {
      setLoading(true);
      const response = await getNotificationsByAthleteUseCase.execute();
      setNotifications(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return {
    notifications,
    loading,
  };
};

export default NotificationViewModel;

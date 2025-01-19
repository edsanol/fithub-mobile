import {StyleSheet} from 'react-native';

const notificationStyles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: 12,
  },
  containerList: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFFFF',
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#21072e',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 4,
    paddingLeft: 16,
  },
  rightTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  titletextNotification: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  dateTextNotification: {
    color: '#AAAAAA',
    fontSize: 12,
    marginTop: 4,
  },
  messageTextNotification: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 4,
  },
});

export default notificationStyles;

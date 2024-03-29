import {StyleSheet} from 'react-native';

const ProfileStyle = StyleSheet.create({
  header: {
    height: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    height: '26%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#2A49FF',
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingVertical: 2,
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    paddingVertical: 2,
    textAlign: 'center',
  },
  profileItem: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#6B7280',
  },
  profileItemText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    paddingLeft: 20,
  },
});

export default ProfileStyle;

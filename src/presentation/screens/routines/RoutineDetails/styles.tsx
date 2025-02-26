import {StyleSheet} from 'react-native';

export const RoutineDetailStyles = StyleSheet.create({
  titleText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cardProgressText: {
    color: '#D0D0D0',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 4,
  },
  descriptionTitleText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  progressCards: {
    marginHorizontal: 12,
    height: 80,
    backgroundColor: 'rgba(50, 0, 240, 0.1)',
    marginBottom: 12,
    marginTop: 4,
    borderRadius: 16,
    width: '94%',
    flexDirection: 'row',
  },
  progressCardsImageContainer: {
    height: 76,
    width: 76,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 16,
  },
  progressCardsTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    paddingLeft: 12,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 48,
    left: 24,
    zIndex: 1,
  },
  backButtonView: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#6B7280',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  routineTitleContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainInfoContainer: {
    height: 52,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
    opacity: 0.6,
  },
  rightIconContainer: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

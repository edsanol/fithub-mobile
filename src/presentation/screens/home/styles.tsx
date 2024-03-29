import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  cardInfo: {
    width: '100%',
    aspectRatio: 2.8,
    backgroundColor: 'rgba(159, 107, 245, 0.1)',
    borderRadius: 20,
    top: 12,
    flexDirection: 'row',
    marginVertical: 20,
  },
  cardInfoChart: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
    paddingTop: 40,
  },
  cardInfoChartText: {
    color: '#D0D0D0',
    fontSize: 14,
    fontWeight: '500',
    bottom: 4,
  },
  cardInfoChartContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'lightblue',
    borderRadius: 60,
  },
  cardInfoDescription: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  cardInfoDescriptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  scrollView: {
    paddingBottom: 160,
    paddingTop: 4,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingTop: 4,
  },
  progressCards: {
    marginHorizontal: 2,
    height: 80,
    backgroundColor: 'rgba(15, 17, 23, 0.3)',
    marginBottom: 12,
    marginTop: 4,
    borderRadius: 16,
    width: '100%',
    flexDirection: 'row',
  },
  progressCardsImageContainer: {
    height: 76,
    width: 76,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 16,
  },
  progressCardsTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 12,
  },
  progressCardInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  ProgressCardInfoData: {
    height: '32%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCardInfoText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 52,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#2A49FF',
    marginRight: 16,
  },
  progressCardLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 6,
  },
  cardProgress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardProgressText: {
    color: '#D0D0D0',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 12,
  },
});

export default homeStyles;

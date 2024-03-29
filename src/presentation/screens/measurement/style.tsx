import {StyleSheet} from 'react-native';

const measurementStyles = StyleSheet.create({
  header: {
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerDay: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280',
  },
  headerDate: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  statsHeaderTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 8,
    bottom: 6,
  },
  statsContentContainer: {
    width: '44%',
    height: '44%',
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingLeft: 20,
  },
  statsContentFirst: {
    width: '100%',
    height: '42%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsContentFirstText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingBottom: 12,
  },
  statUnit: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingBottom: 8,
  },
  graphContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    // borderRadius: 12,
    borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
    borderColor: '#FFFFFF',
  },
});

export default measurementStyles;

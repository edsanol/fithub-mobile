import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {mapperMuscleNames} from '../../../helper';
import {LastMeasurements} from '../../../../domain/entities/LastMeasurements';

const calculateMostSignificantProgress = (progressData: LastMeasurements[]) => {
  let mostSignificant = progressData[0];
  for (let i = 1; i < progressData.length; i++) {
    if (
      Math.abs(progressData[i].progressPercentage) >
      Math.abs(mostSignificant.progressPercentage)
    ) {
      mostSignificant = progressData[i];
    }
  }
  return mostSignificant;
};

interface CardInfoProps {
  measurements: LastMeasurements[];
}

const CardInfo = ({measurements}: CardInfoProps) => {
  const mostSignificant = calculateMostSignificantProgress(measurements);
  const progressSign = mostSignificant.progressPercentage >= 0 ? '+' : '';
  const isPositiveChange = mostSignificant.progressPercentage > 0;
  const isNoChange = mostSignificant.progressPercentage === 0;

  let message;
  if (isPositiveChange) {
    message = `¡Felicidades! Tu esfuerzo está dando frutos. Sigue así.`;
  } else if (isNoChange) {
    message = `Parece que estás manteniendo tu nivel. Encuentra nuevas formas para superar tus límites.`;
  } else {
    message = `Sigue esforzándote, tu dedicación es lo más importante. ¡No te rindas!`;
  }

  const textLength = mapperMuscleNames(mostSignificant.muscle).length;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.messageText}>{message}</Text>
      <View style={styles.dataContainer}>
        <View style={styles.cardInfo}>
          <View style={styles.textContainer}>
            <Text style={styles.progressText}>{progressSign}</Text>
            <Text style={styles.progressValue}>
              {Math.abs(mostSignificant.progressPercentage).toFixed(2)}
            </Text>
            <Text style={styles.percentageText}>%</Text>
          </View>
          <View style={styles.muscleContainer}>
            <Text style={styles.muscleText}>
              {mapperMuscleNames(mostSignificant.muscle)}
            </Text>
            <Icon
              style={{
                position: 'absolute',
                left: textLength * 8 + 8,
                transform: [
                  {rotate: progressSign === '+' ? '-45deg' : '45deg'},
                ],
              }}
              name={'arrow-forward'}
              size={16}
              color={progressSign === '+' ? '#008F39' : '#DE0011'}
            />
          </View>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.baseChart} />
          <View
            style={{
              ...styles.chartProgress,
              height: progressSign === '+' ? '95%' : '70%',
              backgroundColor: progressSign === '+' ? '#008F39' : '#DE0011',
            }}
          />
        </View>
      </View>
      <View style={{width: '100%', height: 20, justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#6B7280'}}>
          👀 Manténte actualizado con tu rendimiento
        </Text>
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  mainContainer: {
    height: 160,
    width: '100%',
    backgroundColor: 'rgba(50, 0, 240, 0.1)',
    borderRadius: 16,
    marginTop: 20,
    padding: 12,
  },
  messageText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  cardInfo: {
    flex: 1,
    maxWidth: '50%',
    minWidth: '50%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    bottom: 4,
  },
  progressValue: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
  },
  percentageText: {
    color: '#6B7280',
    fontSize: 18,
    fontWeight: '700',
    bottom: 4,
  },
  muscleContainer: {
    flexDirection: 'row',
  },
  muscleText: {
    color: '#6B7280',
    fontSize: 18,
    fontWeight: '500',
    bottom: 4,
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  baseChart: {
    width: 44,
    height: '80%',
    backgroundColor: '#6B7280',
    borderRadius: 8,
    marginHorizontal: 4,
    bottom: 4,
  },
  chartProgress: {
    width: 44,
    height: '95%',
    backgroundColor: '#008F39',
    borderRadius: 8,
    marginHorizontal: 4,
    bottom: 4,
  },
});

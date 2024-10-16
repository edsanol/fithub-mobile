import {View, Text} from 'react-native';
import {BackgoundComponent, HeaderWithBackButton} from '../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {MeasurementStackParamList} from '../../navigation/MeasurementNavigation';
import MeasurementViewModel from './ViewModel';
import {useContext, useEffect, useMemo} from 'react';
import {CartesianChart, Line, useChartPressState} from 'victory-native';
import {useFont} from '@shopify/react-native-skia';
import ActiveValueIndicator from './components/ActiveValueIndicator';
import moment from 'moment';
import measurementStyles from './style';
import {UserContext} from '../../context/UserContext';
import {SvgXml} from 'react-native-svg';
import {Vector1, Vector2, Vector3, Vector4} from '../../assets/svg/iconSVG';
import {mapperMuscleNames} from '../../helper';
import MeasurementLoadingSkeleton from './components/MeasurementLoadingSkeleton';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {AnimatedText} from './components/AnimatedText';

interface MeasurementStatsProps
  extends StackScreenProps<MeasurementStackParamList, 'MeasurementStats'> {}

const MONTHS = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

const formatDate = (ms: number) => {
  'worklet';

  const date = new Date(ms);
  const M = MONTHS[date.getMonth()];
  const D = date.getDate();
  const Y = date.getFullYear();
  return `${M} ${D}, ${Y}`;
};

const MeasurementStatsScreen = ({route, navigation}: MeasurementStatsProps) => {
  const {athlete} = useContext(UserContext);
  const {error, measurementChart, loading, getMeasurementChart, handleLoading} =
    MeasurementViewModel();
  const font = useFont(require('../../assets/fonts/Roboto-Regular.ttf'), 8);
  const muscle = useSharedValue(route.params.data.muscle);
  const {state} = useChartPressState({
    x: 0,
    y: {value: 0},
  });

  useEffect(() => {
    let isMounted = true;
    if (athlete?.athleteId && isMounted) {
      getMeasurementChart(
        athlete?.athleteId!,
        route.params.data.muscle,
        '2024-01-01',
        '2024-12-31',
      );
    }

    return () => {
      isMounted = false;
    };
  }, [route.params.data, athlete?.athleteId]);

  const DATA = useMemo(() => {
    return measurementChart.map(item => {
      return {
        day: new Date(item.time).valueOf(),
        value: item.value,
      };
    });
  }, [measurementChart]);

  const activeDate = useDerivedValue(() => {
    return state.x.value.value > 0
      ? `Fecha: ${formatDate(state.x.value.value)}`
      : 'Fecha: --';
  });
  const activeHigh = useDerivedValue(() => {
    return state.y.value.value.value > 0
      ? `Medida: ${state.y.value.value.value} ${
          muscle.value === 'Weight' ? 'kg' : 'cm'
        }`
      : 'Medida: --';
  });

  useEffect(() => {
    if (DATA.length > 0) {
      handleLoading(false);
    } else {
      handleLoading(true);
    }
  }, [DATA]);

  return (
    <BackgoundComponent>
      <View style={measurementStyles.mainContainer}>
        <HeaderWithBackButton navigation={navigation} />
        {loading ? (
          <MeasurementLoadingSkeleton />
        ) : (
          <>
            <View style={{flex: 0.42}}>
              <Text style={measurementStyles.statsHeaderTitle}>
                {mapperMuscleNames(route.params.data.muscle)}
              </Text>
              <View style={measurementStyles.statsContainer}>
                <View
                  style={{
                    ...measurementStyles.statsContentContainer,
                    backgroundColor: 'rgba(209, 158, 48, 0.2)',
                  }}>
                  <View style={measurementStyles.statsContentFirst}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#FFFFFF',
                      }}>
                      Tu Medida
                    </Text>
                    <SvgXml xml={Vector1} width={60} height={20} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={measurementStyles.statsContentFirstText}>
                      {route.params.data.measurement.toFixed(2)}{' '}
                    </Text>
                    <Text style={measurementStyles.statUnit}>
                      {route.params.data.muscle === 'Weight' ? 'Kg' : 'cm'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    ...measurementStyles.statsContentContainer,
                    backgroundColor: 'rgba(50, 0, 240, 0.2)',
                  }}>
                  <View style={measurementStyles.statsContentFirst}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#FFFFFF',
                      }}>
                      Tu Progreso
                    </Text>
                    <SvgXml xml={Vector2} width={60} height={22} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={measurementStyles.statsContentFirstText}>
                      {route.params.data.progressPercentage.toFixed(2)}{' '}
                    </Text>
                    <Text style={measurementStyles.statUnit}>%</Text>
                  </View>
                </View>
                <View
                  style={{
                    ...measurementStyles.statsContentContainer,
                    backgroundColor: '#0F2411',
                  }}>
                  <View style={measurementStyles.statsContentFirst}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#FFFFFF',
                      }}>
                      Tu Aumento
                    </Text>
                    <SvgXml xml={Vector3} width={60} height={20} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={measurementStyles.statsContentFirstText}>
                      {route.params.data.progress.toFixed(2)}{' '}
                    </Text>
                    <Text style={measurementStyles.statUnit}>
                      {route.params.data.muscle === 'Weight' ? 'Kg' : 'cm'}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    ...measurementStyles.statsContentContainer,
                    backgroundColor: '#111D27',
                  }}>
                  <View style={measurementStyles.statsContentFirst}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: '#FFFFFF',
                      }}>
                      Gráfica
                    </Text>
                    <SvgXml xml={Vector4} width={60} height={20} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <AnimatedText
                      text={activeDate}
                      style={{
                        fontSize: 12,
                        color: '#FFFFFF',
                        height: 26,
                        paddingBottom: 0,
                      }}
                      maxFontSizeMultiplier={1}
                    />
                    <AnimatedText
                      text={activeHigh}
                      style={{
                        fontSize: 12,
                        color: '#FFFFFF',
                        height: 26,
                        paddingBottom: 0,
                      }}
                      maxFontSizeMultiplier={1}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 0.46}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#FFFFFF',
                  paddingVertical: 12,
                }}>
                Workout
              </Text>
              <View style={measurementStyles.graphContainer}>
                {DATA.length > 1 ? (
                  <CartesianChart
                    data={DATA}
                    xKey="day"
                    yKeys={['value']}
                    domainPadding={28}
                    padding={16}
                    chartPressState={state}
                    renderOutside={({chartBounds}) => (
                      <ActiveValueIndicator
                        xPosition={state.x.position}
                        yPosition={state.y.value.position}
                        bottom={chartBounds.bottom}
                        top={chartBounds.top}
                        activeValue={state.y.value.value}
                        textColor={'#FFFFFF'}
                        lineColor={'#FFFFFF'}
                      />
                    )}
                    axisOptions={{
                      font,
                      tickCount: 8,
                      lineColor: 'transparent',
                      labelColor: '#FFFFFF',
                      formatXLabel: ms => moment(new Date(ms)).format('MM/YY'),
                    }}>
                    {({points}) => (
                      <>
                        <Line
                          points={points.value}
                          color="#2A49FF"
                          strokeWidth={3}
                          curveType="natural"
                        />
                      </>
                    )}
                  </CartesianChart>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: '#FFFFFF',
                        paddingHorizontal: 20,
                        textAlign: 'center',
                      }}>
                      No hay suficientes datos para mostrar la gráfica
                    </Text>
                  </View>
                )}
              </View>
              <></>
            </View>
          </>
        )}
      </View>
    </BackgoundComponent>
  );
};

export default MeasurementStatsScreen;

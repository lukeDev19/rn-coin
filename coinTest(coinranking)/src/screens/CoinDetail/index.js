import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import {LineChart} from 'react-native-wagmi-charts';

import {styles} from './styles';
import {colors} from '../../themes';
import {markets, coin} from '../../reduxSaga/stores';
import Statistics from './components/Statistics';
import Markets from './components/Markets';
import {convertChartData} from '../../utils';

const chartItems = ['1D', '1W', '1M', '1Y', '5Y'];

const CoinDetails = ({navigation, route}) => {
  const {item} = route.params;
  const selector = useSelector(state => state.markets);
  const coinSelector = useSelector(state => state.coin);

  const [chartData, setChartData] = useState([]);
  const [periodPrice, setPeriodPrice] = useState('1D');

  const scrollRef = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(markets.actions.getMarkets({uuid: item.uuid, offset: 0}));
    dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '24h'}));
  }, []);

  useEffect(() => {
    if (coinSelector.data && coinSelector.data.length) {
      setChartData(convertChartData(coinSelector.data));
    } else if (coinSelector.errorText) {
      Alert.alert('Coin', coinSelector.errorText);
    }
  }, [coinSelector]);

  const onPressPeriod = index => {
    setPeriodPrice(chartItems[index]);
    switch (chartItems[index]) {
      case '1D':
        dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '24h'}));
        break;
      case '1W':
        dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '7d'}));
        break;
      case '1M':
        dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '30d'}));
        break;
      case '1Y':
        dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '1y'}));
        break;
      case '5Y':
        dispatch(coin.actions.getCoinPriceHistory({uuid: item.uuid, timePeriod: '5y'}));
        break;
    }
  };

  const onScrollTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView ref={scrollRef}>
        <Text style={styles.whiteText}>${item.price}</Text>
        <View style={styles.changeContainer}>
          {item.change > 0 ? (
            <>
              <Ionicons name="caret-up" color={colors.activeGreen} size={20} style={{marginRight: 5}} />
              <Text style={styles.priceUpChangeText}>{item.change}%</Text>
            </>
          ) : (
            <>
              <Ionicons name="caret-down" color={colors.red} size={20} style={{marginRight: 5}} />
              <Text style={styles.priceDownChangeText}>{item.change}%</Text>
            </>
          )}
        </View>
        <View style={styles.chartContainer}>
          {!!chartData.length && !coinSelector.isFetching && (
            <LineChart.Provider data={chartData}>
              <LineChart height={150}>
                <LineChart.Path color={colors.activeGreen} />
                <LineChart.CursorCrosshair color="hotpink">
                  <LineChart.Tooltip style={styles.chartToolTip}>
                    <LineChart.PriceText
                      precision={item.price > 100 ? 4 : 10}
                      format={({value}) => {
                        'worklet';
                        return `$${value}`;
                      }}
                    />
                  </LineChart.Tooltip>
                  <LineChart.Tooltip position="bottom" style={styles.chartToolTip}>
                    <LineChart.DatetimeText />
                  </LineChart.Tooltip>
                </LineChart.CursorCrosshair>
              </LineChart>
            </LineChart.Provider>
          )}
          {coinSelector.isFetching && (
            <View style={styles.chartActivity}>
              <ActivityIndicator />
            </View>
          )}

          <View style={styles.chartLabelContainer}>
            {chartItems.map((item, index) => (
              <View key={`key-${index}`} style={styles.chartLabelItem}>
                <TouchableOpacity
                  style={periodPrice === item ? styles.selectedChartLabelItemBtn : styles.chartLabelItemBtn}
                  onPress={() => onPressPeriod(index)}>
                  <Text style={periodPrice === item ? styles.whiteSmallText : styles.greenText}>{item}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <Statistics item={item} />
        <Markets onScrollTop={onScrollTop} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoinDetails;

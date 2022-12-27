import React, {useEffect, useLayoutEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LineChart} from 'react-native-gifted-charts';
import Ionicons from '@expo/vector-icons/Ionicons';

import {styles} from './styles';
import {colors} from '../../themes';
import {markets} from '../../reduxSaga/stores';
import Statistics from './components/Statistics';
import Markets from './components/Markets';

const chartItems = ['1D', '1W', '1M', '1Y', '5Y'];

const CoinDetails = ({navigation, route}) => {
  const {item} = route.params;
  const selector = useSelector(state => state.markets);

  const [chartData, setChartData] = useState([]);
  const [periodPrice, setPeriodPrice] = useState('1D');
  console.info('selector~~~', selector);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(markets.actions.getMarkets({uuid: item.uuid, offset: 0}));
  }, []);

  useEffect(() => {
    const data = [];
    item.sparkline.forEach((line, index) => {
      data.push({value: parseFloat(line)});
    });
    setChartData(data);
  }, [item]);

  const onPressPeriod = index => {
    setPeriodPrice(chartItems[index]);
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
          <LineChart
            areaChart
            data={chartData}
            curved
            startFillColor="rgb(46, 217, 255)"
            startOpacity={0.8}
            endFillColor="rgb(203, 241, 250)"
            endOpacity={0.3}
            hideDataPoints
            maxValue={Math.max(item.sparkline.map(line => parseFloat(line)).join(','))}
            minValue={Math.min(item.sparkline.map(line => parseFloat(line)).join(','))}
          />
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

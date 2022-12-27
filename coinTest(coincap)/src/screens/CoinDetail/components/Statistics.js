import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {styles} from '../styles';
import {colors} from '../../../themes';

const Statistics = ({item}) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.whiteBoldText}>Coin Statistics</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Rank</Text>
        <Text style={styles.whiteSmallText}>{item.rank}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Market Cap</Text>
        <Text style={styles.whiteSmallText}>${item.marketCapUsd}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>VWAP (24Hr)</Text>
        <Text style={styles.whiteSmallText}>${item.vwap24Hr}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Supply</Text>
        <Text style={styles.whiteSmallText}>{parseInt(item.supply)}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Volume (24Hr)</Text>
        <Text style={styles.whiteSmallText}>${item.volumeUsd24Hr}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Change (24Hr)</Text>
        <View style={styles.coinStatisticsSubItem}>
          {item.changePercent24Hr > 0 ? (
            <>
              <Ionicons name="caret-up" color={colors.activeGreen} size={15} style={{marginRight: 5}} />
              <Text style={styles.priceUpChangeSmallText}>{parseFloat(item.changePercent24Hr).toFixed(2)}%</Text>
            </>
          ) : (
            <>
              <Ionicons name="caret-down" color={colors.red} size={15} style={{marginRight: 5}} />
              <Text style={styles.priceDownChangeSmallText}>{parseFloat(item.changePercent24Hr).toFixed(2)}%</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Statistics;

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
        <Text style={styles.whiteSmallText}>${item.marketCap}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Price</Text>
        <Text style={styles.whiteSmallText}>${item.price}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Volume (24Hr)</Text>
        <Text style={styles.whiteSmallText}>${item['24hVolume']}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.whiteSmallText}>Change (24Hr)</Text>
        <View style={styles.coinStatisticsSubItem}>
          {item.change > 0 ? (
            <>
              <Ionicons name="caret-up" color={colors.activeGreen} size={15} style={{marginRight: 5}} />
              <Text style={styles.priceUpChangeSmallText}>{item.change}%</Text>
            </>
          ) : (
            <>
              <Ionicons name="caret-down" color={colors.red} size={15} style={{marginRight: 5}} />
              <Text style={styles.priceDownChangeSmallText}>{item.change}%</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Statistics;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

const Markets = ({onScrollTop}) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.whiteBoldText}>Available markets</Text>
      {[1, 2, 3].map((item, index) => {
        return (
          <View style={styles.itemContainer} key={`marketItem-${index}`}>
            <Text style={styles.whiteSmallText}>Binance</Text>
            <Text style={styles.whiteSmallText}>MATIC/USDT</Text>
            <Text style={styles.whiteSmallText}>$14m</Text>
          </View>
        );
      })}
      <TouchableOpacity style={styles.itemContainer1}>
        <Text style={styles.greenBoldText}>Load More</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.itemContainer1, {backgroundColor: 'transparent'}]} onPress={onScrollTop}>
        <Text style={styles.greenBoldText}>Back To Top</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Markets;

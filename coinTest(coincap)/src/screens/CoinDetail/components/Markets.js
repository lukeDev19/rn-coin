import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

const Markets = ({onScrollTop, data, onLoadMore}) => {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.whiteBoldText}>Available markets</Text>
      <View style={styles.itemContainer}>
        <Text style={[styles.whiteSmallText1, {fontWeight: 'bold'}]}>Name</Text>
        <Text style={[styles.whiteSmallText2, {fontWeight: 'bold'}]}>Pair</Text>
        <Text style={[styles.whiteSmallText2, {fontWeight: 'bold'}]}>Volume(24Hr)</Text>
      </View>
      {data.map((item, index) => {
        return (
          <View style={styles.itemContainer} key={`marketItem-${index}`}>
            <Text style={styles.whiteSmallText1}>{item.exchangeId}</Text>
            <Text style={styles.whiteSmallText2}>{`${item.baseSymbol} / ${item.quoteSymbol}`}</Text>
            <Text style={styles.whiteSmallText2}>${parseInt(item.volumeUsd24Hr)}</Text>
          </View>
        );
      })}
      <TouchableOpacity style={styles.itemContainer1} onPress={onLoadMore}>
        <Text style={styles.greenBoldText}>Load More</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.itemContainer1, {backgroundColor: 'transparent'}]} onPress={onScrollTop}>
        <Text style={styles.greenBoldText}>Back To Top</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Markets;

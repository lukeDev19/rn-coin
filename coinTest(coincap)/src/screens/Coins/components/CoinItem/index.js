import React, {useRef, useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, Animated} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../../../../themes';
import {styles} from './styles';

const CoinItem = ({item, index, onPress, updatedPrices}) => {
  let hasFile = false;
  let color = colors.primary;
  const [animation, setAnimation] = useState(new Animated.Value(0));
  useEffect(() => {
    if (updatedPrices[item.id]) {
      handleAnimation();
    }
  }, [updatedPrices]);

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    });
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(29,38,51)', 'rgb(12,59,55)'],
  });
  const boxInterDownpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(29,38,51)', 'rgba(200,62,53, 0.9)'],
  });

  return (
    <TouchableOpacity style={styles.coinItemContainer} onPress={onPress}>
      <Animated.View
        style={{
          ...styles.mainContainer,
          backgroundColor: updatedPrices[item.id]
            ? parseFloat(updatedPrices[item.id]) > parseFloat(item.priceUsd)
              ? boxInterpolation
              : boxInterDownpolation
            : 'transparent',
        }}>
        <Image
          source={require(`../../../../../assets/crypto/${hasFile ? item.symbol.toLowerCase() : 'generic'}.png`)}
          style={styles.coinIcon}
        />
        <View style={styles.coinItemInfoContainer}>
          <View>
            <Text style={styles.whiteText}>{item.symbol}</Text>
            <Text style={styles.coinItemNameText}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.whiteText}>${item.priceUsd}</Text>
            <View style={styles.subInfo}>
              {item.changePercent24Hr > 0 ? (
                <>
                  <Ionicons name="caret-up" color={colors.activeGreen} size={10} style={{marginRight: 2}} />
                  <Text style={styles.priceUpChangeText}>{parseFloat(item.changePercent24Hr).toFixed(2)}</Text>
                </>
              ) : (
                <>
                  <Ionicons name="caret-down" color={colors.red} size={10} style={{marginRight: 5}} />
                  <Text style={styles.priceDownChangeText}>{parseFloat(item.changePercent24Hr).toFixed(2)}</Text>
                </>
              )}
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CoinItem;

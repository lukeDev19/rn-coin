import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../../../../themes';
import {styles} from './styles';

const CoinItem = ({item, index, onPress}) => {
  let hasFile = false;

  return (
    <TouchableOpacity style={styles.coinItemContainer} onPress={onPress}>
      {item.iconUrl.includes('.png') ? <Image source={{uri: item.iconUrl}} style={styles.coinIcon} /> : null}
      {item.iconUrl.includes('.svg') ? (
        <Image
          source={require(`../../../../../assets/crypto/${hasFile ? item.symbol.toLowerCase() : 'generic'}.png`)}
          style={styles.coinIcon}
        />
      ) : null}
      <View style={styles.coinItemInfoContainer}>
        <View>
          <Text style={styles.whiteText}>{item.symbol}</Text>
          <Text style={styles.coinItemNameText}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.whiteText}>${item.price}</Text>
          <View style={styles.subInfo}>
            {item.change > 0 ? (
              <>
                <Ionicons name="caret-up" color={colors.activeGreen} size={10} style={{marginRight: 2}} />
                <Text style={styles.priceUpChangeText}>{item.change}</Text>
              </>
            ) : (
              <>
                <Ionicons name="caret-down" color={colors.red} size={10} style={{marginRight: 5}} />
                <Text style={styles.priceDownChangeText}>{item.change}</Text>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinItem;

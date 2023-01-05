import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../../../../themes';
import {styles} from './styles';
import {getCoinIcon} from '../../../../utils';

const CoinItem = ({item, index, onPress}) => {
  const [image, setImage] = useState({uri: getCoinIcon(item.symbol)});

  const onErrorImageLoad = () => {
    setImage(require(`../../../../../assets/crypto/generic.png`));
  };

  return (
    <TouchableOpacity style={styles.coinItemContainer} onPress={onPress}>
      <Image source={image} style={styles.coinIcon} onError={onErrorImageLoad} />
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

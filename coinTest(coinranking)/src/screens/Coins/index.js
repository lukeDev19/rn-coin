import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {View, TouchableOpacity, TextInput, Text, FlatList, ActivityIndicator, Alert} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesomeIcons from '@expo/vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {colors} from '../../themes';
import {SearchInput} from '../../components';
import CoinItem from './components/CoinItem';
import {getCoins} from '../../reduxSaga/apis/coins';
import {coins} from '../../reduxSaga/stores';
import config from '../../config';

const Coins = ({navigation}) => {
  const selector = useSelector(state => state.coins);
  const [search, setSearchText] = useState('');
  const [orderDirection, setOrderDirection] = useState('desc');
  const [orderBy, setOrderBy] = useState('marketCap');
  const dispatch = useDispatch();

  console.info('selector', selector);

  useEffect(() => {
    dispatch(
      coins.actions.getCoins({
        search,
        offset: 0,
        orderDirection,
        orderBy,
      }),
    );
  }, []);

  useEffect(() => {
    if (selector.errorText) {
      Alert.alert('Coin', selector.errorText, [
        {
          onPress: () => {
            dispatch(coins.actions.updateValue({key: 'errorText', value: null}));
          },
        },
      ]);
    }
  }, [selector.errorText]);

  // useEffect(() => {
  //   // CoinRanking doesn't support real-time websockets with the initial account. only available with pro subscription
  //   const pricesWs = new WebSocket(`wss://api.coinranking.com/v2/real-time/rates?x-access-token=${config.accessToken}`);
  //   pricesWs.onmessage = function (msg) {
  //     console.log(msg.data);
  //   };
  // }, []);

  const onSearchCoins = text => {
    setSearchText(text);
    dispatch(
      coins.actions.getCoins({
        search: text,
        offset: 0,
        orderDirection,
        orderBy,
      }),
    );
  };

  const onChangeOrderBy = updatedOrderBy => {
    setOrderBy(updatedOrderBy);
    dispatch(
      coins.actions.getCoins({
        search,
        offset: 0,
        orderDirection,
        orderBy: updatedOrderBy,
      }),
    );
  };

  const onChangeOrderDirection = updatedOrderDirection => {
    setOrderDirection(updatedOrderDirection);
    dispatch(
      coins.actions.getCoins({
        search,
        offset: 0,
        orderDirection: updatedOrderDirection,
        orderBy,
      }),
    );
  };

  const onLoadMore = () => {
    dispatch(
      coins.actions.getMoreCoins({
        search,
        offset: selector.offset,
        orderDirection,
        orderBy,
      }),
    );
  };

  const onPressItem = item => {
    navigation.navigate('CoinDetailScreen', {item});
  };

  const renderItem = ({item, index}) => {
    return <CoinItem item={item} index={index} onPress={() => onPressItem(item, index)} />;
  };

  const renderFooter = () => {
    if (selector.isMoreFetching) {
      return (
        <View style={styles.paginationIndicator}>
          <ActivityIndicator animating color={colors.activeGreen} />
        </View>
      );
    }
    return null;
  };

  const renderSeparator = () => <View style={styles.separatorItem} />;

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <SearchInput
        onSearch={onSearchCoins}
        onChangeOrderBy={onChangeOrderBy}
        orderBy={orderBy}
        onChangeOrderDirection={onChangeOrderDirection}
        orderDirection={orderDirection}
      />
      <View style={styles.mainContainer}>
        {selector.data && !!selector.data.length && (
          <FlatList
            data={selector.data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `key-${index}`}
            ItemSeparatorComponent={renderSeparator}
            ListFooterComponent={renderFooter}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.2}
          />
        )}
      </View>
      {selector.isFetching && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={colors.activeGreen} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Coins;

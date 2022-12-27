import React from 'react';
import {View, TouchableOpacity, Modal, FlatList, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '../../themes';
import {styles} from './styles';

const SortByModal = ({visible, setVisible, onChangeOrderBy, onCloseModal, orderBy}) => {
  const changeOrderBy = key => {
    onChangeOrderBy(key);
    onCloseModal();
  };
  const renderSortByListItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.sortByItem} onPress={() => changeOrderBy(item.key)}>
        <Text style={orderBy === item.key ? styles.greenText1 : styles.greenText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderSortBySeparator = () => <View style={styles.separator} />;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        console.info('Modal has been closed.');
        setVisible(!visible);
      }}>
      <View style={styles.sortByContainer}>
        <View style={styles.sortBySubContainer}>
          <TouchableOpacity onPress={onCloseModal}>
            <Ionicons name="close" color={colors.white} size={30} style={styles.closeSortByIcon} />
          </TouchableOpacity>
          <FlatList
            data={[
              {label: 'Market Cap (Default)', key: 'marketCap'},
              {label: 'Price', key: 'price'},
              {label: 'Volume (24Hr)', key: '24hVolume'},
              {label: 'Change (24Hr)', key: 'change'},
            ]}
            keyExtractor={(item, index) => `${item.key}-${index}`}
            renderItem={renderSortByListItem}
            style={styles.sortByList}
            ItemSeparatorComponent={renderSortBySeparator}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SortByModal;

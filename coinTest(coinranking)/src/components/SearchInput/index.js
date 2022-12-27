import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesomeIcons from '@expo/vector-icons/FontAwesome';
import {styles} from './styles';
import {colors} from '../../themes';
import SortByModal from '../SortByModal';

const SearchInput = ({onSearch, onChangeOrderBy, orderBy, orderDirection, onChangeOrderDirection}) => {
  const [value, setValue] = useState('');
  const [visibleOrderByModal, setVisibleOrderByModal] = useState(false);

  const showOrderByDialog = () => {
    setVisibleOrderByModal(true);
  };

  const onCloseModal = () => {
    setVisibleOrderByModal(false);
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSubContainer}>
        <Ionicons name="search" size={20} color={colors.gray} style={{margin: 10}} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.gray}
          returnKeyType="search"
          onSubmitEditing={() => onSearch(value)}
          onChangeText={text => setValue(text)}
        />
      </View>
      <TouchableOpacity style={styles.sortBtn} onPress={showOrderByDialog}>
        <Text style={styles.grayText}>Sort By</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortBtn}
        onPress={() => onChangeOrderDirection(orderDirection === 'desc' ? 'asc' : 'desc')}>
        {/* <FontAwesomeIcons name="sort-amount-asc" size={15} color={colors.gray} /> */}
        <FontAwesomeIcons
          name={orderDirection === 'desc' ? 'sort-amount-desc' : 'sort-amount-asc'}
          size={15}
          color={colors.gray}
        />
      </TouchableOpacity>
      <SortByModal
        visible={visibleOrderByModal}
        setVisible={setVisibleOrderByModal}
        onCloseModal={onCloseModal}
        onChangeOrderBy={onChangeOrderBy}
        orderBy={orderBy}
      />
    </View>
  );
};

export default SearchInput;

import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';
import { getImageFromId } from '../utils/api';

const keyExtractor = ({ id }) => id.toString();

class CardList extends React.Component {
  renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      image={{
        uri: getImageFromId(id),
      }}
    />
  );

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

export default CardList;

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

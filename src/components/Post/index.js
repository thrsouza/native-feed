import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{data.title}</Text>
      <Text style={styles.headerSubTitle}>{data.author}</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{data.content}</Text>
    </View>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;

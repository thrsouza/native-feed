import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Header from '~/components/Header';
import Post from '~/components/Post';

import postsMock from '~/mock/posts';

import styles from './styles';

export default class Main extends Component {
  state = {
    posts: postsMock,
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

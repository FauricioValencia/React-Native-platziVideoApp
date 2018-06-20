/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Home from './src/screen/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';

import API from './utils/api'
export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount() {
    console.log("ds");
    const movie = await API.getSuggestion(10);
    const categories = await API.getMovies();

    console.log(movie);
    this.setState({
      suggestionList: movie,
      categoryList: categories

    })
  }
  render() {

    return (
      <Home>
        <Header>
          <Text>holis</Text>
        </Header>
        <Text>Buscador</Text>
        <Text>categorias</Text>
        <Text>wasa</Text>
        <CategoryList
          list={this.state.categoryList} />
        <SuggestionList
          list={this.state.suggestionList} />

      </Home>
    );
  }
}



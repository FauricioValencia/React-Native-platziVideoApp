import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../components//suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestions';
class SuggestionList extends Component {

  KeyExtractor = item=> item.id.toString()
  renderEmtpy=()=> <Empty text="no hay sugerencias"/>
  itemSeparator=()=> <Separator/>
  renderItem = ({item}) =>{
    return(

      <Suggestion {...item}/>
    )
  }

  render() {
    return (
      <Layout
      title="Sugerencias para tii"
      >
      <FlatList
        data={this.props.list}
        KeyExtractor={this.KeyExtractor}
        ListEmptyComponent = {()=><Text>No hay componentes en la lista</Text>}
        ListEmptyComponent= {this.renderEmtpy}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}
export default SuggestionList;
import React, { Component } from 'react';
import {
  FlatList,
  Text,View
} from 'react-native';
import Empty from '../components/empty';
import Category from '../components/category';
import Layout from '../components/category-list-layout';
import Separator from '../../sections/components/horizontal-separator';

class CategoryList extends Component {
  KeyExtractor = item=> item.id.toString()
  renderEmtpy=()=> <Empty text="no hay sugerencias"/>
  itemSeparator=()=> <Separator/>
  renderItem = ({item}) =>{
    return(

      <Category {...item}/>
    )
  }

  render(){
    return(
      <Layout
      title="categorias">
      <FlatList
      data={this.props.list}
      KeyExtractor={this.KeyExtractor}
      ListEmptyComponent = {()=><Text>No hay componentes en la lista</Text>}
      ListEmptyComponent= {this.renderEmtpy}
      ItemSeparatorComponent={this.itemSeparator}
      renderItem={this.renderItem}
      horizontal={true}
      />
      </Layout>
    )
  }
}
export default CategoryList;
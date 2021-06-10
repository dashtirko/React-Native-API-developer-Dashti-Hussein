
import React, { Component, useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, FlatList, Text, View, Image, TouchableHighlight, StyleSheet, styles, SafeAreaView } from 'react-native';
import style from './styles';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
const avatar = 'https://images.theconversation.com/files/371975/original/file-20201130-23-1d2z0f6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=517&fit=crop&dpr=1';
import axios from 'axios';
import { Api } from '../ApiUrl';
import { useDispatch } from 'react-redux'
import { BasketIcon } from '../BasketIcon';
import { addToBasket, clearBasket } from '../../redux/store';
const API = (storeId) => `${Api}/stores/${storeId}/items`;
export default function Category({ route, navigation }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(API(route.params.storeId))
      .then(res => {
        setItems(res.data)
      })
  }, [])
  const dispatch = useDispatch()
  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' >
      <View style={style.categoriesItemContainer}>
        <Image style={style.categoriesPhoto} source={{ uri: item.photo_url }} />
        <View style={{}}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ padding: 14 }}>

              <Text style={{ fontSize: 16, color: 'black' }}>{item.ProductName}</Text>
              <Text style={{ fontSize: 20, color: '#000080' }}>{item.price} IQD</Text>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 1, paddingTop: 10 }}>
              <Icon

                raised
                name='shopping-basket'
                type='Fontisto'
                color='#FF5F1F'
                onPress={() => dispatch(addToBasket(item))} />

            </View>
          </View>


        </View>




      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <BasketIcon></BasketIcon>
      <ScrollView>
        {/* <TouchableOpacity onPress={()=> dispatch(clearBasket())}>
          <Text>Clear Basket</Text>
        </TouchableOpacity> */}
        {Object.entries(items.groupBy('category')).map(([category, items]) => {
          return (<View>
            <View style={{ paddingHorizontal: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase' }}>{category} ({items.length})</Text>
            </View>
            <FlatList

              data={items}
              renderItem={renderCategory}
              keyExtractor={item => `${item.id}`}
            />
          </View>)
        })}
      </ScrollView>
    </View>
  )
}

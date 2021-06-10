
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './Screens/Store';
import Catagory from './Screens/Categories/Catagory';
import { Provider } from 'react-redux'
import BasketIcon from './Screens/BasketIcon';
import Card from './Screens/card';
import store from './redux/store'

const Stack = createStackNavigator();

function groupBy(key) {
  return this.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

Array.prototype.groupBy = groupBy
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Shop" component={Store} options={{
            title: "Shop"
          }} />
          <Stack.Screen name="Catagory" component={Catagory} />
          <Stack.Screen name="Card" component={Card} />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default function () {
  return <Provider store={store}>
    <App />
  </Provider>
}

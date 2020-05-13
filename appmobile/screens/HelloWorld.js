import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default HelloWorld;

class HelloWorld extends React.Component {
 constructor(){ //A
    super()
    this.state={
        name:'React Native in action'
    }
 }
 componentDidMount(){ //C
    console.log('mounted...')
 }
 render(){ //B
    return (
        <View style={style.container}>
            <Text>{this.state.name}</Text>
        </View>
    )
 }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
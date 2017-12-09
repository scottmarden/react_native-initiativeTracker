import React from 'react';
import { Button, FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      list: [],
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <TextInput 
            style={styles.nameInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter name"
          />
          <Button 
            style={styles.button}
            onPress={() => {
              let list = this.state.list
              list.push({key: this.state.text})
              this.setState({list: list})
              this.setState({text: ''})
              console.log("*******")
              console.log(this.state.list)
            }}
            title="Enter"
          />
        </View>
        <View style={styles.container}>
          <Text>The List: </Text>
            <FlatList
            data={this.state.list}
            renderItem={({item}) => <Text style={styles.item}> {item.key} </Text>}
            />
            <Button 
              style={styles.button}
              onPress={() => {
                this.setState({list: []})
              }}
              title="Reset"
            />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 50,
    flex: 1,
    backgroundColor: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInput: {
    color: 'blue',
    backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'black',
  },
  item: {
    padding: 10,
    fontSize: 14,
  }

});

import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  
  
  
  
  render(){
    return(
      <View style={styles.container}>
        <Text>App Instagram</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});


export default App;
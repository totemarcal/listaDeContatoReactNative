import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeoppleList from '../component/PeopleList'

export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=20')
    .then(response => {
      const {results} = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render(){
    return (
      <View>
        <PeoppleList peoples={this.state.peoples} 
                     onPressItem={ (people) => {
                         this.props.navigation.navigate('Detalhe da Pessoa',
                         {"people": people})
                     }}
        />
      </View>
    );
  }
 
}
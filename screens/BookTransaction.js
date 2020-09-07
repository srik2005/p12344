import React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity , ToastAndroid } from 'react-native';
import db from '../config'

export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      Title:"",
      Author:"",
      Story:""
    }
  }
  connectbase = () =>{
    db.collection("story").add({
      Title:this.state.Title,
      Author:this.state.Author,
      Story:this.state.Story
    })
    
    this.setState({
      Title:"",
      Author:"",
      Story:""
    });
    ToastAndroid.show("Your story has been submitted",ToastAndroid.SHORT)
  }
    render() {
      

     
        return(
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

            <TextInput style={styles.inputBox}
              placeholder="StoryTitle"
              onChangeText= {(text)=>{ this.setState({Title: text }) }} value={this.state.Title}/>
            <TextInput style={styles.inputBox}
              placeholder="Author"
              onChangeText= {(text)=>{ this.setState({ Author: text }) }} value={this.state.Author}/>
            <TextInput multiline = {true}style={styles.inputBox1}
              placeholder="Story"
              onChangeText= {(text)=>{ this.setState({ Story: text }) }} value={this.state.Story}/>
       <TouchableOpacity
            style={styles.submitButton}
            onPress={this.connectbase}
            
          >
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        );
      }

      
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    },
    inputBox: {
      width: 200,
      height: 50,
      borderWidth: 1.5,
    
      fontSize: 20,
      borderRadius:50,
    },
    submitButton: {
      backgroundColor: "#FBC02D",
      width: 100,
      height: 50
    },
    inputBox1: {
      width: 200,
      height: 200,
      borderWidth: 1.5,
    
      fontSize: 20,
      borderRadius:50,
    },
  });
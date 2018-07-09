import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";

class Input extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Name</Text>
                <Text>Rihab Lamba</Text>
            </View>
        );
    }
}
export default Input;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    },
    label:{
        
    }
    
});
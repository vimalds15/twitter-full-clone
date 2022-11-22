import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HomeScreen = ({navigation}) => {
    useEffect(()=>{
        navigation.setOptions({
            headerTitleAlign:"center",
            headerLeft: () => (
                <Image 
                    style={{height:30,width:30,borderRadius:30,marginLeft:15}}
                    source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
                />
            ),
            headerTitle:()=>(
                <FontAwesome5 name='twitter' size={25} color={'#00acee'} />
            )
        })
    },[])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
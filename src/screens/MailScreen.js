import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import MailCard from '../components/MailCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { ChatData, DummyData } from '../dummydata/DummyData'

const MailScreen = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Messages",
      headerLeft: () => (
        <Image
            style={{height:30,width:30,borderRadius:30,marginLeft:15}}
            source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
        />
    ),headerRight:() =>(
      <MaterialIcons name='settings' color={"white"} size={25} style={{marginRight:15}} />
    ),
    headerStyle:{
      backgroundColor:"black",
      color:"white",
      borderBottomWidth:0,
    },
    headerTitleStyle:{
      color:"white"
    }
    })
  ))
  return (
    <View style={styles.container}>
      {ChatData.map(dat=>
        <MailCard 
        prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} image={dat.image}
        msg={dat.msg} time={dat.time}
        />
        )}
    </View>
  )
}

export default MailScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  }
})
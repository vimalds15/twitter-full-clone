import { StyleSheet, ScrollView, View,Image, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import TweetCard from '../components/TweetCard';
import {DummyData} from '../dummydata/DummyData'

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
            ),
        })
    },[])

  


  return (
    <View style={styles.container}>
        <ScrollView>
        {DummyData.map(dat =>
        <TweetCard 
        prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} image={dat.image}
        tweet={dat.tweet} time={dat.time} like={dat.like}
        rt={dat.rt} reply={dat.reply} 
        />
        )}
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    }
})
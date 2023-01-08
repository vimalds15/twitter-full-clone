import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import SpacesCard from '../components/SpacesCard'
import {SpacesData} from "../dummydata/DummyData"

const SpacesScreen = ({navigation}) => {

  useEffect(()=>
  navigation.setOptions({
    headerTitle:"Spaces",
    headerLeft: () => (
      <Image
          style={{height:30,width:30,borderRadius:30,marginLeft:15}}
          source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
  />),
  headerTitleStyle:{
    color:"white",
    fontWeight:"bold"
  }
})
  ,[])

  const colors= [["rgb(252, 3, 3)"],
                  ["rgb(252, 186, 3)"],
                  ["rgb(3, 252, 190)"],
                  ["rgb(3, 44, 252)"],
                  ["rgb(3, 44, 252)"]]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.subCont}>
        <View style={styles.liveCont}>
          <View style={styles.liveTextCont}>
            <Text style={styles.liveText}>Happening Now</Text>
            <Text style={styles.subText}>Spaces going on right now </Text>
          </View>
          <View style={styles.spacesCont}>
            {SpacesData.map(dat=>
              <SpacesCard 
                key={dat.id}
                title={dat.title} tags={dat.tags} 
                pic1={dat.pic1} pic2={dat.pic2} pic3={dat.pic3}
                hostName={dat.hostName} hostPic={dat.hostPic} 
                listenCount={dat.listenCount} desc={dat.desc}
                color={dat.color} hostColor={dat.hostColor}
              />
              )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SpacesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    padding:15
  },
  liveText:{
    fontSize:20,
    color:"white",
    fontWeight:"bold"
  },
  subText:{
    marginTop:4,
    fontSize:14,
    color:"gray",
    fontWeight:700
  }
})
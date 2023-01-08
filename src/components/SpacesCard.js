import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SpacesCard = ({title,tags,pic1,pic2,pic3,listenCount,hostPic,hostName,desc,color,hostColor}) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:color,padding:15}}>
      <View style={styles.liveHeadCont}>
        <View style={styles.liveCont}>
        <Image
          style={{height:30,width:30,borderRadius:5,resizeMode:"cover"}}
          source={{uri:"https://cutewallpaper.org/cdn-cgi/mirage/dd19f2d06ebc24f541f142b37b4289ffa7de722a7607e39984c5c6dd4ce8defd/1280/21/music-equalizer-gif/Equalizer-by-Alexander-Stets-on-Dribbble.gif"}}/>
            <Text style={styles.liveText}>LIVE</Text>
        </View>
        <View style={styles.menuCont}>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="white"
              size={20}
            />
        </View>
      </View>
      <View style={styles.titleCont}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.tagText}>{tags}</Text>
      </View>
      <View style={styles.listenCont}>
        <View style={styles.imageCont}>
            <Image
          style={{height:30,width:30,borderRadius:30,resizeMode:"cover"}}
          source={{uri:pic1}}/>
            <Image
          style={{height:30,width:30,borderRadius:30,marginLeft:-10,resizeMode:"cover"}}
          source={{uri:pic2}}/>
            <Image
            style={{height:30,width:30,borderRadius:30,marginLeft:-10,resizeMode:"cover"}}
            source={{uri:pic3}}/>
        </View>
        <View>
            <Text style={styles.listenText}>{listenCount} listening</Text>
        </View>
      </View>
      </View>
      <View style={{padding:15,backgroundColor:hostColor}}>
        <View style={styles.hostCont}>
            <Image
                    style={{height:20,width:20,borderRadius:20}}
                    source={{uri:hostPic}}
            />
            <Text style={styles.hostName}>{hostName}</Text>
            <View style={styles.hostTag}>
                <Text style={styles.hostTagText}>Host</Text>
            </View>
        </View>
        <View style={styles.DescCont}>
           <Text style={styles.descText}>{desc} </Text>
        </View>
      </View>
    </View>
  )
}

export default SpacesCard

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        borderRadius:10,
        overflow:"hidden"
        
    },
    subCont:{
        backgroundColor:"rgba(255,255,255,0.9)",
        padding:15,
    },
    liveHeadCont:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,
    },
    liveCont:{
        flexDirection:"row",
        alignItems:"center"
    },
    menuCont:{
        flexDirection:"row",
        alignItems:"center"
    },
    titleCont:{
        marginTop:7,
        marginBottom:10
    },
    imageCont:{
        flexDirection:"row",
        marginRight:15
    },
    listenCont:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
        marginBottom:10
    },
    hostCont:{
        flexDirection:"row",
        marginBottom:10
    },
    hostTag:{
        flex:1,
        backgroundColor:"rgba(214, 212, 214,0.5)",
        maxWidth:40,
        paddingTop:1,
        paddingBottom:1,
        borderRadius:4,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
    },
    hostTagText:{
        color:"white"
    },
    hostName:{
        color:"white",
        fontWeight:"600",
        marginLeft:10,
        },

    liveText:{
        color:"white",
        fontWeight:"bold",
        marginLeft:10
    },
    listenText:{
        color:"white",
    },
    titleText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    tagText:{
        color:"white",
        fontWeight:400
    },
    descText:{
        color:"white"
    }
})
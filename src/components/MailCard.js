import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const MailCard = ({id,name,verified,msg,prof,time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 50, margin: 8 }}
          source={{
            uri: prof,
          }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>{name}</Text>
            {verified&&<MaterialIcons
              name="verified"
              color="white"
              size={20}
            />}
            <Text style={styles.idText}>@{id}</Text>
            <Text style={styles.idText}>· {time}</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="gray"
              size={20}
            />
          </View>
        </View>
        <View style={styles.msgCont}>
          <Text style={styles.msgText}>
            {msg}
          </Text>
        </View>
        </View>
    </View>
  )
}

export default MailCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom:5,
        borderBottomColor:"#2A2E30",
        borderBottomWidth:1,
      },
      rightCont: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: "column",
      },
      nameCont: {
        flexDirection: "row",
      },
      text: {
        color: "white",
      },
      nameText: {
        color: "#E7E9EA",
        fontWeight: "600",
        marginRight: 5,
      },
      idText: {
        marginLeft: 5,
        color: "gray",
      },
      msgText: {
        color: "gray",
      },
      topCont: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      msgCont: {
        paddingRight: 15,
      },
})
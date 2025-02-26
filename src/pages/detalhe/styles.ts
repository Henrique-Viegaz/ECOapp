import { Dimensions, StyleSheet, Pressable, } from "react-native";

const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

export const style = StyleSheet.create({
   container:{
    width: windowWidth,
    height: windowHeight,},

    image:{
    width: windowWidth,
    height: windowHeight,},


    boxBotton:{ 
    position:'absolute',
    bottom: 0,
    width: windowWidth,
    height: windowHeight/2.2,
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    zIndex:10,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    },

    boxPerfil:{
      width:windowWidth-80,
      height:windowHeight/6,
      alignItems:'center',
      marginTop:40,

},
    
    imagebgvei:{
    resizeMode:'cover',
    width:windowWidth-80,
    height:windowHeight/6,
    borderRadius: 12,
    borderWidth:4,
    borderColor:'green'},


    imagevei:{
      width:50,
      height:50,
      borderRadius:50,
      position:'absolute',
      bottom:10,
      left:10,
      borderWidth:2,
      borderColor:'green',},


      titlePerfil:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:8,
        paddingRight:8,
        marginTop:8,},


      textAward:{
        width:'100%',
        paddingLeft:8,},


      btnPerfil:{
       marginTop:20,
       backgroundColor:'green',
       width:140,
       height:35,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:50,},


       btnNotification:{
        zIndex:11,
        position:'absolute',
        right:13,
        top:90,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        borderColor:'green',
        borderWidth:1,
        borderRadius:12,




       },



   
   },




)
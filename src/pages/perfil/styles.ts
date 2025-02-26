import { Dimensions, StyleSheet, Pressable, } from "react-native";

const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

export const style = StyleSheet.create({
   container:{
    width: windowWidth,
    height: windowHeight,},


    boxBotton:{ 
    position:'absolute',
    bottom: 0,
    width: windowWidth,
    height: windowHeight,
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    zIndex:10,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    },

    boxPerfil:{
      width:windowWidth-30,
      height:windowHeight/5,
      alignItems:'center',
      marginTop:75,

},
    
    imagebgvei:{
    resizeMode:'cover',
    width:windowWidth-30,
    height:windowHeight/5,
    borderRadius: 12,
    borderWidth:4,
    borderColor:'green'},


    imagevei:{
      width:80,
      height:80,
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


      textDescription:{
        width:'100%',
        paddingLeft:8,},


      btnPerfil:{
       marginTop:70,
       flexDirection:'row',
       gap:4,
       backgroundColor:'green',
       width:180,
       height:35,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:50,},


      moreInformation:{
        width:'100%',
        height:200,
        marginTop:12,
        paddingLeft:8,




       },

   
   },




)
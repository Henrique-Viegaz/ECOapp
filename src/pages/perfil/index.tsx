

import { style } from "./styles";
import {Text, View, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
import {Entypo, FontAwesome5, Ionicons, Feather } from '@expo/vector-icons'

const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


export default function Perfil ({navigation}: {navigation:any}){
    return (

        <View style={style.container}>
   

        <View style={style.boxBotton}>
              
            <View style={style.boxPerfil}>

              <Pressable style={{zIndex:10,position:'absolute',top:-40,left:0,padding:8,}} onPress={()=>navigation.navigate('Detalhes')}>
                 <Entypo name="chevron-left" size={32} color='black'/>
              </Pressable>

                 <Image style={style.imagebgvei} source={require('../../assets/barracadovei.png')}/>
                 <Image style={style.imagevei} source={require('../../assets/vei.png')}/>
 
        <View style={style.titlePerfil}>           
            <Text style={{fontWeight: '600', fontSize: 14}}>VerdeVida</Text>
            <Text>(12.266.334/0001-90)</Text>
            <Text>☆ 4,9 (1.6k)</Text>
        </View>

        <View style={style.textDescription}>
            <Text style={{width:'60%', fontSize:9, lineHeight:20,}}>Especializada na coleta, reaproveitamento e comercialização de materiais recicláveis.</Text>
        </View>

        <View style={{width:windowWidth-10, height:1, backgroundColor:'gray',marginTop:14,}}></View>

        <View style={style.moreInformation}>
            <View style={{width:'60%', gap:20, }}>
                <View style={{gap:8, flexDirection:'row', alignItems:'center',}}>
                    <FontAwesome5 name='clock' size={25} color='green'/>
                   <Text> <Text style={{color:'green',}}>Aberto</Text>• fecha às 18:00</Text> 
                </View>
                <View style={{gap:8, flexDirection:'row', alignItems:'center',}}>
                    <Entypo name='location' size={25} color='green'/>
                   <Text>R. Teixeira Soares - Timbi Camaragibe - PE, 54768-130</Text> 
                </View>
                <View style={{gap:8, flexDirection:'row', alignItems:'center',}}>
                    <Entypo name='phone' size={25} color='green'/>
                   <Text>(81) 98463-6848</Text> 
                </View>
                <View style={{gap:8, flexDirection:'row', alignItems:'center',}}>
                    <Ionicons name='bag-outline' size={25} color='green'/>
                   <Text>Produtos aceitos: lata, papelão, metal, ferro, cobre, bateria e plásticos. (1kg/R$5)</Text> 
                </View>
            </View>
        </View>

     <Pressable style={style.btnPerfil}>
        <Feather name='message-circle' size={20} color='white'/>
            <Text style={{color:'white'}}>Entre em contato</Text>
            
     </Pressable>
 
 </View>

   

  </View>
  
  
  
   


</View>









)

}
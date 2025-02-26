import React from "react";
import {Text, View, Image, StyleSheet, Dimensions, Pressable} from 'react-native';
import { style } from "./styles";
import {Entypo, FontAwesome6, Ionicons, Feather } from '@expo/vector-icons'



export default function Detalhes ({navigation}: {navigation:any}){
      return (
        
         <View style={style.container}>
             <Image style={[style.image,{resizeMode: 'cover'}]} source={require('../../assets/logo.png')}/>
             <Pressable style={style.btnNotification}> 
                <FontAwesome6 name='bell' size={20} color='black'/>
             </Pressable>

             {/* botao da notificaçao */}

             <View style={{zIndex:20, position:'absolute', right:110, top:250,}}>
                <FontAwesome6 name='location-dot' size={40} color='green'/>
             </View>

         <View style={style.boxBotton}>
          <View style={{width:140, height:2, backgroundColor:'gray',marginTop:12,}}></View>
             <View style={style.boxPerfil}>
            
                <Image style={style.imagebgvei} source={require('../../assets/barracadovei.png')}/>
                <Image style={style.imagevei} source={require('../../assets/vei.png')}/>
          
                <View style={style.titlePerfil}>           
                   <Text style={{fontWeight: '600', fontSize: 14}}>VerdeVida</Text>
                   <Text><Text style={{color:'green',}}>•</Text>  Aberto</Text>
            </View>

            <View style={style.textAward}>
                   <Text>☆ 4,9 (1.6k)</Text>
            </View>

            <Pressable style={style.btnPerfil} onPress={()=>navigation.navigate('Perfil')}>
                <Text style={{color:'white'}}>Ver Perfil</Text>
            </Pressable>


          
          </View>

            

           </View>
           
           
           
            


        </View>

      )


}
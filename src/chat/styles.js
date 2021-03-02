import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const COLOR_THEMA_1 ="#4a1fff";
const COLOR_THEMA_2 ="#ffffff";
const COLOR_TEXT_1 ="#ffffff";
const COLOR_TEXT_2 ="#4a1fff";
const styles = StyleSheet.create({
    container:{
        flex:1,      
        alignItems:"center",
        backgroundColor:"#dde5ff"
 
     
    },  
    imageContainer:{
       marginBottom:hp(5),
       marginTop:hp(10)
     
    },
    labelInputContainer:{
        color:COLOR_THEMA_1,
        fontSize:18,
        marginBottom:hp(1),
        fontWeight:"bold"      
    },
    inputContainer:{
        display:"flex",
        flexDirection:'row',
        backgroundColor:COLOR_THEMA_2,
        alignItems:"center",
        borderRadius:10,

    },
    iconInputContainer:{
       fontSize:30,
       color:COLOR_THEMA_1,
       marginLeft:5,
       marginRight:5
    },  
    inputEnter:{
        width:wp(60),
        height:50,
        color:COLOR_TEXT_2,
     
        
      
    },
    buttonEnter:{
        height:40,
        backgroundColor:COLOR_THEMA_1,
        alignItems:"center",
        justifyContent:"center",     
         borderRadius:10,
         marginTop:hp(2),
      

    },
    textEnterButton:{
        color:"#ffffff"
    }
  


});

export default styles;
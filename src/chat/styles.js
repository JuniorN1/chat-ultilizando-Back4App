import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const COLOR_THEMA_1 ="#4a1fff";
const COLOR_THEMA_2 ="#ffffff";
const COLOR_THEMA_3 ="#ece8ff";
const COLOR_TEXT_1 ="#ffffff";
const COLOR_TEXT_2 ="#4a1fff";
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        width:wp(100),
        height:40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLOR_THEMA_1,


    },
    textHeader:{
        color:COLOR_TEXT_1,
        fontSize:18
    },
    chatStyle:{
        backgroundColor:COLOR_THEMA_3,        


    }
 


});

export default styles;
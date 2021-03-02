import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        backgroundColor:"blue"
    },  
    inputContainer:{
        display:"flex",
        flexDirection:'row',
        backgroundColor:"grey",
        alignItems:"center",
    
    },
    inputEnter:{
        width:500,
        height:50
    }


});

export default styles;
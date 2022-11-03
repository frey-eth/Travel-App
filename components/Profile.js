import React from "react";
import { View,Text ,Button,StyleSheet, Image, ImageBackground} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import colors from "../assets/colors/colors";
import accountData from '../assets/data/accountData'
import backgroundprofile from '../assets/images/backgroundprofile.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Profile = ({navigation})=> {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundprofile} style={styles.imgBackground}>
                <View style={styles.profileBackgroundWrapper}>
                    <Image source={accountData.profileBackground} style={styles.imgProfileBackground}/>
                </View>

                <View style={styles.profileImgWrapper}>
                    <Image source={accountData.profilePicture} style={styles.imgProfilePicture}/>
                    <View style={{alignItems : 'baseline',flexDirection:'row',}}>
                        <Text style={styles.profileName}>{accountData.profileName}</Text>
                        <Ionicons name='ios-checkmark-circle' size={25}></Ionicons>
                    </View>
                </View>

                <View style={styles.infoProfileWrapper}>
                    <View style={styles.profileTextWrapper}>
                            <Text style={styles.profileInfo}>Date of birth:{accountData.dateOfBirth}</Text>
                    </View>

                    <View style={styles.profileTextWrapper}>
                            <Text style={styles.profileInfo}>Location:{accountData.location}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : colors.white
    },
    imgBackground: {
       
        height: '100%'
    },
    profileBackgroundWrapper:{
       marginHorizontal : 20,
       marginTop : 15,
       alignItems : 'center',
       justifyContent : 'flex-start'
    },
    imgProfileBackground:{
        width : 400,
        height: 200,
        borderRadius : 20,
    },
    profileImgWrapper:{
        flex :1,
        marginTop : -80,
        alignItems : 'center',
        marginHorizontal : 20,
    },
    imgProfilePicture: {
        height: 150,
        width: 150,
        borderRadius : 90
    },
    profileName:{
        color: colors.black,
        fontSize : 30,
        fontWeight: 'bold',
    },
    infoProfileWrapper:{
        flex: 1,
        marginHorizontal : 50,
        marginTop: -200
    },
    profileTextWrapper:{
        marginTop : 20,
        backgroundColor: colors.gray,
        borderRadius : 50,
        borderColor : colors.black,
        alignItems : 'center'
    },
    profileInfo: {
        fontSize : 20
    }
}
)

export default Profile
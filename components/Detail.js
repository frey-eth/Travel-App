import React from "react";
import { View,Text ,Button, StyleSheet, Dimensions,Image, ImageBackground} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import Entypo from 'react-native-vector-icons/Entypo'
const height = Dimensions.get('window').height

const Details = ({route,navigation})=> {
    const {item} = route.params
    return (
        <View style ={styles.container}>
            <ImageBackground 
                source={item.imageBig} 
                style={styles.backgroundImage}>
                    <TouchableOpacity
                        style={styles.backIcon}
                        onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={32} color={colors.white}/>
                    </TouchableOpacity>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                            <View style={styles.locationWrapper}>
                                <Entypo name='location' size={40} color={colors.white}/>
                                <Text style={styles.locationText}>{item.location}</Text>
                            </View>
                    </View>
            </ImageBackground>  
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={35} color={'red'}/>
                </View>

                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.duration}</Text>
                            <Text style={styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                </View>

                <View >
                        <TouchableOpacity style={styles.buttonWrapper} onPress={()=>alert('You booked a trip!')}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: colors.white,
    },
    backgroundImage:{
        height: height * 0.6,
        width: '100%',
        justifyContent: 'space-between'
    },
    descriptionWrapper:{
        backgroundColor: colors.white,
        flex: 1,
        marginTop:-20,
        borderRadius: 25,
    },
    backIcon:{
        marginLeft: 20,
        marginTop : 60,
    },
    titleWrapper:{
        marginHorizontal: 20,
        marginBottom :40

    },
    itemTitle:{
        fontSize:32,
        color: colors.white,
        fontWeight: 'bold',
    },
    locationText:{
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    },
    locationWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:5,
    },
    heartWrapper:{
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 64,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper:{
        marginTop : 30,
        marginHorizontal: 20,
    },
    descriptionTitle:{
        fontSize: 24,
        color: colors.black,
        fontWeight: 'bold'
    },
    descriptionText:{
        marginTop : 20,
        fontSize: 16,
        color: colors.darkGray,
        fontWeight: 'bold',
        height : 85
    },
    infoWrapper:{
        flexDirection:'row',
        marginHorizontal : 20,
        justifyContent: 'space-between',
        marginTop : 20
    },
    infoItem:{

    },
    infoTitle:{
        fontSize: 12,
        color: colors.gray,
        fontWeight: 'bold'
    },
    infoTextWrapper:{
        flexDirection:'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    infoText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.orange
    },
    infoSubText:{
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.gray
    },
    buttonWrapper:{
        marginHorizontal : 20,
        marginTop : 40,
        backgroundColor : colors.orange,
        alignItems :'center',
        borderRadius : 20,
        paddingHorizontal: 20,
        
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white
    },
})

export default Details
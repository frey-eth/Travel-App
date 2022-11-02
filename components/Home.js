import React from "react";
import { View,Text, Button,StyleSheet,Image, TouchableHighlight, ImageBackground } from "react-native";
import colors from "../assets/colors/colors";
import discoverData from "../assets/data/discoverData";
import discverCategoriesData from "../assets/data/discoverCategoriesData";
import leanMoreData from "../assets/data/leanMoreData";
import activitiesData from "../assets/data/activitiesData"; 
import Feather from 'react-native-vector-icons/Feather'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import monkey from "../assets/images/monkey.png"
import Entypo from 'react-native-vector-icons/Entypo'

Feather.loadFont()

const Home = ({navigation})=> {
    const renderDiscoverItem = ({item})=>{
        return(
        <TouchableOpacity
            onPress={()=>navigation.navigate('Details',{item:item})}>
            <ImageBackground
                source={item.image}
                style ={[styles.discoverItem,{marginLeft: item.id ==='discover-1'? 17:0}]}
                imageStyle={styles.discoverItemImage}>
                <Text style={styles.discoverItemTitle}>{item.title}</Text>
                <View style ={styles.discoverItemLocationWrapper}>
                    <Entypo name='location' size={18} color={colors.white}/>
                    <Text style={styles.discoverItemLocationText}>{item.location}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
        )
    }

    const renderActivityItem = ({item})=>{
        return(
            <View style={[styles.activityItemWrapper,{marginLeft: item.id =='activities-1'? 17:0}]}>  
                <Image source={item.image} style={styles.activityItemImage}/>
                <Text style={styles.activitiyItemText}>{item.title} </Text>
            </View>
        )
    }

    const renderLearnMoreItem = ({item})=>{
        return (
            <ImageBackground
            source={item.image}
            style={[styles.leanMoreItem, {marginLeft: item.id ==='learnMore-1'? 17:0}]}
            imageStyle={styles.leanMoreItemImage}>
                <Text style={styles.leanMoreItemTitle}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                {/*Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                       <Feather 
                            name="menu" 
                            size={32} 
                            color={colors.black}
                            style = {styles.menuIcon}/>
                        <TextInput
                            style={{backgroundColor:colors.gray,
                                    width:'70%',
                                    borderRadius:15,
                                    }}
                            placeholder='Search'
                            textAlign='center'/>
                       <Image source={monkey} style={styles.profileImage}/>
                    </View>
                </SafeAreaView>

                {/* Discover */}
                <View style={styles.discoverWrapper}>
                    <Text style= {styles.discoverTitle}>Discover</Text>
                    <View style={styles.discoverCategoriesWrapper}>
                        <Text style={[styles.discoverCategoriesText, {color:colors.orange}]}>All</Text>
                        <Text style={styles.discoverCategoriesText}>Destinations</Text>
                        <Text style={styles.discoverCategoriesText}>Cities</Text>
                        <Text style={styles.discoverCategoriesText}>Experiences</Text>
                    </View>
                    <View style={styles.discoverItemsWrapper}>
                        <FlatList
                            data={discoverData}
                            renderItem={renderDiscoverItem}
                            keyExtractor={(item)=>item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}/>
                    </View>
                </View>

                {/* Activities */}
                <View style={styles.activitiesWrapper}>
                    <Text style={styles.activitiesTitle}>Activities</Text>
                    <View style={styles.ActivitiesItemsWrapper}>
                        <FlatList
                            data={activitiesData}
                            renderItem={renderActivityItem}
                            keyExtractor={(item)=>item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}/>
                    </View>
                </View>

                {/* Learn More */}
                <View style={styles.learnMoreWrapper}>
                    <Text style={styles.learnMoreTitle}>Learn More</Text>
                    <View style={styles.learnMoreItemsWrapper}>
                        <FlatList
                            data={leanMoreData}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={(item)=>item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        color: colors.white,
    },
    menuWrapper:{
        marginHorizontal:20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage:{
        width: 50,
        height:50,
        borderRadius: 10,
    },

    discoverWrapper:{
    //  marginHorizontal:20,
     marginTop : 20,
    },
    discoverTitle:{
        marginHorizontal:20,
        fontSize : 30,
    },
    discoverCategoriesWrapper:{
        marginHorizontal:20,
        flexDirection: "row",
        marginTop: 15,

    },
    discoverCategoriesText:{
        marginRight: 30,
        fontSize: 18,
        color: colors.gray
    },
    discoverItem:{
        width:170,
        height:250,
        justifyContent:'flex-end',
        paddingHorizontal:10,
        paddingVertical:15,
        marginRight:20,
    },
    discoverItemsWrapper:{
        paddingVertical: 20,
         
    },
    discoverItemImage:{
        borderRadius:20,

    },
    discoverItemTitle:{
        fontSize:18,
        color : colors.white
    },
    discoverItemLocationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop : 5,
    },
    discoverItemLocationText:{
        marginLeft:5,
        color: colors.white,
        fontSize: 14,
    },
    activitiesWrapper:{
        marginTop: 10,
        color: colors.black,

    },
    activitiesTitle:{
        fontSize: 25,
        marginHorizontal: 20,
    },
    ActivitiesItemsWrapper:{
        paddingHorizontal :15,
    },
    activityItemWrapper:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 25,
    },
    ActivitiesItemImage:{
        width: 36,
    },
    activitiesWrapper:{
        marginTop:10,
    },
    activitiyItemText:{
        marginTop: 5,
        fontSize: 13,
        color: colors.gray
    },
    learnMoreTitle:{
        fontSize: 24,
        marginHorizontal : 20,
    }
    ,
    learnMoreWrapper:{
        marginTop: 10, 
    },
    learnMoreItemsWrapper:{
        paddingVertical: 20,
    },
    leanMoreItem:{
        width:170,
        height: 180,
        justifyContent:'flex-end',
        marginRight : 20,

    },
    leanMoreItemImage:{
        borderRadius: 20,

    },
    leanMoreItemTitle:{
        fontSize: 18,
        color : colors.white,
        marginHorizontal:10,
        marginVertical : 20,
    },

})

export default Home
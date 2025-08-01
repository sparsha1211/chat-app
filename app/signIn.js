import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function signIn() {
  return (
    <View className='flex-1'>
      <StatusBar style='dark'/>
      <View style={{paddingTop:hp(8), paddingHorizontal:wp(5)}} className='flex-1 gap-12'>
        {/* sign in img */}
        <View className='items-center'>
            <Image style={{height: hp(25)}} resizeMode='contain' source={require('../assets/images/login.png')}/>
        </View>
      </View>
    </View>
  )
}
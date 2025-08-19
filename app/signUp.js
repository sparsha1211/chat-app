import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomKeyboradView from '../components/CustomKeyboradView';
import Loading from '../components/Loading';
import { useAuth } from '../context/authContext';

export default function signUp() {
  const router = useRouter();
  const {register} = useAuth();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const userNameRef = useRef('');
  const profileRef = useRef('');

  const handleRegister = async()=> {
    if(!emailRef.current || !passwordRef.current || !userNameRef.current || !profileRef.current) {
      Alert.alert('Sign up', "Please fill all the fields");
      return;
    }
    setLoading(true)

    let response = await register(emailRef.current, passwordRef.current, userNameRef.current, profileRef.current);
    setLoading(false);

    console.log('result is: ', response);
    if(!response.success) {
      Alert.alert("Sign up", response.msg)
    }
  }

  return (
    <CustomKeyboradView>
      <StatusBar style='dark'/>
      <View style={{paddingTop:hp(7), paddingHorizontal:wp(5)}} className='flex-1 gap-12'>
        {/* sign in img */}
        <View className='items-center'>
            <Image style={{height: hp(20)}} resizeMode='contain' source={require('../assets/images/login.png')}/>
        </View>
        <View className='gap-10'>
          <Text style={{fontSize: hp(4)}}className='font-bold text-center text-neutral-800 tracking-wider'>
            Sign Up
          </Text>
          {/* inputs */}
          <View className='gap-4'>

          <View style={{height: hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
            <Feather name='user' size={hp(2.7)} color='gray'/>
            <TextInput 
            onChangeText={val=> userNameRef.current= val}
              style={{fontSize:hp(2)}}
              className='flex-1 font-semibold text-neutral-700'
              placeholder='User name'
              placeholderTextColor={'gray'}
            >

            </TextInput>
          </View>

          <View style={{height: hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
            <Octicons name='mail' size={hp(2.7)} color='gray'/>
            <TextInput 
            onChangeText={val=> emailRef.current= val}
              style={{fontSize:hp(2)}}
              className='flex-1 font-semibold text-neutral-700'
              placeholder='Email address'
              placeholderTextColor={'gray'}
            >

            </TextInput>
          </View>

          <View style={{height: hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
              <Octicons name='lock' size={hp(2.7)} color='gray'/>
              <TextInput 
               onChangeText={val=> passwordRef.current= val}
                style={{fontSize:hp(2)}}
                className='flex-1 font-semibold text-neutral-700'
                placeholder='Password'
                secureTextEntry
                placeholderTextColor={'gray'}
              />
          </View>
          
          <View style={{height: hp(7)}} className='flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl'>
            <Feather name='image'  size={hp(2.7)} color='gray'/>
            <TextInput 
            onChangeText={val=> profileRef.current= val}
              style={{fontSize:hp(2)}}
              className='flex-1 font-semibold text-neutral-700'
              placeholder='Profile URL'
              placeholderTextColor={'gray'}
            >

            </TextInput>
          </View>
          
          {/* submit button */}
          <View>
            {loading? (
              <View className='flex-row justify-center'>
                <Loading size={hp(8)}/>
              </View>
            ): (
              <TouchableOpacity 
                onPress={handleRegister}
                style={{height:hp(6.5)}}
                className='bg-indigo-500 rounded-xl justify-center items-center '
              >
                <Text style={{fontSize:hp(2.7)}} className='text-white font-bold tracking-wider'>
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
          </View>
         

          {/* sign in text */}
          <View className='flex-row justify-center'>
            <Text style={{fontSize:hp(1.8)}} className='font-semibold text-neutral-500'>Already have an account? </Text>
            <Pressable onPress={()=> router.push('signIn')}>
              <Text style={{fontSize:hp(1.8)}} className='font-bold text-indigo-500'>Sign in</Text>
            </Pressable>
            
          </View>
          </View>
          
        </View>
      </View>
    </CustomKeyboradView>
  )
}
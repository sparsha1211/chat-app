import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const ios = Platform.OS == 'ios';
export default function CustomKeyboradView({children}) {
  return (
    <KeyboardAvoidingView 
        behavior={ios?'padding': 'height'}
        style={{flex:1}}
    >
        <ScrollView
            style={{flex:1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
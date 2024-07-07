import React from 'react';
import { View } from 'react-native';

import { GoogleLoginButton } from '@/components/google-login-button';
import { KakaoLoginButton } from '@/components/kakao-login-button';

export const OauthLogin = () => {
  return (
    <View className="flex-1 justify-center p-4">
      <GoogleLoginButton />
      <KakaoLoginButton />
    </View>
  );
};

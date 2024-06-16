import React from 'react';
import { View } from 'react-native';

import { Button } from '@/ui';

export const OauthLogin = () => {
  return (
    <View className="flex-1 justify-center p-4">
      <Button label="구글 로그인" />
      <Button
        label="카카오 로그인"
        onPress={() => {
          console.log('카카오톡 로그인');
        }}
      />
    </View>
  );
};

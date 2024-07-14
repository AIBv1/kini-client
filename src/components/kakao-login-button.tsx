import { Link } from 'expo-router';
import React from 'react';

import { Button } from '@/ui';

export const KakaoLoginButton = () => {
  return (
    <Link href="/kakao-login" asChild>
      <Button label="카카오 로그인" />
    </Link>
  );
};

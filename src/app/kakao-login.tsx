import React from 'react';
import WebView from 'react-native-webview';

import { FocusAwareStatusBar } from '@/ui';

export default function KakaoLogin() {
  return (
    <>
      <FocusAwareStatusBar />
      <WebView
        source={{ uri: 'http://localhost:8000/api/users/login/kakao' }}
      />
    </>
  );
}

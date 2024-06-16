import React from 'react';

import { OauthLogin } from '@/components/oauth-login';
import { FocusAwareStatusBar } from '@/ui';

export default function Login() {
  return (
    <>
      <FocusAwareStatusBar />
      <OauthLogin />
    </>
  );
}

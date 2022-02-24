import React, { useState } from "react";
import { Button, ButtonType } from "@bbki.ng/components";
import { OauthProvider } from "@/types/supabase";
import { supabase } from "@/constants";
import { ArticlePage } from "@/components/article";
import { useSupabaseSession } from "@/hooks/use_supa_session";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const session = useSupabaseSession();
  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <ArticlePage title="第三方账号登录">
      <Button
        type={loading ? ButtonType.DISABLED : ButtonType.PRIMARY}
        className="ml-8"
        onClick={async () => {
          setLoading(true);
          return supabase.auth.signIn({
            provider: OauthProvider.GITHUB,
          });
        }}
      >
        GitHub
      </Button>
    </ArticlePage>
  );
};

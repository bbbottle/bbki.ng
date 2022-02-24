import React from "react";
import { SWRConfig } from "swr";
import { apiFetcher, withToken } from "@/utils";
import { useSupabaseSession } from "@/hooks/use_supa_session";

export const SWR = (props: { children: any }) => {
  const { access_token: token } = useSupabaseSession() || {};
  const authedApiFetcher = withToken(apiFetcher)(token);
  return (
    <SWRConfig
      value={{
        fetcher: authedApiFetcher,
      }}
    >
      {props.children}
    </SWRConfig>
  );
};

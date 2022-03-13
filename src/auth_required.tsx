import React from "react";
import { Navigate } from "react-router-dom";
import { useSupabaseSession } from "@/hooks/use_supa_session";

export const AuthRequired = (props: {
  children: any;
  shouldRedirect?: boolean;
  shouldBeKing?: boolean;
}) => {
  const { access_token: token, isKing } = useSupabaseSession() || {};

  if (!token || (props.shouldBeKing && !isKing)) {
    return props.shouldRedirect ? <Navigate to={"/login"} /> : null;
  }

  return props.children;
};

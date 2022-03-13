import { Session } from "@supabase/supabase-js";

export interface BBKingSession extends Session {
  isKing: boolean;
}

export enum OauthProvider {
  GITHUB = "github",
}

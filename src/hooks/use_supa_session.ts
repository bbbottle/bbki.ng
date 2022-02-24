import { createClient, Session } from "@supabase/supabase-js";
import { SUPABASE } from "@/constants";
import { useEffect, useState } from "react";

export const useSupabaseSession = (): Session | null => {
  const supabase = createClient(SUPABASE.URL, SUPABASE.ANNO);
  const [session, setSession] = useState(supabase.auth.session());
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setSession(session);
      }
    });
  }, []);

  return session;
};

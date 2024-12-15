import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import {

  ThemeSupa,
} from '@supabase/auth-ui-shared'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vwazgspsjbolkvxujtaz.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXpnc3BzamJvbGt2eHVqdGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxOTYxMDIsImV4cCI6MjA0OTc3MjEwMn0.qdYbkjLfLGsn_mPuR-eUJODCoV-Twc6q1IkEjdn49Vg";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const formFields = {
  signUp: {
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 2,
      placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },

  },
};

const AuthProvider = ({ children }: any) => {
  useEffect(() => {

  }, []);

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'github']}
         appearance={{ theme: ThemeSupa }}
        theme="default"
      />
      {}
      {children}
    </div>
  );
};

export default AuthProvider;

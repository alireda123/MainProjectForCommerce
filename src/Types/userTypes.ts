export interface UserDataTypes {
  id: number;
  created_at: string;
  userID: string;
  Firstname: string;
  Surname: string;
  email: string;
  username: string;
  about: null;
  pfp: null;
  gender: string;
  website: null;
}

export interface SupabaseUserTypes {
  id:                   string;
  aud:                  string;
  role:                 string;
  email:                string;
  email_confirmed_at:   string;
  phone:                string;
  confirmation_sent_at: string;
  confirmed_at:         string;
  last_sign_in_at:      string;
  app_metadata:         AppMetadata;
  user_metadata:        UserMetadata;
  identities:           Identity[];
  created_at:           string;
  updated_at:           string;
}

export interface AppMetadata {
  provider:  string;
  providers: string[];
}

export interface Identity {
  id:              string;
  user_id:         string;
  identity_data:   IdentityData;
  provider:        string;
  last_sign_in_at: string;
  created_at:      string;
  updated_at:      string;
}

export interface IdentityData {
  sub: string;
}

export interface UserMetadata {
}

export interface DefinitionType {
  term?: number;
  label?: string;
  pos?: string;
  usage?: string;
  media?: string;
  origin?: string;
  badges?: string[];
}

export interface TermType {
  id?: number;
  label?: string;
  roman?: string;
  created_at?: number;
  updated_at?: number;
}

export interface UserType {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  karma?: number;
  created_at?: number;
  updated_at?: number;
}

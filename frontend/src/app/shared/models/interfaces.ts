export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  bio: string;
  title?: string;
  avatar?: string;
  cv?: string;
  is_available?: boolean;
}

export interface IExperience {
  id: number;
  position: string;
  company: string;
  company_logo?: string;
  start_date: string;
  end_date?: string;
  is_current?: boolean;
  isCurrent?: boolean;
  period?: string;
  description: string;
}

export interface IProject {
  id: number;
  title: string;
  slug: string;
  category?: string;
  description?: string;
  image?: string;
  url?: string;
  link?: string;
  pages_count?: number;
  tags?: string[];
}

export interface IStake {
  id: number;
  name: string;
  description?: string;
  icon?: string;
}

export interface IEducation {
  id: number;
  degree: string;
  school: string;
  start_date: string;
  end_date?: string;
  period?: string;
  description: string;
}

export interface ISocialNetwork {
  id: number;
  name: string;
  url: string;
  icon?: string;
}

export interface ILocation {
  id: number;
  city?: string;
  country?: string;
  full_address?: string;
}

export interface IContact {
  full_name: string;
  email: string;
  phone?: string;
  message: string;
}

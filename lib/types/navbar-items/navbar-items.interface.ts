// Base interface for a NavbarItem
export interface NavbarItem<T = any> {
  active: boolean;
  children?: T;
  href: string;
  label: LanguageLabel;
}

interface AboutUsChildren {
  Timeline: NavbarItem;
}

interface CareersChildren {
  Detail: NavbarItem;
}

interface LanguageLabel {
  en: string;
  es: string;
}

export interface NavbarItems {
  AboutUs: NavbarItem;
  ContactUs: NavbarItem;
  Home: NavbarItem;
  OurCLients: NavbarItem;
  Services: NavbarItem;
}

export interface SkinConfig {
  heroVariant: "video" | "search" | "image" | "simple";
  dividerMotif: "leaf" | "golden-dot" | "line";
  backgroundPattern: "leaf-vine" | "grove" | "none";
  brandName: string;
  tagline: string;
  phone: string;
  address?: string;
  email?: string;
}

const skinConfig: SkinConfig = {
  heroVariant: "search",
  dividerMotif: "line",
  backgroundPattern: "none",
  brandName: "Sydney's Self Storage",
  tagline: "Climate-Controlled Storage in Overland Park",
  phone: "(913) 555-0190",
  address: "9800 Metcalf Ave, Overland Park, KS 66212",
  email: "hello@sydneysselfstorage.com",
};

export default skinConfig;

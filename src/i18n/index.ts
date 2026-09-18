import en from "./en.json";
import vi from "./vi.json";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export type Messages = typeof en;

export const localeMeta: Record<Locale, { label: string; displayCode: string; htmlLang: string }> = {
  en: { label: "English", displayCode: "EN", htmlLang: "en" },
  vi: { label: "Tiếng Việt", displayCode: "VI", htmlLang: "vi" },
};

export const messages: Record<Locale, Messages> = { en, vi };
export const defaultLocale: Locale = "en";

export const isLocale = (value: string | null | undefined): value is Locale =>
  typeof value === "string" && locales.includes(value as Locale);

export const formatVND = (amount: number): string =>
  new Intl.NumberFormat("vi-VN").format(amount) + "đ";

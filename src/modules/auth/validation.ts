export const isCccd = (v: string) => /^\d{12}$/.test(v);
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isVnPhone = (v: string) => /^(0|\+84)\d{9}$/.test(v.replace(/[\s.]/g, ""));

export const passwordRules = (v: string) => ({
  length: v.length >= 8,
  mixed: /[A-Za-z]/.test(v) && /\d/.test(v),
});
export const isStrongPassword = (v: string) => {
  const r = passwordRules(v);
  return r.length && r.mixed;
};

/** "hieu.nguyen@gmail.com" → "hi•••••••n@gmail.com" */
export const maskEmail = (email: string) => {
  const [name, domain] = email.split("@");
  if (!domain || name.length < 3) return email;
  return `${name.slice(0, 2)}${"•".repeat(Math.min(name.length - 3, 8))}${name.slice(-1)}@${domain}`;
};

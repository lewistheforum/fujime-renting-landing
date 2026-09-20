// ponytail: mock auth — every function fakes latency and returns canned results.
// Swap each body for a real fetch() when the API exists; the forms only depend on these signatures.

export type AuthErrorCode =
  | "INVALID_CREDENTIALS"
  | "CCCD_TAKEN"
  | "EMAIL_TAKEN"
  | "EMAIL_NOT_FOUND"
  | "OTP_INVALID";

export type AuthResult = { ok: true } | { ok: false; code: AuthErrorCode };

/** Demo values so every error state can be triggered by hand. */
export const MOCK_OTP = "123456";
const MOCK_UNKNOWN_CCCD = "000000000000";
const MOCK_TAKEN_EMAIL = "taken@fujime.vn";

const wait = (ms = 900) => new Promise((r) => setTimeout(r, ms));

export async function login(cccd: string, password: string): Promise<AuthResult> {
  await wait();
  if (cccd === MOCK_UNKNOWN_CCCD || !password) return { ok: false, code: "INVALID_CREDENTIALS" };
  return { ok: true };
}

export async function register(data: {
  fullName: string;
  cccd: string;
  email: string;
  phone: string;
  password: string;
}): Promise<AuthResult> {
  await wait(1100);
  if (data.cccd === MOCK_UNKNOWN_CCCD) return { ok: false, code: "CCCD_TAKEN" };
  if (data.email.toLowerCase() === MOCK_TAKEN_EMAIL) return { ok: false, code: "EMAIL_TAKEN" };
  return { ok: true };
}

export async function sendOtp(email: string): Promise<AuthResult> {
  await wait();
  if (email.toLowerCase() === MOCK_TAKEN_EMAIL) return { ok: false, code: "EMAIL_NOT_FOUND" };
  return { ok: true };
}

export async function verifyOtp(_email: string, otp: string): Promise<AuthResult> {
  await wait(700);
  return otp === MOCK_OTP ? { ok: true } : { ok: false, code: "OTP_INVALID" };
}

export async function resetPassword(_email: string, _otp: string, _password: string): Promise<AuthResult> {
  await wait();
  return { ok: true };
}

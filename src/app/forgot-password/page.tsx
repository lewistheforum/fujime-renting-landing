import type { Metadata } from "next";
import { ForgotPasswordFlow } from "@/modules/auth/components/forgot-password-flow";

export const metadata: Metadata = {
  title: "Quên mật khẩu | Fujime Renting",
  description: "Đặt lại mật khẩu tài khoản Fujime Renting bằng mã OTP gửi qua email.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordFlow />;
}

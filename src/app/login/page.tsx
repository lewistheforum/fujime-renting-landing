import type { Metadata } from "next";
import { LoginForm } from "@/modules/auth/components/login-form";

export const metadata: Metadata = {
  title: "Đăng nhập | Fujime Renting",
  description: "Đăng nhập tài khoản Fujime Renting để xem đơn thuê máy ảnh và giữ lịch nhận máy tại Đà Nẵng.",
};

export default function LoginPage({ searchParams }: { searchParams: { notice?: string } }) {
  const notice = searchParams.notice === "registered" || searchParams.notice === "password-reset" ? searchParams.notice : undefined;
  return <LoginForm notice={notice} />;
}

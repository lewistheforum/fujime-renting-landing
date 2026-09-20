import type { Metadata } from "next";
import { RegisterForm } from "@/modules/auth/components/register-form";

export const metadata: Metadata = {
  title: "Đăng ký | Fujime Renting",
  description: "Tạo tài khoản Fujime Renting để đặt thuê máy ảnh Fujifilm và studio tại Đà Nẵng nhanh hơn.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}

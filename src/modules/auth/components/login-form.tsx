"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site-config";
import { login } from "../auth-service";
import { isCccd } from "../validation";
import { AuthShell } from "./auth-shell";
import { CccdField, FormAlert, PasswordField, SubmitButton, linkClass, useT } from "./auth-fields";

export function LoginForm({ notice }: { notice?: "registered" | "password-reset" }) {
  const t = useT();
  const router = useRouter();
  const [cccd, setCccd] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ cccd?: string; password?: string }>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = {
      cccd: !cccd
        ? t("Nhập số CCCD của bạn.", "Enter your citizen ID number.")
        : !isCccd(cccd)
          ? t("Số CCCD gồm đúng 12 chữ số.", "Citizen ID must be exactly 12 digits.")
          : undefined,
      password: !password ? t("Nhập mật khẩu.", "Enter your password.") : undefined,
    };
    setErrors(next);
    setFormError("");
    if (next.cccd || next.password) return;

    setLoading(true);
    const res = await login(cccd, password);
    setLoading(false);
    if (!res.ok) {
      setFormError(
        t(
          "Số CCCD hoặc mật khẩu chưa đúng. Kiểm tra lại, hoặc đặt lại mật khẩu nếu bạn quên.",
          "Citizen ID or password is incorrect. Check again, or reset your password if you forgot it.",
        ),
      );
      return;
    }
    router.push("/products");
  };

  return (
    <AuthShell
      recipeId="classic-chrome"
      title={t("Chào mừng bạn", "Welcome")}
      titleAccent={t("quay lại", "back")}
      description={t(
        "Đăng nhập để xem lại đơn thuê, giữ lịch nhận máy và nhận ưu đãi thuê dài ngày.",
        "Log in to check your rentals, hold pickup slots and get multi-day discounts.",
      )}
      footer={
        <div className="flex flex-col gap-3">
          <p>
            {t("Chưa có tài khoản?", "New to Fujime?")}{" "}
            <Link href="/register" className={linkClass}>
              {t("Tạo tài khoản mới", "Create an account")}
            </Link>
          </p>
          <a
            href={SITE_CONFIG.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] hover:text-text-primary transition-colors w-fit"
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent-terracotta" aria-hidden="true" />
            {t("Không đăng nhập được? Nhắn Zalo tiệm hỗ trợ", "Trouble logging in? Message us on Zalo")}
          </a>
        </div>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {notice && !formError && (
          <FormAlert tone="success">
            {notice === "registered"
              ? t("Tạo tài khoản thành công. Đăng nhập để bắt đầu thuê máy nhé!", "Account created. Log in to start renting!")
              : t("Đã cập nhật mật khẩu mới. Đăng nhập lại bằng mật khẩu vừa đặt.", "Password updated. Log in with your new password.")}
          </FormAlert>
        )}
        {formError && <FormAlert>{formError}</FormAlert>}

        <CccdField
          label={t("Số CCCD", "Citizen ID (CCCD)")}
          value={cccd}
          onValueChange={setCccd}
          error={errors.cccd}
          autoFocus
        />

        <div>
          <PasswordField
            label={t("Mật khẩu", "Password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            autoComplete="current-password"
          />
          <div className="mt-3 flex items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-[13px] text-text-muted cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded accent-accent-terracotta cursor-pointer"
              />
              {t("Ghi nhớ đăng nhập", "Remember me")}
            </label>
            <Link href="/forgot-password" className={`text-[13px] ${linkClass}`}>
              {t("Quên mật khẩu?", "Forgot password?")}
            </Link>
          </div>
        </div>

        <SubmitButton loading={loading}>
          {loading ? t("Đang đăng nhập…", "Logging in…") : t("Đăng nhập", "Log in")}
        </SubmitButton>
      </form>
    </AuthShell>
  );
}

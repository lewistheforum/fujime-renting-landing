"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "../auth-service";
import { isCccd, isEmail, isStrongPassword, isVnPhone } from "../validation";
import { AuthShell } from "./auth-shell";
import {
  CccdField,
  Field,
  FormAlert,
  PasswordChecklist,
  PasswordField,
  SubmitButton,
  linkClass,
  useT,
} from "./auth-fields";

type Errors = Partial<Record<"fullName" | "cccd" | "email" | "phone" | "password" | "confirm" | "terms", string>>;

export function RegisterForm() {
  const t = useT();
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", cccd: "", email: "", phone: "", password: "", confirm: "" });
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = (): Errors => ({
    fullName: form.fullName.trim().length < 2 ? t("Nhập họ và tên như trên CCCD.", "Enter your full name as on your ID.") : undefined,
    cccd: !isCccd(form.cccd) ? t("Số CCCD gồm đúng 12 chữ số.", "Citizen ID must be exactly 12 digits.") : undefined,
    email: !isEmail(form.email) ? t("Email chưa đúng định dạng, ví dụ: ban@gmail.com", "Enter a valid email, e.g. you@gmail.com") : undefined,
    phone: !isVnPhone(form.phone) ? t("Số điện thoại gồm 10 số, bắt đầu bằng 0.", "Phone number must be 10 digits starting with 0.") : undefined,
    password: !isStrongPassword(form.password) ? t("Mật khẩu chưa đạt yêu cầu bên dưới.", "Password doesn't meet the rules below.") : undefined,
    confirm: form.confirm !== form.password || !form.confirm ? t("Mật khẩu nhập lại chưa khớp.", "Passwords don't match.") : undefined,
    terms: !terms ? t("Bạn cần xác nhận thông tin để tiếp tục.", "Please confirm your details to continue.") : undefined,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    setFormError("");
    if (Object.values(next).some(Boolean)) return;

    setLoading(true);
    const res = await register({ ...form, email: form.email.trim(), fullName: form.fullName.trim() });
    setLoading(false);
    if (!res.ok) {
      if (res.code === "CCCD_TAKEN") setErrors({ cccd: t("Số CCCD này đã có tài khoản. Thử đăng nhập nhé.", "This ID already has an account. Try logging in.") });
      else if (res.code === "EMAIL_TAKEN") setErrors({ email: t("Email này đã được dùng cho tài khoản khác.", "This email is already in use.") });
      else setFormError(t("Chưa tạo được tài khoản. Thử lại sau ít phút nhé.", "Couldn't create your account. Please try again shortly."));
      return;
    }
    router.push("/login?notice=registered");
  };

  return (
    <AuthShell
      recipeId="astia-soft"
      title={t("Tạo tài khoản", "Create your")}
      titleAccent={t("thuê máy", "rental account")}
      description={t(
        "Đăng ký một lần, lần sau đặt máy chỉ cần chọn ngày. Thông tin CCCD dùng để xác minh khi bạn nhận máy tại tiệm.",
        "Sign up once and future bookings only need dates. Your ID is used to verify you when picking up gear.",
      )}
      footer={
        <p>
          {t("Đã có tài khoản?", "Already have an account?")}{" "}
          <Link href="/login" className={linkClass}>
            {t("Đăng nhập", "Log in")}
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {formError && <FormAlert>{formError}</FormAlert>}

        <Field
          label={t("Họ và tên", "Full name")}
          value={form.fullName}
          onChange={set("fullName")}
          error={errors.fullName}
          autoComplete="name"
          placeholder={t("Nguyễn Minh Anh", "Nguyen Minh Anh")}
          autoFocus
        />

        <CccdField
          label={t("Số CCCD", "Citizen ID (CCCD)")}
          value={form.cccd}
          onValueChange={(cccd) => setForm((f) => ({ ...f, cccd }))}
          error={errors.cccd}
          hint={t("12 số in trên thẻ căn cước gắn chip.", "The 12 digits printed on your chip ID card.")}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={set("email")}
            error={errors.email}
            autoComplete="email"
            placeholder="ban@gmail.com"
          />
          <Field
            label={t("Số điện thoại", "Phone")}
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            error={errors.phone}
            autoComplete="tel"
            inputMode="tel"
            placeholder="0905 123 456"
            className="font-mono"
          />
        </div>

        <PasswordField
          label={t("Mật khẩu", "Password")}
          value={form.password}
          onChange={set("password")}
          error={errors.password}
          autoComplete="new-password"
        />
        <PasswordChecklist value={form.password} />

        <PasswordField
          label={t("Nhập lại mật khẩu", "Confirm password")}
          value={form.confirm}
          onChange={set("confirm")}
          error={errors.confirm}
          autoComplete="new-password"
        />

        <div>
          <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-text-muted cursor-pointer select-none">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              aria-invalid={!!errors.terms}
              className="mt-0.5 w-4 h-4 shrink-0 rounded accent-accent-terracotta cursor-pointer"
            />
            <span>
              {t(
                "Mình xác nhận thông tin trên là chính xác và đồng ý để tiệm dùng số CCCD để xác minh khi nhận máy.",
                "I confirm these details are correct and agree that the shop uses my ID to verify me at pickup.",
              )}
            </span>
          </label>
          {errors.terms && <p className="mt-1.5 pl-[26px] text-xs text-orange-deep">{errors.terms}</p>}
        </div>

        <SubmitButton loading={loading}>
          {loading ? t("Đang tạo tài khoản…", "Creating account…") : t("Tạo tài khoản", "Create account")}
        </SubmitButton>
      </form>
    </AuthShell>
  );
}

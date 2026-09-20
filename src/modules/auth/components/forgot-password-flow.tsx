"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { MOCK_OTP, resetPassword, sendOtp, verifyOtp } from "../auth-service";
import { isEmail, isStrongPassword, maskEmail } from "../validation";
import { AuthShell } from "./auth-shell";
import {
  Field,
  FormAlert,
  OtpInput,
  PasswordChecklist,
  PasswordField,
  SubmitButton,
  linkClass,
  useT,
} from "./auth-fields";

type Step = "email" | "otp" | "password";
const STEPS: Step[] = ["email", "otp", "password"];
const RESEND_SECONDS = 60;

export function ForgotPasswordFlow() {
  const t = useT();
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<{ field?: string; confirm?: string; form?: string }>({});
  const [loading, setLoading] = useState(false);
  const [resendIn, setResendIn] = useState(0);

  useEffect(() => {
    if (resendIn <= 0) return;
    const id = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [resendIn]);

  const goTo = (next: Step) => {
    setError({});
    setStep(next);
  };

  const requestOtp = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!isEmail(email)) {
      setError({ field: t("Email chưa đúng định dạng, ví dụ: ban@gmail.com", "Enter a valid email, e.g. you@gmail.com") });
      return;
    }
    setLoading(true);
    setError({});
    const res = await sendOtp(email.trim());
    setLoading(false);
    if (!res.ok) {
      setError({ field: t("Email này chưa gắn với tài khoản nào. Kiểm tra lại, hoặc tạo tài khoản mới.", "No account uses this email. Check it, or create a new account.") });
      return;
    }
    setOtp("");
    setResendIn(RESEND_SECONDS);
    goTo("otp");
  };

  const submitOtp = async (code = otp) => {
    if (code.length < 6) {
      setError({ field: t("Nhập đủ 6 số trong email.", "Enter all 6 digits from the email.") });
      return;
    }
    setLoading(true);
    setError({});
    const res = await verifyOtp(email, code);
    setLoading(false);
    if (!res.ok) {
      setError({ field: t("Mã chưa đúng hoặc đã hết hạn. Kiểm tra lại email, hoặc gửi mã mới.", "That code is wrong or expired. Check your email, or send a new code.") });
      return;
    }
    goTo("password");
  };

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStrongPassword(password)) {
      setError({ field: t("Mật khẩu chưa đạt yêu cầu bên dưới.", "Password doesn't meet the rules below.") });
      return;
    }
    if (confirm !== password) {
      setError({ confirm: t("Mật khẩu nhập lại chưa khớp.", "Passwords don't match.") });
      return;
    }
    setLoading(true);
    setError({});
    const res = await resetPassword(email, otp, password);
    setLoading(false);
    if (!res.ok) {
      setError({ form: t("Chưa cập nhật được mật khẩu. Thử lại sau ít phút nhé.", "Couldn't update your password. Please try again shortly.") });
      return;
    }
    router.push("/login?notice=password-reset");
  };

  const copy = {
    email: {
      title: t("Quên", "Forgot your"),
      accent: t("mật khẩu?", "password?"),
      description: t(
        "Không sao cả. Nhập email bạn đã đăng ký, tụi mình gửi mã xác nhận 6 số để bạn đặt lại mật khẩu.",
        "No worries. Enter the email on your account and we'll send a 6-digit code to reset your password.",
      ),
    },
    otp: {
      title: t("Kiểm tra", "Check your"),
      accent: t("hộp thư", "inbox"),
      description: (
        <>
          {t("Mã 6 số vừa được gửi tới ", "We sent a 6-digit code to ")}
          <span className="font-mono text-text-primary">{maskEmail(email)}</span>
          {t(". Mã có hiệu lực trong 10 phút.", ". It's valid for 10 minutes.")}
        </>
      ),
    },
    password: {
      title: t("Đặt", "Set a"),
      accent: t("mật khẩu mới", "new password"),
      description: t(
        "Chọn một mật khẩu bạn dễ nhớ nhưng người khác khó đoán.",
        "Pick something easy for you to remember and hard for others to guess.",
      ),
    },
  }[step];

  const stepIndex = STEPS.indexOf(step);
  const stepLabels = [t("Email", "Email"), t("Mã OTP", "Code"), t("Mật khẩu mới", "New password")];

  return (
    <AuthShell
      recipeId="nostalgic-neg"
      title={copy.title}
      titleAccent={copy.accent}
      description={copy.description}
      footer={
        <Link href="/login" className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          {t("Quay lại đăng nhập", "Back to log in")}
        </Link>
      }
    >
      {/* Step tracker — the order matters, so steps are numbered */}
      <ol className="grid grid-cols-3 gap-2 -mt-1 mb-7" aria-label={t("Các bước đặt lại mật khẩu", "Reset steps")}>
        {stepLabels.map((label, i) => {
          const done = i < stepIndex;
          const active = i === stepIndex;
          return (
            <li key={label} aria-current={active ? "step" : undefined} className="flex flex-col gap-2">
              <span
                className={`h-1 rounded-full transition-colors duration-500 ${
                  done ? "bg-accent-sage" : active ? "bg-accent-terracotta" : "bg-surface-raised"
                }`}
              />
              <span
                className={`flex items-center gap-1.5 text-xs ${
                  active ? "text-text-primary font-semibold" : done ? "text-[#5F6E4E]" : "text-text-muted"
                }`}
              >
                {done ? (
                  <Check className="w-3 h-3" strokeWidth={3} aria-hidden="true" />
                ) : (
                  <span className="font-mono text-[11px]">{i + 1}</span>
                )}
                {label}
              </span>
            </li>
          );
        })}
      </ol>

      <div key={step} className="motion-safe:animate-auth-step-in">
        {step === "email" && (
          <form onSubmit={requestOtp} noValidate className="flex flex-col gap-5">
            <Field
              label={t("Email đã đăng ký", "Account email")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error.field}
              autoComplete="email"
              placeholder="ban@gmail.com"
              autoFocus
            />
            <SubmitButton loading={loading}>
              {loading ? t("Đang gửi mã…", "Sending code…") : t("Gửi mã xác nhận", "Send code")}
            </SubmitButton>
          </form>
        )}

        {step === "otp" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitOtp();
            }}
            noValidate
            className="flex flex-col gap-5"
          >
            <div>
              <OtpInput
                value={otp}
                onChange={(v) => {
                  setOtp(v);
                  if (error.field) setError({});
                }}
                onComplete={submitOtp}
                invalid={!!error.field}
                disabled={loading}
              />
              {error.field && (
                <p role="alert" className="mt-2.5 text-xs leading-relaxed text-orange-deep">
                  {error.field}
                </p>
              )}
              {process.env.NODE_ENV !== "production" && (
                <p className="mt-2.5 text-xs text-text-muted">
                  {t("Bản demo: mã đúng là", "Demo: the valid code is")}{" "}
                  <span className="font-mono text-text-primary">{MOCK_OTP}</span>
                </p>
              )}
            </div>

            <SubmitButton loading={loading}>
              {loading ? t("Đang kiểm tra…", "Checking…") : t("Xác nhận mã", "Verify code")}
            </SubmitButton>

            <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-text-muted">
              <button type="button" onClick={() => goTo("email")} className={`${linkClass} cursor-pointer`}>
                {t("Đổi email khác", "Use another email")}
              </button>
              {resendIn > 0 ? (
                <span aria-live="polite">
                  {t("Gửi lại mã sau", "Resend in")}{" "}
                  <span className="font-mono text-text-primary tabular-nums">
                    0:{String(resendIn).padStart(2, "0")}
                  </span>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => requestOtp()}
                  disabled={loading}
                  className={`${linkClass} cursor-pointer disabled:opacity-60`}
                >
                  {t("Gửi lại mã", "Resend code")}
                </button>
              )}
            </div>
          </form>
        )}

        {step === "password" && (
          <form onSubmit={submitPassword} noValidate className="flex flex-col gap-5">
            {error.form && <FormAlert>{error.form}</FormAlert>}
            <PasswordField
              label={t("Mật khẩu mới", "New password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error.field}
              autoComplete="new-password"
              autoFocus
            />
            <PasswordChecklist value={password} />
            <PasswordField
              label={t("Nhập lại mật khẩu mới", "Confirm new password")}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              error={error.confirm}
              autoComplete="new-password"
            />
            <SubmitButton loading={loading}>
              {loading ? t("Đang cập nhật…", "Updating…") : t("Cập nhật mật khẩu", "Update password")}
            </SubmitButton>
          </form>
        )}
      </div>
    </AuthShell>
  );
}

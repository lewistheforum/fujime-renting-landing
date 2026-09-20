"use client";

import { useId, useRef, useState } from "react";
import { AlertCircle, Check, Eye, EyeOff, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { passwordRules } from "../validation";

export const linkClass =
  "font-medium text-accent-terracotta underline-offset-4 decoration-accent-terracotta/40 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-terracotta rounded-sm";

export function useT() {
  const { locale } = useLanguage();
  return (vi: string, en: string) => (locale === "vi" ? vi : en);
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  trailing?: React.ReactNode;
}

export function Field({ label, error, hint, trailing, className = "", ...input }: FieldProps) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-text-primary mb-1.5">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`input-editorial caret-accent-terracotta ${trailing ? "pr-12" : ""} ${
            error ? "!border-orange-deep" : ""
          } ${className}`}
          {...input}
        />
        {trailing && <div className="absolute inset-y-0 right-1.5 flex items-center">{trailing}</div>}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-xs text-orange-deep">
          <AlertCircle className="w-3.5 h-3.5 mt-px shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="mt-1.5 text-xs text-text-muted">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

export function PasswordField(props: Omit<FieldProps, "type" | "trailing">) {
  const t = useT();
  const [visible, setVisible] = useState(false);

  return (
    <Field
      {...props}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-raised/70 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-terracotta"
          aria-label={visible ? t("Ẩn mật khẩu", "Hide password") : t("Hiện mật khẩu", "Show password")}
        >
          {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      }
    />
  );
}

/** Digits-only CCCD input with a live 0/12 counter. */
export function CccdField(props: Omit<FieldProps, "onChange" | "value"> & { value: string; onValueChange: (v: string) => void }) {
  const { value, onValueChange, ...rest } = props;
  return (
    <Field
      {...rest}
      value={value}
      onChange={(e) => onValueChange(e.target.value.replace(/\D/g, "").slice(0, 12))}
      inputMode="numeric"
      autoComplete="username"
      placeholder="0xx xxx xxx xxx"
      className="font-mono tracking-[0.08em]"
      trailing={
        <span className={`pr-2.5 font-mono text-[11px] ${value.length === 12 ? "text-accent-sage" : "text-text-muted"}`}>
          {value.length}/12
        </span>
      }
    />
  );
}

export function PasswordChecklist({ value }: { value: string }) {
  const t = useT();
  const rules = passwordRules(value);
  const items = [
    { ok: rules.length, label: t("Ít nhất 8 ký tự", "At least 8 characters") },
    { ok: rules.mixed, label: t("Có cả chữ và số", "Letters and numbers") },
  ];

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 -mt-1" aria-label={t("Yêu cầu mật khẩu", "Password requirements")}>
      {items.map((item) => (
        <li
          key={item.label}
          className={`inline-flex items-center gap-1.5 text-xs transition-colors ${
            item.ok ? "text-[#5F6E4E]" : "text-text-muted"
          }`}
        >
          <span
            className={`grid place-items-center w-3.5 h-3.5 rounded-full border transition-colors ${
              item.ok ? "bg-accent-sage border-accent-sage text-white" : "border-border-subtle"
            }`}
            aria-hidden="true"
          >
            {item.ok && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
          </span>
          {item.label}
          <span className="sr-only">{item.ok ? t("(đạt)", "(met)") : t("(chưa đạt)", "(not met)")}</span>
        </li>
      ))}
    </ul>
  );
}

export function FormAlert({ tone = "error", children }: { tone?: "error" | "success"; children: React.ReactNode }) {
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-sm leading-relaxed ${
        tone === "error"
          ? "border-orange-deep/25 bg-orange-deep/[0.06] text-orange-deep"
          : "border-accent-sage/50 bg-accent-sage/15 text-[#4A5A3B]"
      }`}
    >
      {tone === "error" ? (
        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
      ) : (
        <Check className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
      )}
      <div>{children}</div>
    </div>
  );
}

export function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={loading}
      aria-busy={loading}
      className="btn-primary-terracotta w-full py-3.5 cursor-pointer disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-terracotta"
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

/** Six single-digit boxes; supports paste, backspace-to-previous and arrow keys. */
export function OtpInput({
  value,
  onChange,
  onComplete,
  invalid,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  onComplete?: (v: string) => void;
  invalid?: boolean;
  disabled?: boolean;
}) {
  const t = useT();
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length: 6 }, (_, i) => value[i] ?? "");

  const commit = (next: string, focusIndex: number) => {
    onChange(next);
    refs.current[Math.min(focusIndex, 5)]?.focus();
    if (next.length === 6) onComplete?.(next);
  };

  return (
    <div className="flex justify-between gap-2 sm:gap-2.5" role="group" aria-label={t("Mã OTP 6 số", "6-digit code")}>
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={digit}
          disabled={disabled}
          autoFocus={i === 0}
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          aria-label={t(`Số thứ ${i + 1}`, `Digit ${i + 1}`)}
          aria-invalid={invalid}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            const typed = e.target.value.replace(/\D/g, "");
            if (!typed) return;
            // Typing (or autofill) at position i overwrites from there on
            const next = (value.slice(0, i) + typed).slice(0, 6);
            commit(next, i + typed.length);
          }}
          onPaste={(e) => {
            e.preventDefault();
            const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
            if (pasted) commit(pasted, pasted.length);
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              e.preventDefault();
              const at = digit ? i : i - 1;
              if (at < 0) return;
              onChange(value.slice(0, at));
              refs.current[at]?.focus();
            } else if (e.key === "ArrowLeft") refs.current[i - 1]?.focus();
            else if (e.key === "ArrowRight") refs.current[i + 1]?.focus();
          }}
          className={`w-full min-w-0 aspect-[5/6] max-w-14 rounded-xl border bg-surface text-center font-mono text-xl sm:text-2xl font-bold text-text-primary caret-accent-terracotta transition-[border-color,box-shadow,background-color] focus:outline-none focus:border-accent-terracotta focus:shadow-[0_0_0_3px_rgba(185,104,77,0.15)] disabled:opacity-60 ${
            invalid
              ? "border-orange-deep bg-orange-deep/[0.04]"
              : digit
                ? "border-text-muted/60"
                : "border-border-subtle"
          }`}
        />
      ))}
    </div>
  );
}

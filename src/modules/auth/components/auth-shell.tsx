"use client";

import { MapPin } from "lucide-react";
import { VERIFIED_FILM_RECIPES } from "@/constants/homepage-data";
import { useT } from "./auth-fields";

interface AuthShellProps {
  title: string;
  /** Phrase set in italic terracotta after the title, like the homepage hero */
  titleAccent?: string;
  description: React.ReactNode;
  /** Which real film-recipe photo frames this page */
  recipeId: string;
  children: React.ReactNode;
  /** Sits under the form card: switch-page links, help */
  footer?: React.ReactNode;
}

export function AuthShell({ title, titleAccent, description, recipeId, children, footer }: AuthShellProps) {
  const t = useT();
  const recipe = VERIFIED_FILM_RECIPES.find((r) => r.id === recipeId) ?? VERIFIED_FILM_RECIPES[0];

  return (
    <main className="pt-24 sm:pt-28 pb-28 sm:pb-24">
      <div className="container-editorial grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 xl:gap-20 items-center">
        {/* Form column */}
        <section className="w-full max-w-[440px] mx-auto lg:mx-0 lg:justify-self-end">
          <div className="card-surface p-6 sm:p-9 rounded-2xl shadow-sm">
            <h1 className="font-display font-semibold text-[1.875rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] text-text-primary text-balance">
              {title}
              {titleAccent && <span className="italic font-normal text-accent-terracotta"> {titleAccent}</span>}
            </h1>
            <div className="mt-2.5 text-sm leading-relaxed text-text-muted">{description}</div>
            <div className="mt-7">{children}</div>
          </div>
          {footer && <div className="mt-5 pl-1 pr-14 sm:pr-1 text-sm text-text-muted">{footer}</div>}
        </section>

        {/* Photo column — same frame language as the homepage 3D viewer */}
        <aside className="hidden lg:block w-full max-w-[500px] self-start sticky top-28" aria-label={t("Ảnh chụp bằng máy tại tiệm", "Shot on our rental cameras")}>
          <div
            className="absolute -top-3 left-10 w-28 h-6 bg-[#EFE6D8]/85 border-x border-border-subtle -rotate-2 z-20 shadow-xs pointer-events-none"
            aria-hidden="true"
          />
          <figure className="card-surface p-4 rounded-2xl shadow-md rotate-[0.6deg]">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border-subtle/60 bg-surface-raised">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={recipe.image} alt={t(recipe.descriptionVi, recipe.descriptionEn)} className="w-full h-full object-cover" />

              <span className="absolute top-3 right-3 font-mono text-[11px] font-semibold bg-surface/95 text-accent-terracotta px-2.5 py-1 rounded-md border border-border-subtle shadow-xs">
                {recipe.name}
              </span>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 font-mono text-[11px] text-white bg-[#312922]/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/15">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: recipe.tagColor }} />
                  <span className="truncate">{recipe.camera}</span>
                </span>
                <span className="flex items-center gap-1 shrink-0 text-accent-peach font-sans">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                  {t(recipe.locationVi, recipe.locationEn)}
                </span>
              </div>
            </div>
            <figcaption className="mt-3.5 px-1 pb-0.5 text-[13px] leading-relaxed text-text-muted">
              {t(recipe.descriptionVi, recipe.descriptionEn)}
            </figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
}

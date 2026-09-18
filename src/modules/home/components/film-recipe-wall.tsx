"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { VERIFIED_FILM_RECIPES, FilmRecipe } from "@/constants/homepage-data";
import { Sparkles, Camera, MapPin, Play } from "lucide-react";

interface FilmRecipeWallProps {
  onOpenReel?: () => void;
}

export function FilmRecipeWall({ onOpenReel }: FilmRecipeWallProps) {
  const { locale } = useLanguage();
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("classic-chrome");

  const currentRecipe: FilmRecipe =
    VERIFIED_FILM_RECIPES.find((r) => r.id === selectedRecipeId) || VERIFIED_FILM_RECIPES[0];

  return (
    <section id="film-recipes" className="py-20 md:py-28 bg-surface-raised/40 border-y border-border-subtle relative">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-peach" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-terracotta font-semibold">
                {locale === "vi" ? "BỨC TƯỜNG MÀU FILM FUJIFILM" : "ANALOG FILM RECIPES"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
              {locale === "vi" ? "Chọn màu ảnh bạn thích" : "Choose your favorite tone"}{" "}
              <span className="font-display italic font-normal text-accent-terracotta block sm:inline">
                {locale === "vi" ? "trước khi thuê máy." : "before you rent."}
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenReel}
            className="btn-secondary-subtle text-xs sm:text-sm py-2.5 px-4 shadow-xs self-start md:self-auto cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-accent-terracotta fill-current" />
            <span>{locale === "vi" ? "Xem video màu film thực tế" : "Watch Sample Reel"}</span>
          </button>
        </div>

        {/* Interactive Lab Bench: Recipe Selector + Large Contact Sheet Display */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 items-stretch">
          {/* Left Column: Recipe Selection Cards */}
          <div className="flex flex-col justify-between space-y-3">
            {VERIFIED_FILM_RECIPES.map((recipe) => {
              const isSelected = recipe.id === selectedRecipeId;
              return (
                <button
                  key={recipe.id}
                  type="button"
                  onClick={() => setSelectedRecipeId(recipe.id)}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? "bg-surface border-accent-terracotta shadow-sm ring-1 ring-accent-terracotta/20"
                      : "bg-surface/60 border-border-subtle hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-display font-semibold text-base text-text-primary">
                      {recipe.name}
                    </h3>
                    <span className="font-mono text-[11px] text-accent-terracotta font-medium">
                      {recipe.camera}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed font-light mb-2">
                    {locale === "vi" ? recipe.descriptionVi : recipe.descriptionEn}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-accent-sage">
                    <MapPin className="w-3 h-3" />
                    <span>{locale === "vi" ? recipe.locationVi : recipe.locationEn}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Photographic Frame with Film Diary Details */}
          <div className="card-surface p-4 rounded-2xl border border-border-subtle shadow-md relative flex flex-col justify-between">
            {/* Scrapbook Paper Tag */}
            <div
              className="absolute -top-3 right-8 w-24 h-5 bg-[#EFE6D8]/90 border-x border-[#DCCBBC] rotate-1 z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface-raised mb-4 border border-border-subtle/60">
              <img
                src={currentRecipe.image}
                alt={currentRecipe.name}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Tag overlay */}
              <div className="absolute top-3 left-3 tag-badge-peach text-xs font-mono shadow-xs">
                {currentRecipe.name}
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-[#312922]/70 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-white/15 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-accent-peach" />
                  <span className="font-mono">{currentRecipe.camera}</span>
                </div>
                <span className="font-mono text-[11px] text-accent-peach">
                  {locale === "vi" ? currentRecipe.locationVi : currentRecipe.locationEn}
                </span>
              </div>
            </div>

            {/* Note about preloaded recipe */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1 pt-1 text-xs">
              <div className="flex items-center gap-2 text-text-muted font-light">
                <Sparkles className="w-3.5 h-3.5 text-accent-terracotta shrink-0" />
                <span>
                  {locale === "vi"
                    ? "Tụi mình cài sẵn công thức màu này vào máy hoàn toàn miễn phí!"
                    : "Preloaded into your rental camera at zero extra charge!"}
                </span>
              </div>

              <a
                href="#curated-wardrobe"
                className="text-accent-terracotta hover:underline font-mono text-xs font-medium"
              >
                {locale === "vi" ? "Thuê máy này →" : "Rent this camera →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

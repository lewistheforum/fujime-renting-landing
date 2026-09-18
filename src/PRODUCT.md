# Product: Fujime Renting

<!-- impeccable:product-schema 1 -->

## Platform
web

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS, TypeScript, Lucide Icons, Bilingual i18n (vi / en).

---

## Product Purpose
Fujime Renting is a boutique, curated camera rental studio, cyclorama space, and creative hub based in Sơn Trà, Da Nang, Vietnam.

Rather than positioning as a cold, intimidating technical gear marketplace or an austere corporate production house, the landing page serves as a warm, inspiring, and approachable digital storefront for young Vietnamese creators. Its primary purpose is to:
1. Enable Gen Z creators, students, couples, and emerging visual artists to effortlessly discover, understand, and rent aesthetic cameras (especially Fujifilm X-Series, GFX, and creative lenses) and studio hours for their lifestyle, travel, fashion, graduation, and video projects.
2. Demystify camera gear by translating complex technical jargon into friendly, practical use-cases (e.g. "Chụp ảnh du lịch tone film", "Quay TikTok / Reels nét căng", "Bộ máy chụp kỷ yếu & nàng thơ") while keeping detailed specifications easily accessible for enthusiasts.
3. Establish trust through transparent daily VND rates, ready-to-shoot complete kit packages (pin, thẻ nhớ, dây đeo, túi đựng đi kèm), and quick, human rental advice.
4. Drive primary conversion actions directly through frictionless regional channels: browsing cameras, checking rental dates, reviewing transparent prices, requesting personalized advice, and booking instantly via Zalo or direct hotline.

---

## Target Users (Primary Audience: Gen Z in Vietnam)
1. **Students & Young Creative Photographers:**
   - High school and university students, photography club members, and hobbyists in Da Nang or visiting Central Vietnam.
   - *Use-cases:* Graduation shoots (kỷ yếu), personal portraits, creative campus projects, testing a dream camera before buying.
   - *Needs:* Affordable student-friendly day rates, zero hidden fees, simple rental procedures, cameras that yield beautiful classic film recipes (Fujifilm Film Simulations) straight out of the camera.
2. **Content Creators, Travel Vloggers & Couples:**
   - TikTokers, Instagram lifestyle influencers, travel bloggers, and couples traveling to Da Nang, Hoi An, and Ba Na Hills.
   - *Use-cases:* Travel diaries, café hopping, aesthetic OOTD / fashion shoots, romantic vacation reels.
   - *Needs:* Lightweight, stylish camera bodies that look good on camera; easy smartphone transfer; reliable batteries and memory cards; friendly recommendations on which lens to pick.
3. **Fashion & Boutique Lifestyle Brands:**
   - Local Da Nang clothing brands, coffee shops, handmade makers, and creative studios.
   - *Use-cases:* Lookbooks, seasonal campaign shoots, aesthetic video shorts, studio cyclorama bookings.
   - *Needs:* Crisp color fidelity, reliable studio space with lighting kits, flexible hourly/daily booking.
4. **Beginner to Emerging Indie Filmmakers:**
   - Independent video makers, film students, and music video creators.
   - *Needs:* Accessible 10-bit / 4K/6K cinema capabilities (Fujifilm X-H2S, anamorphic glass, Sony FX3), clear technical spec sheets, cage rigging, and supportive staff advice.

---

## Visual Direction
- **Atmosphere & Mood:** Warm analog film lab, tactile camera shop, calm creative studio, handcrafted editorial film diary.
- **Tonal Identity:** Youthful, playful, warm, artistic, and trustworthy — striking a careful balance between high aesthetic taste and inviting warmth.
- **Aesthetic Influences:**
  - *Film diary & scrapbook moments:* Subtle tape accents, stamps, contact sheets, photo paper borders, delicate hand-marked notes.
  - *Tactile camera appreciation:* Clean cutout camera imagery showing textured leatherettes, knurled metal dials, and aperture rings.
  - *Airy editorial layout:* Generous negative space, calm rhythm, and purposeful composition that allows imagery to shine.
- **Guardrails Against Excess:**
  - **Not childish, cluttered, or overly cute:** No cartoon stickers, chaotic scrapbook collages, or juvenile elements.
  - **Not dark industrial cinema:** Completely avoid cold darkroom blackout grounds, neon cyber glows, pseudo-HUD overlays, or aggressive military/technical styling.
  - **Single focal point:** Exactly one dominant visual focal point per viewport to preserve serenity and clarity.

---

## Color Palette (Light Pastel Earthy Palette)
An 11-token palette inspired by warm photo paper, terracotta pottery, and natural analog tones:

| Token | Hex | Usage |
|---|---|---|
| `--bg-ground` | `#F6F0E7` | Main warm cream background |
| `--surface` | `#FFF9F2` | Cards, panels, header surface |
| `--surface-raised` | `#EDE1D2` | Hover areas, selected backgrounds, secondary panels |
| `--border-subtle` | `#DCCBBC` | Borders, dividers, table lines |
| `--accent-terracotta` | `#B9684D` | Primary CTA, active states, important emphasis |
| `--accent-peach` | `#E8B69A` | Soft secondary accent, tags, highlights |
| `--accent-sage` | `#9EAD8A` | Supporting visual accent, category and availability states |
| `--accent-dusty-rose` | `#C98583` | Editorial supporting accent |
| `--text-primary` | `#312922` | Main text, headings |
| `--text-muted` | `#756A60` | Supporting text and metadata |
| `--text-inverse` | `#FFF9F2` | Text on dark/primary buttons |

---

## Typography Direction
- **Primary Branding & Editorial Display Font:** *SVN-Tangerine HB*
  - **Usage Scope:** Reserved strictly for large brand moments, hero headlines, campaign titles, or short, expressive editorial phrases (e.g. hero tagline, distinctive section callouts).
  - **Strict Prohibition:** Must NEVER be used for body paragraphs, navigation links, buttons, pricing figures, technical specifications, form inputs, or small UI text.
  - **License & Availability Notice:** The *SVN-Tangerine HB* font file must be legally licensed and present in the project (e.g. in `public/fonts/`) before it can be served in production. If the font file is not yet in the repository, a temporary fallback display font (such as *Fraunces* or an editorial display serif) must be used and clearly annotated in code.
- **Body & Vietnamese UI Text:** *Be Vietnam Pro*
  - Clean, modern, highly legible sans-serif with flawless native Vietnamese diacritics support.
  - Used for all descriptive text, feature lists, navigation menus, buttons, and helper tooltips.
- **Technical Specifications & Metadata:** *Space Mono* (monospace)
  - Reserved strictly for camera model numbers (e.g. `X-T5`, `X-H2S`), hardware specifications (`26.1MP`, `6.2K 30p`), rental dates, and VND pricing values (`500.000đ / ngày`).
- **Typographic Rules:**
  - Headings should use sentence case rather than forced uppercase shouting.
  - No artificial single-word colored or italic highlights inside headings.
  - Generous line height (1.6–1.8) for body text with max line-length of 65–75 characters.

---

## Spacing and Layout Rules
- **Base Grid:** 8px rhythm with generous whitespace that feels calm and breathable.
- **Vertical Padding:** `py-18` to `py-24` (72px–96px) on desktop; `py-12` to `py-16` on mobile.
- **Media Containers:** 3:2 (classic 35mm photo format), 16:9 (video), and 1:1 (social lookbook) aspect ratios framed with `#DCCBBC` hairline borders and soft cream backgrounds.
- **Alignment:** Consistent left-aligned hierarchy for rapid readability.

---

## UI Patterns to Use
1. **Curated "Ready-to-Shoot" Camera Cards:**
   - Isolated cutout camera body/lens on `#FFF9F2` surface.
   - Friendly use-case badges: "Dễ dùng cho người mới", "Tone màu phim hot", "Chụp nàng thơ & kỷ yếu", "Quay Vlog / TikTok".
   - Clear inclusion list: "Đã kèm: 2 pin, sạc đôi, thẻ nhớ tốc độ cao, túi đeo thời trang".
   - Transparent daily VND rate (`500.000đ / ngày`) in clean monospace font.
   - Dual action buttons: "Tư vấn qua Zalo" & "Xem chi tiết bộ máy".
2. **Scenario-Based Category Filters:**
   - Filter by user intention rather than just technical tags: *Chụp du lịch & café*, *Quay TikTok & Reels*, *Chụp kỷ yếu & chân dung*, *Máy ảnh Fujifilm*, *Ống kính góc rộng & chân dung*, *Đèn & Studio*.
3. **"Ask for Advice" Concierge Banner:**
   - A welcoming, friendly callout for beginners: "Chưa biết chọn máy nào cho chuyến đi? Nhắn Zalo tụi mình gợi ý ngay combo phù hợp nhất!"
4. **Transparent Rental Date & Price Calculator:**
   - Simple date picker showing clear daily rates with multi-day discounts (thuê từ 3 ngày giảm giá).
5. **Community Inspiration & Real Film Recipes:**
   - Real photos taken with the rental cameras, credited with camera model and film simulation recipe (e.g. Classic Chrome, Nostalgic Neg), giving users confidence in the final look.
6. **Floating Direct Contact Bar:**
   - Clean, non-intrusive bottom/corner bar with quick triggers for Zalo, Hotline, and Sơn Trà studio map.
7. **Bilingual Switcher (VI / EN):**
   - Clean, tactile toggle in header supporting both Vietnamese locals and international travelers.

---

## UI Patterns to Avoid (Anti-Patterns)
1. **Cold Technical Marketplace Tropes:** No dry database tables, dense spec grids without explanations, or confusing jargon that intimidates beginners.
2. **Dark Industrial Cinema Aesthetic:** No black backgrounds, neon orange cyber lines, pulsing red recording icons, or fake military HUD timecodes.
3. **Childish / Cluttered Scrapbook Overkill:** No chaotic sticker blasts, illegible doodle scripts for UI labels, messy overlapping collage chaos, or cartoon icons.
4. **Generic SaaS Chrome:** No glassmorphism, floating drop-shadow orbs, purple-to-pink gradient washes, or cookie-cutter 3-column feature cards.
5. **AI Template Formats:**
   - No tracked-out all-caps numbered eyebrows (`01 — WHO WE ARE`).
   - No arbitrary middle-dot chains (`A · B · C`).
   - No floating custom cursor rings that hijack mouse movement.
6. **Hidden Pricing / "Liên hệ báo giá":** Every rental item must display an honest, upfront daily rate in VND.

---

## Content and Asset Policy
1. **Authentic Equipment & Sample Photos:** All camera images must accurately depict real inventory (Fujifilm bodies, real lenses, clean accessories). Sample shots must be genuine photos showing realistic color rendering, not generic stock library photography.
2. **Typography Licensing Compliance:**
   - The primary display font *SVN-Tangerine HB* requires valid licensing before production deployment.
   - If *SVN-Tangerine HB* is not present in the project assets, the application must gracefully use an editorial fallback serif (e.g. *Fraunces*) and annotate the fallback in CSS/layout.
   - *Be Vietnam Pro* and *Space Mono* are open-source Google Fonts and are fully licensed for web distribution.
3. **Tone of Voice:**
   - Friendly, warm, creative, and polite (chân thành, nhiệt tình, gần gũi nhưng chuyên nghiệp).
   - Speaks to young Vietnamese creators naturally ("tụi mình", "bạn", "combo sẵn sàng bấm máy").
   - Factual and transparent about deposit terms, equipment condition, and pickup/delivery options in Da Nang.

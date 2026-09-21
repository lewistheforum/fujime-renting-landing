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
- **Primary Editorial Display & Headline Font:** *Fraunces* (Optical Size Variable Serif)
  - **Usage Scope:** Main hero headlines, section titles, and expressive poetic phrases (using soft italic serif styling, e.g. *"Ghi lại những khung hình thơ"*).
  - **Aesthetic Rationale:** Fraunces embodies the tactile, nostalgic warmth of vintage photobooks, classic magazine spreads, and analog optical equipment. It harmonizes naturally with the light pastel earthy palette and avoids the harshness of condensed geometric fonts.
  - **Note on SVN-Tangerine HB:** Removed from display use because its tall, condensed monoline geometric sans letterforms clashed with the warm analog photo-lab and handcrafted editorial mood.
- **Body & Vietnamese UI Text:** *Be Vietnam Pro*
  - Clean, modern, highly legible sans-serif with flawless native Vietnamese diacritics support.
  - Used for all descriptive text, feature lists, navigation menus, buttons, and helper tooltips.
- **Technical Specifications & Metadata:** *Space Mono* (monospace)
  - Reserved strictly for camera model numbers (e.g. `X-T5`, `X-H2S`), hardware specifications (`26.1MP`, `6.2K 30p`), rental dates, and VND pricing values (`500.000đ / ngày`).
- **Typographic Rules:**
  - Headings should use sentence case rather than forced uppercase shouting.
  - Expressive phrases use soft italic serif styling in warm terracotta (`#B9684D`).
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
   - High-contrast badges on photos: Badges overlaid on photographic imagery must use a solid/frosted ivory surface (`bg-surface/95` `#FFF9F2` with subtle backdrop blur, hairline borders, and high-contrast `#312922` or `#B9684D` text). Low-opacity tinted overlays over dark photo backgrounds are strictly forbidden to prevent text wash-out.
   - Friendly use-case badges: "Dễ dùng cho người mới", "Tone màu film hot", "Chụp nàng thơ & kỷ yếu", "Quay Vlog / TikTok".
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
8. **Clean Multi-Page Navigation Architecture:**
   - Nav links: **Trang chủ** (`/`), **Sản phẩm** (`/products`), **Tra cứu** (`/tra-cuu`), **Hướng dẫn** (`/#rental-flow`), **Liên hệ** (`/#contact-concierge`).
   - Active state styling: Exact route matching (`bg-accent-terracotta text-white font-semibold shadow-xs`), while non-active links have clean subtle hover backgrounds (`hover:text-text-primary hover:bg-surface-raised/80`), preventing color bleeding or broken multi-pill active states.
9. **Editorial Services Showcase Bento Grid:**
   - Replaces flat, cookie-cutter feature boxes with an asymmetric Bento editorial composition featuring tactile photographic windows for each craft offering.
   - **Flagship Core Service Card (Full-width 12-column hero):** Spotlights Camera Rental & Ready-to-Shoot Kits with authentic equipment showcase photography (`/images/equip-feature28c4.jpg`), vintage scrapbook paper tape accent, pre-loaded film recipe badge, transparent starting daily VND rate, and primary link to `/products`.
   - **Supporting Craft Spaces & Crew Cards (3-column lower row):**
     - *Studio 360m² Cyclorama:* Authentic curved wall and lighting setup photography (`/images/studio-setd3f4.jpg`) with specs.
     - *Podcast & Talkshow Set:* Pre-lit acoustic studio photography (`/images/podcast-set6c9c.jpg`) with pro audio details.
     - *Video Production Crew:* Authentic on-location cinema crew photography (`/images/crew-on-location3c9e.jpg`) with 4K/6K & grading specs.
   - Each card features high-contrast ivory tag badges (`bg-surface/95` `#FFF9F2`), tactile rounded geometry (`rounded-3xl`), and responsive padding.
10. **Featured Products on Homepage (6 Curated Kits + 'Xem thêm'):**
    - Homepage prominently features exactly 6 ready-to-shoot camera combos in a balanced 3-column grid (`HomeFeaturedProducts`).
    - Includes a prominent terracotta pill button **"Xem toàn bộ tủ máy & phụ kiện (12+ combo) →"** routing to the full `/products` catalog.
11. **Real-Time Order Tracking Route (`/tra-cuu` - Analog Rental Passport & Handover Docket):**
    - A dedicated, lightweight lookup tool crafted as an authentic **Analog Rental Passport & Handover Docket (Phiếu Bàn Giao Thiết Bị & Biên Nhận Ký Gửi)**, unifying previously scattered cards into a single cohesive, tactile ticket experience:
      - **Master Ticket Container & Paper Notches:** Features a vintage scrapbook paper tape accent on the top edge, perforated dashed tear-line, and circular paper punch-out notches on the left and right flanks.
      - **Connected 4-Step Film Strip Stepper:** Continuous timeline rail connecting all 4 rental milestones with glowing terracotta progress indicators and milestone timestamps, eliminating disconnected floating dots.
      - **Integrated Live Countdown Ribbon:** Displays remaining shoot time (e.g., *"Còn 3 ngày 08 giờ 30 phút"*), pickup hour, and strict return deadline with urgent alert indicators.
      - **Two-Column Analog Layout:**
        - *Left (Gear & Biometric Identity Passport):* Equipment showcase with high-res photo, preloaded film recipe badge, 100% charged battery & SD check, alongside an authentic verified CCCD ID credential card (spaced 4-digit formatting `0482 0200 8921`, biometric verification badge, and physical custody safety seal).
        - *Right (Itemized Receipt & Action Protocol):* Itemized pricing slip, daily rates, multi-day discounts, verified deposit terms, and pre-filled 1-click Zalo emergency contact.
      - **Interactive On-Demand Search State:** Initializes in a clean waiting state (`hasSearched: false`, `query: ""`) with warm guidance tips and sample chips (`FJ-8294`, `FJ-7512`, `FJ-6103`), never flashing customer data prematurely.
12. **Dedicated Product Detail Experience (`/products/[id]`):**
    - Dynamic route providing rich details for each camera kit: large authentic photography, preloaded film simulation recipes, full hardware specs (CMOS, IBIS, 4K/6K ProRes), interactive rental day selector (1, 2, 3, 5 days) with automatic 15% discount calculation, and 1-click Zalo booking with pre-filled message.
13. **Customer Reviews Station Grid:**
    - Aligned directly below the 3-step rental flow with matching 3-column card topology. Showcases authentic verified customer experiences, star ratings, rented camera models, and aggregate 5.0/5.0 score badge.
14. **3D Camera Showcase with Smooth Carousel Motion & Clean Pill Selector:**
    - The interactive hero showcase houses 4 high-fidelity 3D models (`EOS R50`, `R50 White`, `X100VI`, `Pocket 4`).
    - **Layout Architecture:** The 3D camera container takes full center-stage viewport (`absolute inset-0 z-10 flex items-center justify-center`), while the 4-pill camera selector is positioned strictly absolute and centered at the bottom (`absolute bottom-3 left-1/2 -translate-x-1/2 z-20`), eliminating flex item collision bugs and ensuring both elements are perfectly framed.
    - **Clean Pill Switcher & Auto-Cycle:** Removed any lingering progress bar elements that previously caused visual glitches during camera transitions. Replaced with clean tactile buttons for the 4 camera models and a smooth 8-second automatic rotation timer managed via React lifecycle hooks (automatically pausing during hover/interaction).
    - **Carousel Slide Motion:** When switching cameras, the previous model glides smoothly out to the left (`translateX(-55%) scale(0.92)` with `cubic-bezier(0.16, 1, 0.3, 1)`) while the incoming model sweeps in from the right (`translateX(55%) -> 0`), providing an authentic physical carousel swipe feel with high initial velocity that smoothly decelerates to rest.
15. **Scrapbook Field Notebooks & Mechanical Teardown Guides (`/huong-dan` & `/huong-dan/[id]`):**
    - Inspired by analog film diaries, student notebooks, and mechanical blueprint sketches (as seen in classic film posters and handcrafted workshop manuals).
    - **Official Rental Process Page (`/huong-dan/quy-trinh-thue`):**
      - Authored in authentic analog stationery style detailing the 4 operational rental stages: (1) Check lịch trống & cọc giữ slot máy trước 1 ngày, (2) Hai hình thức nhận máy (trực tiếp tại tiệm Sơn Trà / ship tận nơi kèm chính sách free ship trên 4h và trả phí ship dưới 4h), (3) Quy định giấy tờ tuỳ thân gốc (CCCD gắn chip / Thẻ SV hoặc cọc 100% giá trị máy) và đồng kiểm tra quay chụp tình trạng ngoại quan máy trước khi bàn giao, (4) Trả máy trực tiếp tại tiệm hoàn cọc 5 phút & lưu ý rủi ro khi ship trả máy.
      - Includes bottom visual journey icons (*1. Giữ slot → 2. Nhận máy → 3. Sáng tạo → 4. Hoàn cọc*) and 1-click Zalo reservation trigger.
    - **Separate Dedicated Routes per Camera:**
      - `/huong-dan/fujifilm-x100vi`: Rangefinder dials, EVF/OVF hybrid lever, aperture ring, and film recipes.
      - `/huong-dan/canon-eos-r50`: Dual Pixel II autofocus, vari-angle screen, red movie button, and close-up demo mode.
      - `/huong-dan/canon-r50-white`: Pearl white edition, pop-up Y2K flash, and smooth skin portrait sliders.
      - `/huong-dan/dji-pocket-4`: 3-axis brushless motor gimbal, quick-wake rotating OLED screen, and ActiveTrack 6.0.
    - **Tactile Paper Aesthetics & Authentic Dog-Ear Page-Curl on Hover:**
      - Replaced thick dark borders with soft borderless / hairline card contours (`border-border-subtle/25`) and warm paper shadows (`.notebook-paper-sheet`).
      - **Y2K Holographic Washi Tape (Tape Răng Cưa Hologram):**
        - Positioned strictly outside `<article className="overflow-hidden">` directly on the parent container, completely eliminating the clipped-tag bug.
        - Features authentic serrated tape cutter teeth on both flanks, translucent pastel iridescent gradient (`#FDF4EB` / `#EBF4FE` / `#FCEAF2`), a dynamic holographic gloss sheen sweep on hover (`group-hover:translate-x-full duration-700`), and a retro Y2K foil stamp (`✦ FUJIME Y2K · 0{idx + 1} ★`).
      - **Seamless Dog-Ear Page-Curl on Hover:**
        - **Synchronized Parent Elevation:** Container-level lift (`.notebook-paper-sheet-container:hover` with `translateY(-6px)`) ensures the card body and the folded flap lift together as one coherent physical sheet with zero vertical displacement.
        - **Mathematically Mirrored Corner:** When hovered, the top-right corner of the sheet is sliced via `clip-path: polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 0 100%)`. Simultaneously, the mirrored flap (`d="M0 0 L44 44 L16 44 Q0 44 0 28 Z"`) folds down with a rounded tip (`Q 0 44 0 28`), perfectly reflecting the original rounded corner geometry rather than an artificial 90° spike.
        - **Feathery Soft Diffuse Glow & Zero Overhang (`<clipPath>` + `feGaussianBlur`):** All highlight elements are strictly contained within `<clipPath id="flapClip">`, eliminating protruding white teeth or overflow pixels at the edges. Replaced rigid white stroke lines with a 4.5px blurred diffuse glow (`feGaussianBlur stdDeviation="2.2"`) that gently fades to 0% opacity at both crease terminals, paired with a cylindrical ambient roll shadow (`curlRollShadow`) that gives the paper face natural 3D curvature and softness.
      - Ruled notebook line background (`.paper-lined-grid`), left red notebook margin rule, washi tape strips (`.tape-strip`), and tilted polaroid photos with tape accents.
      - Chalk-style dashed mechanical callout circles (`01`, `02`, `03`), color-coded badges, and handwritten-style pro tips (*"💡 Mẹo tiệm"*).
      - Interactive 3D `<model-viewer>` component embedded directly into each camera guide page for 360° mechanical exploration.
      - 5-minute quick start field guide for first-time shooters and beginners.
    16. **Online Camera Booking & VietQR Instant Deposit Checkout (`/dat-hang`):**
        - **End-to-End Reservation & Payment Architecture:**
          - **Streamlined Selected Camera Strip (Zero Friction):** Directly receives the selected camera kit from catalog/detail routes (`?kit=...&days=...`) and displays an elegant horizontal summary card (thumbnail, combo name, daily VND rate, badge, and quick switcher dropdown capped at `w-[210px]` with `whitespace-nowrap` labels to prevent any text squashing or layout deformation).
          - **Clean Organic Hierarchy:** Organic heading typography (*"Phiếu Đăng Ký Thuê Máy"*) without artificial AI pill tags or uppercase eyebrows, maintaining calm editorial warmth and spacious rhythm.
          - **Smart Time Slot Picker with Live Availability:**
            - Replaces native dropdowns with a tactile 3x2 grid of time slots (`08:00`, `09:00`, `11:30`, `14:00`, `16:30`, `19:00`).
            - **Minimalist 2-State Visual System (No Color Clutter):** All cards share a calm neutral surface styling (`bg-surface`, `border-border-subtle`, active state uses terracotta accent border `border-accent-terracotta`). Chromatic variations are strictly isolated to the compact status chips (Trống: emerald, Giữ 15p: amber, Đã kín: stone gray), preventing overwhelming multi-colored button card backgrounds.
            - Clear visual status for each slot: 🟢 *Sẵn máy (Trống lịch)*, 🟡 *Đang giữ chỗ 15p (Chờ khách hoàn tất cọc)*, and 🔒 *Đã kín (Đã có khách nhận)*.
            - Rendered both on **Trang Chi Tiết Sản Phẩm (`/products/[id]`)** as a real-time availability preview and on **Trang Đặt Máy (`/dat-hang`)** as an interactive slot selection grid.
          - **Intuitive 3-Block Booking Flow:**
            1. *Lịch thuê & Thời gian:* Pill duration selectors (1, 2, 3, 5 days with auto -15% discount for 3+ days), pickup date, visual time slots, and automatic 18:00 return deadline schedule.
            2. *Thông tin người nhận & Hình thức cọc:* Clean customer contact fields, 2 receiving options (Store pickup at Sơn Trà vs Free-ship delivery), and 2 deposit protocols (CCCD chip card for 100% cash deposit waiver vs equipment value deposit).
            3. *Hình thức thanh toán cọc:* 200.000đ slot lock deposit (recommended) vs 100% upfront payment.
          - **Master Docket Receipt & VietQR Generation:** On order submission, renders an authentic perforated physical docket complete with bank transfer credentials (MB Bank `0779771234` · NGUYEN PHUONG NAM), one-click clipboard copy, pre-filled Zalo confirmation dispatch, and dynamically generated VietQR barcode image with exact amount and booking memo.
          - **System-Wide Removal of Generic Sparkle Icons:** Purged all instances of the generic Lucide `Sparkles` icon across all components, replacing them with authentic camera, check, or clean directional icons.

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
2. **Typography Compliance:**
   - *Fraunces*, *Be Vietnam Pro*, and *Space Mono* are fully supported with Vietnamese diacritics via Google Fonts.
3. **Tone of Voice:**
   - Friendly, warm, creative, and polite (chân thành, nhiệt tình, gần gũi nhưng chuyên nghiệp).
   - Speaks to young Vietnamese creators naturally ("tụi mình", "bạn", "combo sẵn sàng bấm máy").
   - Factual and transparent about deposit terms, equipment condition, and pickup/delivery options in Da Nang.

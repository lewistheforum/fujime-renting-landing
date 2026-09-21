export interface ChalkAnnotation {
  number: string;
  nameVi: string;
  nameEn: string;
  type: "dial" | "button" | "switch" | "screen" | "lens" | "port";
  color: "terracotta" | "blue" | "sage" | "amber";
  instructionVi: string;
  instructionEn: string;
  proTipVi: string;
  proTipEn: string;
}

export interface MechanicalSection {
  id: string;
  viewTitleVi: string;
  viewTitleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  annotations: ChalkAnnotation[];
}

export interface CameraGuideData {
  id: string;
  name: string;
  shortName: string;
  subtitleVi: string;
  subtitleEn: string;
  categoryVi: string;
  categoryEn: string;
  taglineVi: string;
  taglineEn: string;
  glbModel: string;
  heroImage: string;
  coverAspect: string;
  accentColor: string;
  tapeColor: string;
  polaroids: {
    image: string;
    captionVi: string;
    captionEn: string;
    recipeOrSetting: string;
    rotationDeg: number;
  }[];
  quickStartSteps: {
    step: string;
    titleVi: string;
    titleEn: string;
    detailVi: string;
    detailEn: string;
    chalkHighlight?: string;
  }[];
  mechanicalSections: MechanicalSection[];
  faqs: {
    qVi: string;
    qEn: string;
    aVi: string;
    aEn: string;
  }[];
}

export const CAMERA_GUIDES: Record<string, CameraGuideData> = {
  "fujifilm-x100vi": {
    id: "fujifilm-x100vi",
    name: "FUJIFILM X100VI",
    shortName: "X100VI",
    subtitleVi: "Sổ tay hướng dẫn & Giải phẫu cơ khí cỗ máy màu film đường phố",
    subtitleEn: "Mechanical Anatomy & Field Notebook for Vintage Street Photography",
    categoryVi: "Máy ảnh Compact Rangefinder · 40.2MP · Ống kính 23mm f/2",
    categoryEn: "Compact Rangefinder · 40.2MP · 23mm f/2 Fixed Lens",
    taglineVi: "Bánh xe cơ khí kim loại, kính ngắm lai OVF/EVF và 20 màu film huyền thoại trong lòng bàn tay.",
    taglineEn: "Tactile knurled metal dials, hybrid optical viewfinder, and 20 legendary film recipes.",
    glbModel: "/fujime-hq.glb",
    heroImage: "/images/camera-rigaaf7.jpg",
    coverAspect: "3/2",
    accentColor: "#B9684D",
    tapeColor: "#EFE6D8",
    polaroids: [
      {
        image: "/images/equip-feature28c4.jpg",
        captionVi: "Hoàng hôn Hội An · Tone Classic Chrome",
        captionEn: "Hoi An Sunset · Classic Chrome Tone",
        recipeOrSetting: "f/2.8 · 1/250s · ISO 400",
        rotationDeg: -2.5,
      },
      {
        image: "/images/crew-on-location3c9e.jpg",
        captionVi: "Góc phố café Sơn Trà · Nostalgic Neg",
        captionEn: "Sơn Trà Café Alley · Nostalgic Neg",
        recipeOrSetting: "f/2.0 · 1/500s · ISO 160",
        rotationDeg: 3.2,
      },
    ],
    quickStartSteps: [
      {
        step: "01",
        titleVi: "Mở nắp lens & Gạt lẫy nguồn ON",
        titleEn: "Remove Lens Cap & Flick Power ON",
        detailVi: "Tháo nắp nhôm ren bảo vệ. Gạt công tắc nguồn cạnh nút chụp sang phải. Máy khởi động sau đúng 0.5 giây.",
        detailEn: "Unscrew or pop off protective cap. Flick switch around shutter button to ON. Wakes up in 0.5s.",
        chalkHighlight: "Cần gạt nguồn ON/OFF",
      },
      {
        step: "02",
        titleVi: "Chọn công thức màu film bằng phím Q",
        titleEn: "Pick Film Simulation via Q Button",
        detailVi: "Nhấn nút Q ở mặt sau. Dùng phím điều hướng chọn ô Film Simulation: Classic Chrome (màu vintage hoài niệm), Nostalgic Neg (tone ấm vàng), hoặc Reala Ace (da sáng trong).",
        detailEn: "Press Q button. Select Film Simulation: Classic Chrome, Nostalgic Neg, or Reala Ace.",
        chalkHighlight: "Nút Q (Quick Menu)",
      },
      {
        step: "03",
        titleVi: "Khóa nét bằng cách nhấn nhẹ nửa cò",
        titleEn: "Half-Press Shutter to Lock Focus",
        detailVi: "Nút chụp có 2 nấc cơ học: Nhấn nhẹ 50% để máy khóa nét (ô vuông xanh lá hiện lên). Sau đó nhấn êm hết lực để bấm ảnh.",
        detailEn: "Two-stage shutter button: Half-press to lock green AF box, fully press smoothly to snap.",
        chalkHighlight: "Nút chụp 2 nấc cơ khí",
      },
      {
        step: "04",
        titleVi: "Bắn ảnh sang iPhone trong 30 giây",
        titleEn: "Wireless Transfer to Phone in 30s",
        detailVi: "Mở app Fujifilm XApp trên điện thoại, bật Bluetooth. Ảnh chụp sẽ tự động gửi thẳng vào thư viện ảnh máy bạn không cần tháo thẻ nhớ.",
        detailEn: "Open Fujifilm XApp on phone via Bluetooth. Photos transfer wirelessly in seconds.",
        chalkHighlight: "Kết nối không dây XApp",
      },
    ],
    mechanicalSections: [
      {
        id: "top-plate",
        viewTitleVi: "Mặt Trên: Các Bánh Xe Cơ Học Knurled",
        viewTitleEn: "Top Plate: Mechanical Knurled Dials",
        descriptionVi: "Toàn bộ thông số phơi sáng được điều khiển bằng các bánh xe kim loại khắc số cơ học cổ điển, không cần mở màn hình menu.",
        descriptionEn: "All exposure controls are managed via vintage engraved metal dials without digging into menus.",
        annotations: [
          {
            number: "01",
            nameVi: "Bánh xe tốc độ màn trập & ISO kép",
            nameEn: "Shutter Speed & Dual ISO Dial",
            type: "dial",
            color: "terracotta",
            instructionVi: "Xoay vòng ngoài để chỉnh tốc độ (1/250s, 1/500s hoặc 'A' tự động). Nhấc vòng kim loại lên rồi xoay để đổi độ nhạy sáng ISO.",
            instructionEn: "Turn outer ring for shutter speed. Lift outer ring up and turn to adjust ISO values.",
            proTipVi: "Người mới đi dạo ban ngày nên để chữ 'A' đỏ (Auto) để máy tự tính tốc độ chuẩn.",
            proTipEn: "Leave at red 'A' (Auto) for effortless daylight shooting.",
          },
          {
            number: "02",
            nameVi: "Bánh xe bù trừ sáng (EV Dial)",
            nameEn: "Exposure Compensation Dial",
            type: "dial",
            color: "blue",
            instructionVi: "Vặn từ -3 đến +3 EV. Khi chụp ngược sáng hay chụp quán café tối, vặn về +1/3 hoặc +2/3 để ảnh sáng trong veo.",
            instructionEn: "Turn from -3 to +3 EV. Turn towards +1 when shooting backlit or dark café corners.",
            proTipVi: "Chụp ảnh phong cách film hoài niệm: Hãy vặn về -1/3 EV để vùng tối sâu và hạt film nổi rõ hơn.",
            proTipEn: "Turn to -1/3 EV for deeper contrast and punchy analog grain.",
          },
          {
            number: "03",
            nameVi: "Nút chụp 2 nấc có ren gắn Soft-Release",
            nameEn: "Two-Stage Threaded Shutter Button",
            type: "button",
            color: "amber",
            instructionVi: "Nấc 1: Nhấn nhẹ 50% để khóa lấy nét và đo sáng. Nấc 2: Nhấn hết lực để ghi hình vào thẻ nhớ.",
            instructionEn: "Stage 1: Half-press to lock AF/AE. Stage 2: Full press smoothly to record image.",
            proTipVi: "Không giật tay khi chụp. Có ren sẵn để vặn nút bấm nhôm đỏ đi kèm trong túi tiệm.",
            proTipEn: "Smooth squeeze prevents camera shake. Includes vintage red concave button.",
          },
          {
            number: "04",
            nameVi: "Cần gạt nguồn ON/OFF cơ học",
            nameEn: "Mechanical Power Lever",
            type: "switch",
            color: "sage",
            instructionVi: "Gạt sang phải để khởi động, gạt sang trái để tắt. Tiết kiệm pin tối đa khi di chuyển giữa các điểm chụp.",
            instructionEn: "Flick right to power on, flick left to power off. Saves battery between spots.",
            proTipVi: "Máy có chế độ Sleep tự ngủ sau 2 phút nếu bạn quên gạt tắt nguồn.",
            proTipEn: "Auto sleep kicks in after 2 minutes of idle time.",
          },
        ],
      },
      {
        id: "front-lens",
        viewTitleVi: "Mặt Trước: Ống Kính Fujinon & Lẫy OVF/EVF",
        viewTitleEn: "Front: Fujinon Lens & Hybrid Viewfinder Lever",
        descriptionVi: "Ống kính cố định 23mm f/2 (tương đương 35mm full-frame) sắc nét cùng lẫy chuyển kính ngắm lai độc nhất vô nhị.",
        descriptionEn: "Fixed 23mm f/2 pancake lens and the legendary hybrid rangefinder viewfinder switch.",
        annotations: [
          {
            number: "05",
            nameVi: "Vòng chỉnh khẩu độ vật lý (Aperture Ring)",
            nameEn: "Physical Aperture Ring",
            type: "lens",
            color: "terracotta",
            instructionVi: "Nằm ngay trên thân ống kính. Xoay về f/2 để xóa phông mờ ảo, xoay về f/4 – f/8 để chụp phong cảnh nét căng.",
            instructionEn: "On the lens barrel. Rotate to f/2 for dreamy bokeh portraits, or f/4-f/8 for sharp landscapes.",
            proTipVi: "Xoay về chữ 'A' màu đỏ để máy tự động điều chỉnh khẩu độ thích hợp.",
            proTipEn: "Set to red 'A' to enable auto aperture mode.",
          },
          {
            number: "06",
            nameVi: "Lẫy chuyển kính ngắm lai (OVF / EVF Lever)",
            nameEn: "Hybrid Viewfinder Mode Lever",
            type: "switch",
            color: "blue",
            instructionVi: "Lẫy gạt kim loại cạnh kính ngắm. Gạt sang phải để chuyển đổi tức thì giữa kính ngắm quang học trong suốt (OVF) và kính ngắm điện tử OLED 3.69M điểm (EVF).",
            instructionEn: "Flick to toggle between pure optical rangefinder view (OVF) and high-res OLED digital EVF.",
            proTipVi: "Khi chụp OVF, bạn sẽ thấy khung viền điện tử lơ lửng như các nhiếp ảnh gia đường phố thập niên 70!",
            proTipEn: "OVF mode superimposes glowing digital frame lines over the real world.",
          },
        ],
      },
      {
        id: "back-screen",
        viewTitleVi: "Mặt Sau: Màn Hình Cảm Ứng Lật & Nút Q",
        viewTitleEn: "Back: Tilting Touchscreen & Quick Menu Button",
        descriptionVi: "Màn hình mỏng gập sát thân máy cùng hệ thống phím bấm định vị chính xác cho ngón tay cái.",
        descriptionEn: "Slim tilting LCD screen and tactical thumb controls engineered for fast street snapshots.",
        annotations: [
          {
            number: "07",
            nameVi: "Màn hình cảm ứng lật 2 chiều",
            nameEn: "Two-Way Tilting Touch LCD",
            type: "screen",
            color: "sage",
            instructionVi: "Kéo nhẹ mép dưới để lật màn hình lên 90° (chụp góc từ thắt lưng) hoặc kéo lật xuống 45° (chụp giơ máy qua đầu).",
            instructionEn: "Pull lower lip to tilt 90° upwards for waist-level street shooting, or 45° downwards.",
            proTipVi: "Chạm trực tiếp vào màn hình để chọn điểm nét khuôn mặt và bấm chụp tức thì.",
            proTipEn: "Tap-to-focus and touch shutter can be enabled directly on the screen.",
          },
          {
            number: "08",
            nameVi: "Nút Q (Quick Menu - Chọn nhanh giả lập màu)",
            nameEn: "Q Button (Quick Menu)",
            type: "button",
            color: "terracotta",
            instructionVi: "Bấm nút Q để mở bảng chọn 16 ô thông số: màu film, tông sáng/tối, độ nổi hạt film grain và cân bằng trắng White Balance.",
            instructionEn: "Opens grid of 16 key settings: film simulations, highlight/shadow curves, grain, and WB.",
            proTipVi: "Tiệm đã lưu sẵn 4 công thức màu film hot nhất vào các vị trí C1, C2, C3, C4.",
            proTipEn: "Studio has pre-programmed 4 popular vintage recipes into C1-C4 slots.",
          },
        ],
      },
    ],
    faqs: [
      {
        qVi: "Làm sao để biết máy đã lấy nét đúng vào mắt?",
        qEn: "How to confirm Eye-AF has locked on?",
        aVi: "Khi bạn hướng ống kính vào người, máy sẽ tự động hiện ô vuông xanh lá viền quanh mắt mẫu. Khi nhấn nửa cò nút chụp, ô vuông chuyển sang màu xanh lá đậm kèm tiếng 'bíp' nhẹ là đã bắt nét hoàn hảo.",
        aEn: "A green square locks onto your subject's eye with a gentle confirmation beep upon half-press.",
      },
      {
        qVi: "Pin của máy chụp được bao nhiêu tấm?",
        qEn: "How many shots per battery charge?",
        aVi: "Mỗi viên pin NP-W126S chụp được khoảng 350 - 400 tấm ảnh. Tiệm luôn giao kèm 02 pin đầy 100% kèm sạc đôi, đủ cho bạn chụp thoải mái cả ngày từ sáng đến tối.",
        aEn: "Roughly 350-400 shots per battery. Kit includes 2 fully charged batteries for all-day freedom.",
      },
    ],
  },

  "canon-eos-r50": {
    id: "canon-eos-r50",
    name: "CANON EOS R50 BLACK",
    shortName: "EOS R50",
    subtitleVi: "Sổ tay nhiếp ảnh du lịch & Quay Vlog 4K thông minh",
    subtitleEn: "Smart Travel Photography & 4K Vlog Field Guide",
    categoryVi: "Mirrorless Cảm biến APS-C 24.2MP · Màn hình xoay lật 360° · 375g",
    categoryEn: "Mirrorless 24.2MP APS-C · Vari-Angle 360° Touchscreen · 375g",
    taglineVi: "Siêu gọn nhẹ, lấy nét bám theo mắt Dual Pixel II và màu da sáng hồng tự nhiên không cần chỉnh sửa.",
    taglineEn: "Ultra-lightweight 375g body, Dual Pixel Eye-AF tracking, and flattering natural skin tones.",
    glbModel: "/canon-r50-hq.glb",
    heroImage: "/images/equip-feature28c4.jpg",
    coverAspect: "3/2",
    accentColor: "#8C432D",
    tapeColor: "#EDE1D2",
    polaroids: [
      {
        image: "/images/remus-set-2fc87.jpg",
        captionVi: "Selfie bãi biển Mỹ Khê · Góc rộng 18mm",
        captionEn: "My Khe Beach Selfie · 18mm Wide",
        recipeOrSetting: "f/4.0 · 1/640s · Dual Pixel AF",
        rotationDeg: 2.8,
      },
      {
        image: "/images/camera-rigaaf7.jpg",
        captionVi: "Quay Vlog ẩm thực chợ đêm Sơn Trà",
        captionEn: "Sơn Trà Night Market Food Vlog",
        recipeOrSetting: "4K 30p · Close-up Demo Mode",
        rotationDeg: -3.5,
      },
    ],
    quickStartSteps: [
      {
        step: "01",
        titleVi: "Xoay mở ống kính RF-S 18-45mm",
        titleEn: "Unlock Retractable RF-S Lens",
        detailVi: "Ống kính Canon RF-S 18-45mm có cơ chế khóa nhỏ gọn. Hãy xoay vòng zoom từ vị trí chấm đỏ sang số 18mm cho đến khi nghe tiếng 'cạch' êm ái.",
        detailEn: "Rotate the zoom ring from the red dot to 18mm until it clicks into shooting position.",
        chalkHighlight: "Khóa mở ống kính 18-45mm",
      },
      {
        step: "02",
        titleVi: "Lật màn hình xoay 360° ra phía trước",
        titleEn: "Flip Vari-Angle Screen 180° Forward",
        detailVi: "Lật màn hình cảm ứng sang trái rồi xoay hướng về phía trước để tự quay vlog, chụp selfie góc rộng cùng bạn bè.",
        detailEn: "Flip touchscreen out to the left and pivot 180° forward for selfie & vlog framing.",
        chalkHighlight: "Màn hình xoay lật 360°",
      },
      {
        step: "03",
        titleVi: "Chọn chế độ A+ (Tự động thông minh)",
        titleEn: "Set Mode Dial to Scene Intelligent Auto (A+)",
        detailVi: "Xoay bánh xe chế độ về biểu tượng A+ màu xanh lá. Máy sẽ tự động nhận diện chân dung, phong cảnh, đồ ăn và điều chỉnh màu sắc nịnh mắt nhất.",
        detailEn: "Turn top dial to green A+. Camera automatically detects scenes and optimizes skin tones.",
        chalkHighlight: "Bánh xe chế độ Mode Dial",
      },
      {
        step: "04",
        titleVi: "Truyền ảnh tức thì qua Canon Camera Connect",
        titleEn: "Instant Wireless Sync via Camera Connect",
        detailVi: "Bấm nút Wi-Fi/Bluetooth trên máy, mở app Canon Camera Connect trên điện thoại. Xem và tải ảnh gốc chất lượng cao về máy trong 1 chạm.",
        detailEn: "Tap Wi-Fi icon, launch Canon Camera Connect app. Download high-res photos in one tap.",
        chalkHighlight: "Kết nối điện thoại 1-chạm",
      },
    ],
    mechanicalSections: [
      {
        id: "r50-top",
        viewTitleVi: "Mặt Trên: Bánh Xe Chế Độ & Nút Quay Phim Đỏ",
        viewTitleEn: "Top Plate: Mode Dial & Red Movie Button",
        descriptionVi: "Bố cục tối giản, vị trí các nút được thiết kế vừa khít tầm với của ngón trỏ và ngón cái.",
        descriptionEn: "Ergonomic layout with direct access to video recording and primary exposure dials.",
        annotations: [
          {
            number: "01",
            nameVi: "Bánh xe chọn chế độ chụp (Mode Dial)",
            nameEn: "Main Mode Dial",
            type: "dial",
            color: "terracotta",
            instructionVi: "Xoay chọn chế độ: A+ (Tự động hoàn toàn), P (Lập trình linh hoạt), Tv (Ưu tiên tốc độ), Av (Ưu tiên khẩu độ xóa phông), và Movie (Quay phim).",
            instructionEn: "Switch between A+ (Auto), P, Tv, Av (Aperture Priority for bokeh), and Movie mode.",
            proTipVi: "Đi chơi chụp kỷ niệm: Để A+ hoặc SCN (Chân dung ban đêm).",
            proTipEn: "Stick to A+ or SCN Night Portrait for effortless social snapshots.",
          },
          {
            number: "02",
            nameVi: "Nút quay video màu đỏ chuyên dụng",
            nameEn: "Dedicated Red Movie Button",
            type: "button",
            color: "terracotta",
            instructionVi: "Bấm 1 lần để bắt đầu quay video 4K sắc nét, bấm thêm 1 lần để dừng. Không cần phải xoay chuyển chế độ chụp ảnh.",
            instructionEn: "Press once to instantly start 4K recording from any photo mode. Press again to stop.",
            proTipVi: "Khi quay, viền màn hình sẽ sáng khung đỏ để bạn biết chắc chắn máy đang ghi hình.",
            proTipEn: "A clear red tally border illuminates on the LCD while recording.",
          },
          {
            number: "03",
            nameVi: "Bánh xe điều khiển chính (Main Dial)",
            nameEn: "Main Control Dial",
            type: "dial",
            color: "blue",
            instructionVi: "Nằm ngay cạnh ngón tay trỏ. Lăn bánh xe này để tăng giảm độ sáng tối hoặc chỉnh khẩu độ nhanh.",
            instructionEn: "Right under your index finger. Roll to adjust brightness or f-stop instantly.",
            proTipVi: "Rất nhạy và êm tay khi bạn đang ngắm qua kính ngắm EVF.",
            proTipEn: "Tactile click-stops allow precise adjustments while looking through the EVF.",
          },
        ],
      },
      {
        id: "r50-back",
        viewTitleVi: "Mặt Sau: Màn Hình Cảm Ứng Xoay Lật & Kính Ngắm",
        viewTitleEn: "Back: Vari-Angle Screen & Dual Pixel Eye-AF",
        descriptionVi: "Hệ thống lấy nét bám theo mắt người và động vật nhanh như chớp của Canon.",
        descriptionEn: "Lightning-fast Dual Pixel CMOS AF II with human/pet eye tracking precision.",
        annotations: [
          {
            number: "04",
            nameVi: "Màn hình cảm ứng xoay lật 360° (Vari-Angle LCD)",
            nameEn: "Vari-Angle Touch LCD",
            type: "screen",
            color: "amber",
            instructionVi: "Mở ra bên hông và xoay tự do mọi góc độ. Chụp sát mặt đất, chụp từ trên cao hoặc xoay ngược mặt kính vào trong để bảo vệ chống trầy xước.",
            instructionEn: "Pivots 360° for high, low, or selfie angles. Folds face-inward for transit protection.",
            proTipVi: "Hỗ trợ cảm ứng toàn diện như smartphone: chạm lấy nét, vuốt chuyển ảnh, chạm đúp phóng to.",
            proTipEn: "Fully touch-responsive: tap-to-focus, pinch-to-zoom, and swipe through playback.",
          },
          {
            number: "05",
            nameVi: "Cụm phím D-pad 4 hướng & Nút Q/SET",
            nameEn: "4-Way D-Pad & Q/SET Button",
            type: "button",
            color: "sage",
            instructionVi: "Nhấn nút Q ở tâm để mở nhanh: ISO, cân bằng trắng, chế độ chụp liên tục và lấy nét đơn/bám đuổi.",
            instructionEn: "Press Q in the center to access ISO, white balance, drive mode, and AF tracking.",
            proTipVi: "Nút thùng rác phía dưới dùng để xóa nhanh những tấm ảnh bị hỏng hoặc nhắm mắt.",
            proTipEn: "Quick-delete button at the bottom right discards unwanted shots on the fly.",
          },
        ],
      },
    ],
    faqs: [
      {
        qVi: "Máy có thể sạc bằng sạc dự phòng điện thoại không?",
        qEn: "Can I charge the EOS R50 with a power bank?",
        aVi: "Có! Cổng USB-C trên Canon R50 hỗ trợ chuẩn sạc nhanh Power Delivery (PD). Bạn có thể cắm trực tiếp pin dự phòng vào máy để sạc khi nghỉ chân ở quán café.",
        aEn: "Yes! The USB-C port supports USB Power Delivery (PD) for charging from modern power banks.",
      },
      {
        qVi: "Chế độ quay cận cảnh sản phẩm hoạt động thế nào?",
        qEn: "How does Close-up Demo Mode work?",
        aVi: "Khi bạn đưa một món đồ (mỹ phẩm, ly cà phê, vé xem phim) lại gần ống kính, máy sẽ tự động chuyển nét từ mắt bạn sang món đồ trong chớp mắt mà không cần che tay.",
        aEn: "Prioritizes objects held close to the lens without needing to cover your face with your hand.",
      },
    ],
  },

  "canon-r50-white": {
    id: "canon-r50-white",
    name: "CANON EOS R50 WHITE EDITION",
    shortName: "R50 White",
    subtitleVi: "Sổ tay bản Trắng Retro · Dành cho Nàng Thơ & Café Hopping",
    subtitleEn: "White Pastel Edition Field Guide · Aesthetic Café & Portrait Shoots",
    categoryVi: "Vỏ trắng kem ngọc trai · Ống kính bạc đồng điệu · Chế độ làm đẹp da",
    categoryEn: "Pearl White Finish · Matching Silver Lens · Soft Skin Beauty Mode",
    taglineVi: "Phụ kiện thời trang trên vai, vừa là cỗ máy chụp ảnh màu sắc trong trẻo nịnh da.",
    taglineEn: "A stylish fashion statement on your shoulder, delivering soft porcelain skin tones.",
    glbModel: "/canon-r50v-hq.glb",
    heroImage: "/images/studio-setd3f4.jpg",
    coverAspect: "3/2",
    accentColor: "#B9684D",
    tapeColor: "#FAF6F0",
    polaroids: [
      {
        image: "/images/crew-on-location3c9e.jpg",
        captionVi: "Check-in quán trà bánh Sơn Trà",
        captionEn: "Bakery & Tea Café Check-in",
        recipeOrSetting: "f/4.5 · Creative Assist Warm",
        rotationDeg: -2.0,
      },
      {
        image: "/images/equip-feature28c4.jpg",
        captionVi: "Chân dung nắng sớm bãi biển",
        captionEn: "Morning Beach Portrait",
        recipeOrSetting: "Smooth Skin Level 2",
        rotationDeg: 3.0,
      },
    ],
    quickStartSteps: [
      {
        step: "01",
        titleVi: "Tháo dây đeo thời trang & Mở nắp bạc",
        titleEn: "Prep the White Camera & Silver Cap",
        detailVi: "Thân máy trắng đi kèm ống kính bạc 18-45mm và dây đeo vải dệt phong cách retro. Xoay nhẹ mở lens sang vạch 18mm.",
        detailEn: "Matches silver 18-45mm lens and woven strap. Unlock zoom ring to 18mm marker.",
        chalkHighlight: "Vỏ sơn trắng ngọc trai",
      },
      {
        step: "02",
        titleVi: "Bật chế độ Creative Assist (Thanh trượt ma thuật)",
        titleEn: "Activate Creative Assist Sliders",
        detailVi: "Chạm vào biểu tượng cọ vẽ trên màn hình: Kéo thanh trượt 'Làm mờ phông' (Background Blur) và 'Ấm/Lạnh' (Color Tone) trực quan bằng ngón tay.",
        detailEn: "Tap magic paintbrush icon: adjust Background Blur and Warm/Cool color sliders effortlessly.",
        chalkHighlight: "Creative Assist trực quan",
      },
      {
        step: "03",
        titleVi: "Kích hoạt chế độ Smooth Skin (Làm mịn da)",
        titleEn: "Enable Smooth Skin Mode",
        detailVi: "Xoay bánh xe chế độ sang SCN -> chọn 'Smooth Skin'. Máy tự động làm mịn da tự nhiên, giữ trọn độ nét lông mi và ánh mắt.",
        detailEn: "Turn dial to SCN -> Smooth Skin. Softens skin blemishes naturally while keeping eyes sharp.",
        chalkHighlight: "Smooth Skin nịnh da",
      },
      {
        step: "04",
        titleVi: "Gạt lẫy Flash cóc đánh sáng pop-up",
        titleEn: "Pop up Mini Flash for Vintage Glow",
        detailVi: "Dùng ngón tay nhấc nhẹ cụm đèn flash cóc trên đỉnh máy. Chụp phong cách Y2K flash thẳng cực sành điệu trong quán café tối!",
        detailEn: "Gently lift top pop-up flash for chic direct-flash Y2K vintage aesthetic in dim cafes.",
        chalkHighlight: "Flash cóc Y2K pop-up",
      },
    ],
    mechanicalSections: [
      {
        id: "white-features",
        viewTitleVi: "Chi Tiết Thiết Kế Bản Trắng Ngọc Trai",
        viewTitleEn: "White Pearl Exterior & Tactile Details",
        descriptionVi: "Lớp sơn phủ chống ố vàng và bụi bẩn, phối hài hòa cùng báng cầm màu xám tro trang nhã.",
        descriptionEn: "Stain-resistant pearl matte finish paired with soft ash grey textured grip.",
        annotations: [
          {
            number: "01",
            nameVi: "Đèn Flash Cóc Pop-up tích hợp",
            nameEn: "Built-In Pop-Up Mini Flash",
            type: "button",
            color: "amber",
            instructionVi: "Nhấc nhẹ hai bên gờ đỉnh máy để mở flash. Khi chụp xong, dùng tay ấn nhẹ xuống để gập gọn vào thân máy.",
            instructionEn: "Pull gently upwards by the side grooves. Press down flush to fold back after shooting.",
            proTipVi: "Đánh flash trực diện vào buổi tối tạo hiệu ứng ảnh film thập niên 2000 cực kỳ viral trên TikTok!",
            proTipEn: "Direct flash at night yields that coveted early-2000s analog aesthetic.",
          },
          {
            number: "02",
            nameVi: "Báng cầm công thái học bọc da xám",
            nameEn: "Textured Ash Grey Ergonomic Grip",
            type: "dial",
            color: "sage",
            instructionVi: "Báng cầm sâu giúp các bạn nữ cầm chắc tay chỉ bằng một tay, không sợ trơn trượt khi chụp selfie.",
            instructionEn: "Deep sculpted grip tailored for comfortable and secure one-handed selfie holding.",
            proTipVi: "Trọng lượng cả máy và ống kính chỉ nhỉnh hơn cốc trà sữa size L một chút!",
            proTipEn: "Entire kit weighs barely more than a large boba tea cup (~375g).",
          },
        ],
      },
    ],
    faqs: [
      {
        qVi: "Vỏ máy màu trắng có dễ bị dính bẩn khi đi chơi không?",
        qEn: "Does the white finish stain easily outdoors?",
        aVi: "Không, Canon phủ lớp sơn mờ chống bám vân tay và chống bám bụi cao cấp. Tiệm cũng trang bị sẵn bao da bảo vệ và khăn lau micro-fiber trong túi máy.",
        aEn: "Canon uses a stain-resistant matte topcoat. Kit includes a microfiber cleaning cloth.",
      },
      {
        qVi: "Có quay được video khung dọc cho TikTok / Reels không?",
        qEn: "Does it record native vertical video for TikTok/Reels?",
        aVi: "Có! Bạn chỉ cần dựng đứng máy ảnh khi quay, máy sẽ tự động nhận diện và xuất video khung dọc chuẩn 9:16 để đăng ngay lên mạng xã hội.",
        aEn: "Yes! Rotate camera vertically; metadata flags it as native 9:16 vertical video for Reels/TikTok.",
      },
    ],
  },

  "dji-pocket-4": {
    id: "dji-pocket-4",
    name: "DJI OSMO POCKET 4",
    shortName: "Pocket 4",
    subtitleVi: "Sổ tay quay video mượt mà & Gimbal 3 trục thông minh",
    subtitleEn: "Smart 3-Axis Gimbal & Ultra-Smooth Pocket Creator Notebook",
    categoryVi: "Camera bỏ túi · Gimbal chống rung cơ học 3 trục · 4K 120p · Màn hình xoay",
    categoryEn: "Pocket Camera · 3-Axis Mechanical Gimbal · 4K 120p · Rotating Screen",
    taglineVi: "Bỏ túi gọn gàng, xoay màn hình để khởi động trong 1 giây, lia máy mượt mà không rung lắc.",
    taglineEn: "Pocket-sized mechanical stabilizer, rotating quick-wake display, and rock-steady 4K footage.",
    glbModel: "/pocket-4-hq.glb",
    heroImage: "/images/remus-set-2fc87.jpg",
    coverAspect: "3/2",
    accentColor: "#312922",
    tapeColor: "#DCCBBC",
    polaroids: [
      {
        image: "/images/podcast-set6c9c.jpg",
        captionVi: "Quay vừa đi dạo cầu Rồng vừa nói chuyện",
        captionEn: "Walking Vlog on Dragon Bridge",
        recipeOrSetting: "4K 60p · ActiveTrack 6.0",
        rotationDeg: -3.0,
      },
      {
        image: "/images/studio-setd3f4.jpg",
        captionVi: "Góc rộng 20mm bắt trọn khung cảnh",
        captionEn: "Ultra-wide 20mm Scenic View",
        recipeOrSetting: "Slow Motion 120p · D-Log M",
        rotationDeg: 2.5,
      },
    ],
    quickStartSteps: [
      {
        step: "01",
        titleVi: "Xoay ngang màn hình để MỞ MÁY tức thì",
        titleEn: "Rotate Screen to Instantly Power ON",
        detailVi: "Cử chỉ ma thuật của Pocket: Dùng ngón tay xoay màn hình từ dọc sang ngang, cụm gimbal sẽ tự động mở khóa và sẵn sàng quay trong 1 giây!",
        detailEn: "The signature Pocket gesture: Rotate screen 90° horizontally to wake and unlock the gimbal in 1s.",
        chalkHighlight: "Cử chỉ xoay màn hình mở nguồn",
      },
      {
        step: "02",
        titleVi: "Chạm đúp vào mặt để khóa theo dõi (ActiveTrack)",
        titleEn: "Double-Tap Subject to Lock ActiveTrack",
        detailVi: "Chạm đúp ngón tay vào khuôn mặt trên màn hình cảm ứng. Đầu camera sẽ tự động quay theo chuyển động của bạn dù bạn đi tới đâu!",
        detailEn: "Double tap your face on the touch LCD. The mechanical head tracks you anywhere you walk.",
        chalkHighlight: "ActiveTrack bám mặt tự động",
      },
      {
        step: "03",
        titleVi: "Dùng cần Joystick mini để lia góc quay",
        titleEn: "Use Mini Joystick for Smooth Pans",
        detailVi: "Gạt nhẹ cần điều khiển mini: gạt sang trái/phải để lia góc nhìn mượt như phim điện ảnh, gạt lên/xuống để ngửa cụm camera.",
        detailEn: "Nudge mini joystick left/right to pan smoothly like a cinema dolly, or up/down to tilt.",
        chalkHighlight: "Cần Joystick mini cơ học",
      },
      {
        step: "04",
        titleVi: "Bấm 3 lần nút chuyển để quay camera về mình",
        titleEn: "Triple-Click Mode Button for Selfie Mode",
        detailVi: "Bấm nút chuyển chế độ 3 lần liên tiếp: cụm camera sẽ tự động xoay 180° quay ngược lại đối diện bạn để trò chuyện vlog.",
        detailEn: "Triple-click function button: camera flips 180° instantly to selfie talk mode.",
        chalkHighlight: "Lật camera 180° tự sướng",
      },
    ],
    mechanicalSections: [
      {
        id: "pocket-gimbal",
        viewTitleVi: "Giải Phẫu Cụm Gimbal Cơ Học 3 Trục",
        viewTitleEn: "3-Axis Mechanical Gimbal Anatomy",
        descriptionVi: "Khác với chống rung điện tử trên điện thoại bị méo góc, gimbal cơ học triệt tiêu rung lắc vật lý 100%.",
        descriptionEn: "Unlike digital smartphone EIS crop, 3-axis brushless motors stabilize physics mechanically.",
        annotations: [
          {
            number: "01",
            nameVi: "Trục Xoay Ngang (Pan Axis Motor)",
            nameEn: "Pan Motor Axis",
            type: "dial",
            color: "blue",
            instructionVi: "Động cơ không chổi than xoay quanh trục 360 độ giúp lia máy êm ái theo nhịp bước chân đi bộ.",
            instructionEn: "Brushless motor providing 360° fluid horizontal tracking along your walking pace.",
            proTipVi: "Chế độ FPV giúp camera nghiêng tự nhiên theo nhịp rẽ cua của bạn khi chạy xe hoặc trượt ván.",
            proTipEn: "FPV mode tilts the camera dynamically with your movement for action sports.",
          },
          {
            number: "02",
            nameVi: "Màn hình cảm ứng OLED xoay đa chiều",
            nameEn: "Rotating 2-Inch OLED Touch Display",
            type: "screen",
            color: "terracotta",
            instructionVi: "Xoay ngang để quay chuẩn 16:9 YouTube/TV, xoay dọc để quay chuẩn 9:16 TikTok/Instagram Reels.",
            instructionEn: "Rotate horizontally for 16:9 cinematic YouTube, rotate vertically for 9:16 Reels/TikTok.",
            proTipVi: "Độ sáng ngoài trời cực cao giúp nhìn rõ dưới ánh nắng biển Đà Nẵng gay gắt.",
            proTipEn: "High peak nits allow crystal-clear preview under blazing beach sunlight.",
          },
          {
            number: "03",
            nameVi: "Cổng USB-C sạc nhanh & Thẻ MicroSD",
            nameEn: "MicroSD Slot & Fast USB-C Port",
            type: "port",
            color: "sage",
            instructionVi: "Khe cắm thẻ nhớ MicroSD tốc độ cao nằm ở cạnh hông. Đáy máy có cổng USB-C sạc đầy 80% chỉ trong 16 phút!",
            instructionEn: "Side MicroSD slot and bottom fast USB-C port: charges to 80% in just 16 minutes.",
            proTipVi: "Có thể gắn thêm tay cầm pin nối dài đi kèm trong hộp để quay liên tục 3 giờ.",
            proTipEn: "Clip on the included battery handle to extend runtime up to 3+ hours continuous recording.",
          },
        ],
      },
    ],
    faqs: [
      {
        qVi: "Làm sao để cất máy vào túi mà không làm hỏng cụm gimbal?",
        qEn: "How to safely pack the gimbal into a pocket?",
        aVi: "Khi bạn xoay màn hình về vị trí tắt máy, cụm camera sẽ tự động khóa góc nhìn và quay vào trong. Tiệm luôn trang bị kèm ốp bảo vệ cứng (Hard Case) để bạn an tâm đút túi quần.",
        aEn: "Upon power down, the gimbal automatically parks flush. Always slip into the included hard case.",
      },
      {
        qVi: "Âm thanh thu vào có bị lẫn tiếng gió biển không?",
        qEn: "Does it filter out coastal wind noise?",
        aVi: "Máy tích hợp 3 mic thu đa hướng có lọc gió thông minh. Trong túi thuê máy, tiệm tặng kèm đầu lọc gió lông xù (deadcat) cắm trực tiếp vào máy để lọc sạch 100% tiếng gió biển.",
        aEn: "Built-in 3-mic array with AI noise reduction plus an included fluffy deadcat windscreen.",
      },
    ],
  },
};

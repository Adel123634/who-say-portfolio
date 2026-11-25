// كل المحتوى هنا. لإضافة براند: انسخ سطر وغيّر البيانات، وحط ملفاته في assets.
// Logo:    assets/logos/<slug>.png
// Reels:   assets/reels/<slug>/1.mp4, 2.mp4 ...  (غلاف اختياري: 1.jpg, 2.jpg ...)
// Designs: assets/designs/<slug>/1.jpg, 2.jpg ...
window.SITE = {
  whatsapp: "201016631573", // ضع الرقم بصيغة دولية بدون + مثال: 201000000000
  services: [
    { name: "Media Coverage", img: "assets/services/media-coverage.png" },
    { name: "Wedding Service", img: "assets/services/wedding-service.png" }
  ],
  brands: [
    { slug: "mashhour", name: "مشهور", reels: 4 },
    { slug: "jacob", name: "Jacob", reels: 3 },
    { slug: "cocca", name: "Cocca", reels: 6 },
    { slug: "alzaafaran", name: "Alzaafaran", reels: 2 },
    { slug: "vaganza", name: "Vaganza", reels: 4 },
    { slug: "ash", name: "ASH", reels: 3 },
    { slug: "zed-events", name: "Zed Events", reels: 4 },
    { slug: "renaissance-cinemas", name: "Renaissance Cinemas", reels: 5 },
    { slug: "al-shafey", name: "Al Shaf3y", reels: 2, designs: 3 },
    { slug: "hunting-shooting-range", name: "Hunting Shooting Range", reels: 1 },
    { slug: "tseppas", name: "Tseppas", reels: 1 },
    { slug: "fawzy-el-banan", name: "فوزي البنان", reels: 5 },
    { slug: "farghly-fruits", name: "Farghly Fruits", reels: 4 },
    { slug: "haret-al-muizz", name: "Haret Al-Mu’izz", reels: 1 },
    { slug: "top-shop", name: "Top Shop", reels: 5 },
    { slug: "lupobianco", name: "Lupobianco", reels: 5 },
    { slug: "swift-go", name: "Swift Go", reels: 3 },
    { slug: "seketna-way", name: "Seketna Way", reels: 4 }
  ]
};
const CLOUD = "https://res.cloudinary.com/a0biqlz4/video/upload/";

const cloudVideos = {
  "ash": [
    "v1795479096/2026_11_19_16_01_30_IMG_8611.mp4"
  ],

  "farghly-fruits": [
    "v1795479096/2026_11_21_04_55_07_IMG_8651.mp4",
    "v1795479084/2025_07_30_16_02_39_IMG_8649.mp4",
    "v1795479084/2026_11_21_04_55_31_IMG_8652.mp4",
    "v1795479033/2026_11_21_04_54_32_IMG_8650.mp4"
  ],

  "jacob": [
    "f_mp4/v1795479238/2025_09_17_17_45_59_IMG_0350.mov"
  ],

  "seketna-way": [
    "v1795479372/2026_11_21_04_46_07_IMG_8645.mp4",
    "v1795479354/2026_11_21_04_46_56_IMG_8647.mp4",
    "v1795479340/2026_11_21_04_47_39_IMG_8648.mp4",
    "v1795479309/2026_11_21_04_45_47_IMG_8644.mp4",
    "v1795479266/2026_11_21_04_46_35_IMG_8646.mp4"
  ],

  "swift-go": [
    "v1795479404/2026_11_21_04_43_43_IMG_8639.mp4",
    "v1795479373/2026_11_21_04_44_16_IMG_8641.mp4",
    "v1795479371/2026_11_21_04_44_34_IMG_8642.mp4",
    "v1795479341/2026_11_21_04_43_59_IMG_8640.mp4"
  ],

  "vaganza": [
    "v1795479396/2025_04_29_01_17_07_IMG_6303.mp4",
    "v1795479390/2025_04_29_01_15_38_IMG_6300.mp4",
    "v1795479390/2025_04_29_01_16_45_IMG_6302.mp4",
    "v1795479385/2025_04_29_01_14_54_IMG_6299.mp4"
  ],

  "zed-events": [
    "v1795479842/2026_11_21_04_37_27_IMG_8632.mp4",
    "v1795479521/2026_11_21_04_37_56_IMG_8633.mp4",
    "v1795479473/2026_11_21_04_36_02_IMG_8630.mp4",
    "v1795479441/2026_11_21_04_37_04_IMG_8631.mp4"
  ],

  "al-shafey": [
    "v1795479513/2026_11_21_04_41_47_IMG_8638.mp4",
    "v1795479475/2026_11_21_04_41_31_IMG_8637.mp4"
  ],

  "top-shop": [
    "v1795479570/2026_11_21_04_04_56_IMG_8600.mp4",
    "v1795479542/2026_11_21_04_04_41_IMG_8599.mp4",
    "v1795479536/2026_11_21_04_05_16_IMG_8601.mp4",
    "v1795479525/2026_11_21_04_04_25_IMG_8598.mp4"
  ],

  "fawzy-el-banan": [
    "v1795479525/2026_11_21_04_04_25_IMG_8598.mp4",
    "v1795479576/2026_11_21_03_57_53_IMG_8596.mp4",
    "v1795479569/2026_11_21_03_57_26_IMG_8595.mp4"
  ],

  "cocca": [
    "v1795479621/2026_11_19_18_49_49_IMG_0397.mp4",
    "v1795479696/2026_11_19_18_42_31_IMG_0398.mp4"
  ],

  "lupobianco": [
    "v1795479760/2026_11_21_04_09_04_IMG_8605.mp4",
    "v1795479727/2026_11_21_04_09_24_IMG_8606.mp4",
    "v1795479700/2026_11_21_04_08_40_IMG_8604.mp4"
  ]
};

window.SITE.brands.forEach(b => {
  if (cloudVideos[b.slug]) {
    b.videoUrls = cloudVideos[b.slug].map(path => CLOUD + path);
    b.reels = b.videoUrls.length;
  }
});

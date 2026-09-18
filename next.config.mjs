import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function syncAssets() {
  try {
    const parentHaha = path.resolve(__dirname, "../haha/cinefy.com.vn");
    if (!fs.existsSync(parentHaha)) return;

    const brandSrc = path.join(parentHaha, "wp-content/themes/cinefy/assets/brand");
    const imgSrc = path.join(parentHaha, "wp-content/themes/cinefy/assets/img");
    const videoSrc = path.join(parentHaha, "wp-content/themes/cinefy/assets/video");
    const uploadsSrc = path.join(parentHaha, "wp-content/uploads");

    const brandDest = path.join(__dirname, "public/brand");
    const imgDest = path.join(__dirname, "public/images");
    const videoDest = path.join(__dirname, "public/video");
    const uploadsDest = path.join(__dirname, "public/uploads");
    const wpThemesDest = path.join(__dirname, "public/wp-content/themes/cinefy/assets");

    if (fs.existsSync(brandSrc) && !fs.existsSync(path.join(brandDest, "cinefy-logo.svg"))) {
      fs.cpSync(brandSrc, brandDest, { recursive: true });
    }
    if (fs.existsSync(imgSrc) && !fs.existsSync(path.join(imgDest, "hero-cinematiccbed.jpg"))) {
      fs.cpSync(imgSrc, imgDest, { recursive: true });
    }
    if (fs.existsSync(videoSrc) && !fs.existsSync(path.join(videoDest, "studio_cyc7989.mp4"))) {
      fs.cpSync(videoSrc, videoDest, { recursive: true });
    }
    if (fs.existsSync(uploadsSrc)) {
      const existing = fs.existsSync(uploadsDest) ? fs.readdirSync(uploadsDest) : [];
      if (existing.length === 0) {
        fs.cpSync(uploadsSrc, uploadsDest, { recursive: true });
      }
    }
    if (!fs.existsSync(wpThemesDest)) {
      fs.mkdirSync(wpThemesDest, { recursive: true });
      if (fs.existsSync(brandSrc)) fs.cpSync(brandSrc, path.join(wpThemesDest, "brand"), { recursive: true });
      if (fs.existsSync(imgSrc)) fs.cpSync(imgSrc, path.join(wpThemesDest, "img"), { recursive: true });
      if (fs.existsSync(videoSrc)) fs.cpSync(videoSrc, path.join(wpThemesDest, "video"), { recursive: true });
    }
    const wpUploadsDest = path.join(__dirname, "public/wp-content/uploads");
    if (fs.existsSync(uploadsSrc)) {
      const existing = fs.existsSync(wpUploadsDest) ? fs.readdirSync(wpUploadsDest) : [];
      if (existing.length === 0) {
        fs.cpSync(uploadsSrc, wpUploadsDest, { recursive: true });
      }
    }
  } catch (err) {
    console.warn("Asset sync note:", err?.message || err);
  }
}

syncAssets();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

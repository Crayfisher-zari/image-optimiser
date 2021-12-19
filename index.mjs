import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

(async () => {
  const mode = process.argv[2];
  if (mode === "optimise") {
    await imagemin(["images/*.{jpg,png}"], {
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.95, 1] }),
      ],
      destination: "dist/",
    });
  }
  if (mode === "convert-webp") {
    await imagemin(["images/*.{jpg,png}"], {
      plugins: [imageminWebp({ quality: 80 })],
      destination: "dist/",
    });
  }
})();

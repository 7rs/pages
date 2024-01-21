
[sharp-cli]: https://github.com/vseventer/sharp-cli  
[sharp-cli/resize.js]: https://github.com/vseventer/sharp-cli/blob/master/cmd/resizing/resize.js  
[sharp-api-docs/resize]: https://sharp.pixelplumbing.com/api-resize  

# Compress images  

## Defined command sets  

  ```sh
  ```

## Usage in CLI  

  ```sh
  # avatar
  wget "https://unsplash.com/photos/7bynNtRqu4E/download?force=true" -O "./src/assets/7bynNtRqu4E.jpg"
  sharp resize 240 240 --position "top" -i "./src/assets/7bynNtRqu4E.jpg" -o "./src/assets/avatar.jpg" --format "jpg" --mozjpeg --nearLossless

  # background
  wget "https://unsplash.com/photos/yZygONrUBe8/download?force=true" -O "./src/assets/yZygONrUBe8.jpg"
  sharp resize 1280 720 --fit "cover" --position "bottom" -i "./src/assets/yZygONrUBe8.jpg" -o "./src/assets/background.jpg" --format "jpg"  --mozjpeg --nearLossless
  #123kb

  # dark background
  wget "https://unsplash.com/photos/Q1p7bh3SHj8/download?force=true" -O "./src/assets/Q1p7bh3SHj8.jpg"
  sharp resize 1280 720 --fit "cover" -i "./src/assets/Q1p7bh3SHj8.jpg" -o "./src/assets/dark-background.jpg" --format "jpg"  --mozjpeg --nearLossless
  ```

### Commands  

  ```sh
  # Resize image to width, height, or width × height.
  sharp resize [width] [height]

  # auto-scaled height.
  sharp resize [width]

  # auto-scaled width.
  sharp resize --height [height]

  # Rotate the output image.
  sharp rotate [angle]

  # Remove alpha channel, if any.
  sharp removeAlpha
  ```

### Options  

  ```sh
  # Path to (an) image file(s)
  -i, --input [array | string]

  # Directory or URI template to write the image files to
  -o, --output [string]

  # Force output to a given format
  -f, --format [string]
    ["avif", "gif", "heif", "jpeg", "jpg", "png", "raw", "tiff", "webp"]

  #  Use mozjpeg defaults
  --mozjpeg

  # Use lossless compression mode
  --lossless

  # Use near_lossless compression mode
  --nearLossless

  # Quality
  -q, --quality [1-100]

  # zlib compression level
  -c, --compressionLevel [0-9]

  # TODO
  --optimize
  --progressive --optimizeScans
  --overshootDeringing
  --trellisQuantisation
  ```  

### Refs  

- [vseventer/sharp-cli][sharp-cli]  
- [sharp-cli/cmd/resizing/resize.js][sharp-cli/resize.js]  
- [api-resize][sharp-api-docs/resize]  


[sharp-cli]: https://github.com/vseventer/sharp-cli  
[sharp-cli/resize.js]: https://github.com/vseventer/sharp-cli/blob/master/cmd/resizing/resize.js  
[sharp-api-docs/resize]: https://sharp.pixelplumbing.com/api-resize  

# Compress images  

## Defined command sets  

  ```sh
  ```

## Usage in CLI  

  ```sh
  # default
  wget "https://unsplash.com/photos/yZygONrUBe8/download?force=true" -O "./src/assets/background/yZygONrUBe8.jpg"
  wget "https://unsplash.com/photos/Q1p7bh3SHj8/download?force=true" -O "./src/assets/background/Q1p7bh3SHj8.jpg"

  # blog
  wget "https://unsplash.com/photos/E8Ufcyxz514/download?force=true" -O "./src/assets/background/E8Ufcyxz514.jpg"
  wget "https://unsplash.com/photos/ZkzobNDayXo/download?force=true" -O "./src/assets/background/ZkzobNDayXo.jpg"

  # tas
  wget "https://unsplash.com/photos/PGdW_bHDbpI/download?force=true" -O "./src/assets/background/PGdW_bHDbpI.jpg"
  wget "https://unsplash.com/photos/DX7pT_guAyE/download?force=true" -O "./src/assets/background/DX7pT_guAyE.jpg"
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

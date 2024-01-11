
[sharp-cli]: https://github.com/vseventer/sharp-cli  
[sharp-cli/resize.js]: https://github.com/vseventer/sharp-cli/blob/master/cmd/resizing/resize.js  
[sharp-api-docs/resize]: https://sharp.pixelplumbing.com/api-resize  

# Compress images  

## Defined command sets  

  ```sh
  ```

## Usage in CLI  

  ```sh
  # original -> 4256x2842
  # 20:9     -> 4256x1915
  # 16:9     -> 4256x2394
  # 4:3      -> 3776x2842
  # 9:20     -> 1279x2842
  # 9:16     -> 1066x2842
  # 3:4      -> 2131x2842

  sharp resize 3776 2842 -i "./src/assets/wallpapers/original_Q1p7bh3SHj8.jpg" -o "./src/assets/wallpapers/4-3_Q1p7bh3SHj8.jpg" --format "jpg"  --mozjpeg --nearLossless
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
  -c, --compressionLevel [1-6?]
  ```  

### Refs  

- [vseventer/sharp-cli][sharp-cli]  
- [sharp-cli/cmd/resizing/resize.js][sharp-cli/resize.js]  
- [api-resize][sharp-api-docs/resize]  

# Download -> PNG -> AVIF (Near lossless)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-nll.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  


# Download -> PNG -> AVIF (Quality: 80)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-80.avif" --format "avif" --quality 80 --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  


# Download -> PNG -> mozjpeg (Near lossless)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-nll.jpg" --format "jpg" --mozjpeg --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  


# Download -> PNG -> mozjpeg (Quality: 80)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-80.jpg" --format "jpg" --mozjpeg --quality 80 --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  


# Download -> PNG -> WEBP (Near lossless)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-nll.webp" --format "webp" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  


# Download -> PNG -> WEBP (Quality: 80)  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatar-80.webp" --format "webp" --quality 80 --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  
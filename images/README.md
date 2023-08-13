# Downloads & Edits  

```bash
wget "https://unsplash.com/photos/7bynNtRqu4E/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwMDQ1Mjc4fA&force=true" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar0.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

```bash Vegeta
wget "https://i.pinimg.com/originals/d5/df/fc/d5dffc442e15a51b292fcb548f23d98a.jpg" -O "temp.jpg" && ffmpeg -i "temp.jpg" -vf crop=ih:ih:60:0 -y "temp.png" && ffmpeg -i "temp.png" -filter_complex scale=240:-1:flags=lanczos -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar1.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

```bash Luffy
wget "https://i.pinimg.com/originals/0b/91/9d/0b919de45a454b5d8db0f83281476be0.jpg" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar2.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

```bash Goku
wget "https://i.pinimg.com/originals/87/de/50/87de5032709fab2fc5d610a79e9fcabe.jpg" -O "temp.jpg" && ffmpeg -i "temp.jpg" -vf crop=ih:ih:286:0 -y "temp.png" && ffmpeg -i "temp.png" -filter_complex scale=240:-1:flags=lanczos -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar3.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

```bash Chrollo
wget "https://i.pinimg.com/originals/b2/40/a6/b240a6b6e0a52f322780de3602cb0dfc.jpg" -O "temp.jpg" && ffmpeg -i "temp.jpg" -filter_complex scale=240:-1:flags=lanczos -y "temp.png" && ffmpeg -i "temp.png" -vf crop=240:240:0:0 -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar4.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

```bash Soul
wget "https://i.pinimg.com/originals/e7/3b/c0/e73bc03c8f6c5c4664b6086e07b5c37b.jpg" -O "temp.jpg" && ffmpeg -i "temp.jpg" -vf crop=ih:ih:190:0 -y "temp.png" && ffmpeg -i "temp.png" -filter_complex scale=240:-1:flags=lanczos -y "temp2.png" && sharp --input "temp2.png" --output "../public/avatars/avatar5.avif" --format "avif" --nearLossless --effort 6 --compression "zstd" --compressionLevel 9 --optimize && rm -rf temp*
```  

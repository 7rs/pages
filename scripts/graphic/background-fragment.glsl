precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

// 疑似ランダム関数
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// ノイズ関数
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  
  vec2 u = f * f * (3.0 - 2.0 * f);
  
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  
  // 時間ベースのランダムな色変化
  vec2 timeUV1 = uv + u_time * 0.1;
  vec2 timeUV2 = uv + u_time * 0.15;
  vec2 timeUV3 = uv + u_time * 0.08;
  
  float r = 0.3 + 0.7 * noise(timeUV1 * 4.0);
  float g = 0.3 + 0.7 * noise(timeUV2 * 3.5);
  float b = 0.3 + 0.7 * noise(timeUV3 * 5.0);
  
  gl_FragColor = vec4(r, g, b, 1.0);
}

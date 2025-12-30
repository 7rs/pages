#define KERNEL_SIZE 31
precision mediump float;
uniform sampler2D u_image;
uniform vec2 u_textureSize;
uniform int u_direction;
uniform float u_kernel[KERNEL_SIZE];

void main() {
  vec2 textCoord = gl_FragCoord.xy / u_textureSize;
  vec2 onePixel = ((u_direction == 0) ? vec2(1.0, 0.0) : vec2(0.0, 1.0)) / u_textureSize;
  vec4 meanColor = vec4(0);
  int ms = KERNEL_SIZE / 2;
  for (int i = 0; i < KERNEL_SIZE; i++) {
    meanColor += texture2D(u_image, textCoord + onePixel * float(i - ms) * 4.0) * u_kernel[i];
  }
  gl_FragColor = meanColor;
}


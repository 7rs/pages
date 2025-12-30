// SVGパス事前解析
export function parseSVGPathStatic(pathString: string): number[] {
  const vertices: number[] = [];
  let currentX = 0,
    currentY = 0;
  let startX = 0,
    startY = 0;

  const pathData = pathString
    .replace(/([MmLlHhVvCcSsQqTtAaZz])/g, "|$1")
    .split("|")
    .filter((s) => s.length > 0);

  for (let segment of pathData) {
    const command = segment[0];
    const args = segment.slice(1).match(/[-+]?(?:\d*\.?\d+(?:[eE][-+]?\d+)?)/g);
    const numbers = args ? args.map(parseFloat) : [];

    switch (command) {
      case "M":
        currentX = numbers[0];
        currentY = numbers[1];
        startX = currentX;
        startY = currentY;
        vertices.push(currentX, currentY);
        break;

      case "C":
        for (let i = 0; i < numbers.length; i += 6) {
          if (i + 5 < numbers.length) {
            const cp1x = numbers[i];
            const cp1y = numbers[i + 1];
            const cp2x = numbers[i + 2];
            const cp2y = numbers[i + 3];
            const endX = numbers[i + 4];
            const endY = numbers[i + 5];

            for (let t = 0.01; t <= 1; t += 0.01) {
              const x =
                Math.pow(1 - t, 3) * currentX +
                3 * Math.pow(1 - t, 2) * t * cp1x +
                3 * (1 - t) * Math.pow(t, 2) * cp2x +
                Math.pow(t, 3) * endX;
              const y =
                Math.pow(1 - t, 3) * currentY +
                3 * Math.pow(1 - t, 2) * t * cp1y +
                3 * (1 - t) * Math.pow(t, 2) * cp2y +
                Math.pow(t, 3) * endY;
              vertices.push(x, y);
            }

            currentX = endX;
            currentY = endY;
          }
        }
        break;

      case "Z":
      case "z":
        if (vertices.length >= 4) {
          vertices.push(startX, startY);
        }
        break;
    }
  }

  return vertices;
}

// ガウシアンカーネル事前計算
export function generateGaussianKernel(size: number, sigma: number): number[] {
  const kernel: number[] = [];
  let sum = 0.0;
  const half = Math.floor(size / 2);

  for (let i = 0; i < size; i++) {
    const x = i - half;
    const weight = Math.exp(-(x * x) / (2 * sigma * sigma));
    kernel.push(weight);
    sum += weight;
  }

  // 正規化
  for (let i = 0; i < size; i++) {
    kernel[i] /= sum;
  }

  return kernel;
}

// 楕円頂点事前計算
export function generateEllipseVertices(cx: number, cy: number, rx: number, ry: number, segments: number = 100): number[] {
  const vertices: number[] = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = cx + Math.cos(angle) * rx;
    const y = cy + Math.sin(angle) * ry;
    vertices.push(x, y);
  }
  return vertices;
}

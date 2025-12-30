import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ShaderSources } from './types.d.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function loadShader(filename: string): string {
  const shaderPath = join(__dirname, filename);
  return readFileSync(shaderPath, 'utf-8');
}

export function loadAllShaders(): ShaderSources {
  return {
    vertex: loadShader('vertex.glsl'),
    fragment: loadShader('fragment.glsl'),
    postVertex: loadShader('post-vertex.glsl'),
    postFragment: loadShader('post-fragment.glsl'),
    backgroundVertex: loadShader('background-vertex.glsl'),
    backgroundFragment: loadShader('background-fragment.glsl'),
  };
}

import { Plugin } from 'vite';
import { readFileSync } from 'fs';

export default function svgToString(): Plugin {
  return {
    name: 'svg-to-string',
    transform(src, id) {
      if (id.endsWith('.svg')) {
        const svg = readFileSync(id, 'utf-8');
        return `export default ${JSON.stringify(svg)}`;
      }
    },
  };
}

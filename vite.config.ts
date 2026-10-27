import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function persistImagesPlugin() {
  const targetMap: Record<string, string[]> = {
    avatar: ['src/assets/images/kenneth-portrait.png', 'public/kenneth-portrait.png'],
    tizela: ['src/assets/images/tizela_showcase_1792446059964.jpg', 'public/assets/images/tizela_showcase_1792446059964.jpg'],
    circle: ['src/assets/images/circle_showcase_1792446122933.jpg', 'public/assets/images/circle_showcase_1792446122933.jpg'],
    sarko: ['src/assets/images/circle_showcase_1792446122933.jpg', 'public/assets/images/circle_showcase_1792446122933.jpg'],
    examcrush: ['src/assets/images/examcrush_showcase_1792446076851.jpg', 'public/assets/images/examcrush_showcase_1792446076851.jpg'],
    helizah: ['src/assets/images/helizah_fashion_showcase_1791989371094.jpg', 'public/assets/images/helizah_fashion_showcase_1791989371094.jpg'],
    digiverse: ['src/assets/images/digiverse_showcase_1792446137932.jpg', 'public/assets/images/digiverse_showcase_1792446137932.jpg'],
    beatstream: ['src/assets/images/beatstream_showcase_1792446094557.jpg', 'public/assets/images/beatstream_showcase_1792446094557.jpg'],
    primedial: ['src/assets/images/primedial_showcase_1792446109618.jpg', 'public/assets/images/primedial_showcase_1792446109618.jpg'],
    primedeal: ['src/assets/images/primedial_showcase_1792446109618.jpg', 'public/assets/images/primedial_showcase_1792446109618.jpg'],
    'prime-deal': ['src/assets/images/primedial_showcase_1792446109618.jpg', 'public/assets/images/primedial_showcase_1792446109618.jpg'],
    globatrybe: ['src/assets/images/globatrybe_showcase_1792446157979.jpg', 'public/assets/images/globatrybe_showcase_1792446157979.jpg'],
    globaltribe: ['src/assets/images/globatrybe_showcase_1792446157979.jpg', 'public/assets/images/globatrybe_showcase_1792446157979.jpg'],
    'global-tribe': ['src/assets/images/globatrybe_showcase_1792446157979.jpg', 'public/assets/images/globatrybe_showcase_1792446157979.jpg'],
  };

  return {
    name: 'persist-images-middleware',
    configureServer(server: any) {
      server.middlewares.use('/api/persist-images', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { images } = JSON.parse(body || '{}');
              if (images && typeof images === 'object') {
                for (const [key, dataUrl] of Object.entries(images)) {
                  if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
                    const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
                    if (matches && matches[2]) {
                      const buffer = Buffer.from(matches[2], 'base64');
                      const filePaths = targetMap[key.toLowerCase()] || [];
                      for (const relPath of filePaths) {
                        const fullPath = path.resolve(process.cwd(), relPath);
                        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
                        fs.writeFileSync(fullPath, buffer);
                      }
                    }
                  }
                }
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), persistImagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

/**
 * Utility functions for client-side image compression, persistent caching,
 * and seamless key alias synchronization for Kenneth Uyiosa's portfolio.
 */

export const PROJECT_ALIASES: Record<string, string[]> = {
  primedial: ['primedial', 'primedeal', 'prime-deal', 'primedial-solutions'],
  globatrybe: ['globatrybe', 'globaltribe', 'global-tribe'],
  circle: ['circle', 'sarko'],
  helizah: ['helizah', 'eliza'],
  beatstream: ['beatstream', 'beastream'],
};

/**
 * Returns canonical project ID for any known variation
 */
export function normalizeProjectId(id: string): string {
  const lower = id.toLowerCase().trim();
  for (const [canonical, aliases] of Object.entries(PROJECT_ALIASES)) {
    if (canonical === lower || aliases.includes(lower)) {
      return canonical;
    }
  }
  return lower;
}

/**
 * Compresses an image file client-side using Canvas to ensure it easily fits in
 * localStorage without exceeding browser quota limits (prevents silent loss on reload).
 */
export async function compressImageFile(
  file: File,
  maxDimension = 1600,
  quality = 0.88
): Promise<string> {
  return new Promise((resolve) => {
    // If not an image or running without window, fallback to standard reader
    if (!file.type.startsWith('image/') || typeof window === 'undefined') {
      const fallbackReader = new FileReader();
      fallbackReader.onload = () => resolve(fallbackReader.result as string);
      fallbackReader.onerror = () => resolve('');
      fallbackReader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Keep PNG transparency if it is a PNG with alpha, else JPEG for 90% size reduction
        const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        const compressedDataUrl = canvas.toDataURL(mimeType, quality);
        resolve(compressedDataUrl);
      };

      img.onerror = () => {
        resolve(e.target?.result as string);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

const STORAGE_KEY = 'uyiosa_portfolio_custom_images';

/**
 * Safely load custom images from localStorage
 */
export function loadSavedCustomImages(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    const cleaned: Record<string, string> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === 'string' && (v.startsWith('data:') || v.startsWith('blob:') || v.startsWith('http') || v.startsWith('/'))) {
        cleaned[k] = v;
      }
    }
    return cleaned;
  } catch (e) {
    console.warn('Failed reading custom images from storage', e);
    return {};
  }
}

/**
 * Save custom images with alias mirroring and quota recovery
 */
export function persistCustomImages(images: Record<string, string>): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    return true;
  } catch (e) {
    console.warn('Storage quota exceeded, attempting trim', e);
    // If quota exceeded, store only the most essential keys (avatar + current projects)
    try {
      const minimal: Record<string, string> = {};
      const keys = Object.keys(images);
      for (const k of keys.slice(-4)) {
        minimal[k] = images[k];
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(minimal));
      return true;
    } catch {
      return false;
    }
  }
}

/**
 * Clear all local browser overrides and restore official permanent repo photos
 */
export function clearAllCustomImages(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Could not clear custom images', e);
  }
}

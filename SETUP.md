# Book Quiz Online - Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Before Going Live

### 1. Assets You Need to Add

The following directories need to be populated with assets:

#### `public/img/bookcovers/`
Add book cover images (JPG/PNG) for each book:
- confesiones-mascara.jpg
- elogio-sombra.jpg
- indigno-humano.jpg
- vida-contemplativa.jpg
- ausencia-oriente.jpg
- hegel-poder.jpg
- civilizacion-inconsciente.jpg
- ortigas.jpg
- tormenta-flores.jpg
- momo.jpg
- metamorfosis.jpg
- brujeria-chicas.jpg
- policia-memoria.jpg
- arcoiris-gravedad.jpg
- sombra-tiempo.jpg
- sombra-innsmouth.jpg
- alice-mesa.jpg
- ojo-mundo.jpg
- carl-mazmorrero.jpg
- zangetsuki.jpg
- solaris.jpg
- berserk.jpg
- mujina.jpg
- bibliomania.jpg
- barrio-lejano.jpg
- perro-estrellas.jpg
- punpun.jpg
- solanin.jpg
- parasyte.jpg

#### `public/img/others/`
Required images from original PMD quiz:
- pmdtextbox.png (text box border)
- dreambackloop.png (background animation)
- dreamfrontloop.png (foreground animation)

#### `public/audio/`
Optional audio files:
- quiz-music.ogg (background music)
- select-sound.mp3 (button click sound)

#### `public/`
Optional assets:
- pkmn-font.ttf (custom font file)
- timegear.svg (favicon)

### 2. Verify Configuration

✅ Checked:
- `package.json` - All dependencies installed
- `vite.config.js` - Vite configuration ready
- `svelte.config.js` - Svelte compiler configured
- `tailwind.config.cjs` - Tailwind CSS configured
- `src/app.postcss` - CSS processing configured
- `public/lang/en/` - All language files present
- `public/books-data.json` - Book metadata complete
- All Svelte components are in place

### 3. Environment Setup

Create `.env` file if needed:

```env
VITE_BASE=/
```

### 4. Build for Production

```bash
# Build optimized version
npm run build

# Test production build locally
npm run preview
```

## Troubleshooting

### Module Not Found Errors

If you get errors about missing modules:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CSS Not Appearing

Make sure `src/app.postcss` is imported in `src/main.js`. It should contain:

```javascript
import "./app.postcss";
```

### Font Not Loading

If the custom font doesn't load, either:
1. Add `pkmn-font.ttf` to `public/` folder, or
2. Remove the `@font-face` rule from `src/app.postcss`

## File Structure Summary

```
✅ Completed:
├── src/
│   ├── App.svelte
│   ├── app.postcss
│   ├── main.js
│   └── lib/
│       ├── Answer.svelte
│       ├── Question.svelte
│       ├── QuestionSystem.svelte
│       ├── ResultScreen.svelte
│       ├── NatureDecriptor.svelte
│       └── RadialChart.svelte
├── public/
│   ├── books-data.json ✅
│   └── lang/en/
│       ├── natures-en.json ✅
│       ├── questions-en.json ✅
│       ├── naturedescription-en.json ✅
│       ├── natures-to-books-en.json ✅
│       └── strings-en.json ✅
├── index.html ✅
├── package.json ✅
├── vite.config.js ✅
├── svelte.config.js ✅
├── tailwind.config.cjs ✅
└── postcss.config.cjs ✅

⚠️  TODO:
├── public/img/bookcovers/ (add 29 book cover images)
├── public/img/others/ (add background images if desired)
├── public/audio/ (add music and sounds if desired)
└── public/pkmn-font.ttf (add custom font if desired)
```

## Next Steps

1. ✅ Clone/setup repository
2. ✅ Install dependencies (`npm install`)
3. ⚠️ Add book cover images
4. ⚠️ Add optional assets (images, audio, fonts)
5. ✅ Run development server (`npm run dev`)
6. ✅ Test quiz functionality
7. ✅ Build for production (`npm run build`)
8. ✅ Deploy to hosting service

## Deployment

The project is ready to deploy to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

Build and deploy:

```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## Support

For issues or questions, please open an issue on GitHub.

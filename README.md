# Book Personality Quiz Online

A web-based personality quiz that matches your personality to one of 29 thought-provoking books. Inspired by the Pokemon Mystery Dungeon personality test, this quiz uses a sophisticated algorithm to determine your book match based on your answers.

## About

This is a transformation of the original PMD EoS personality test, redesigned to match personalities with 29 carefully selected books spanning genres like philosophy, contemporary fiction, manga, and dark fantasy.

## Features

- **29 Unique Book Personalities** - Each with custom descriptions and metadata
- **Two Quiz Modes**:
  - Normal Quiz: 10 random questions
  - Full Quiz: All 29 questions
- **Beautiful UI** - Responsive design with smooth animations
- **Personality Radar Chart** - Visual representation of your affinity with all book types
- **Book Details** - View title, author, and description for your matched books
- **Multi-language Ready** - Built to support multiple languages

## Books Included

1. Confesiones de una máscara (Yukio Mishima)
2. El elogio de la sombra (Junichiro Tanizaki)
3. Indigno de ser humano (Osamu Dazai)
4. Vida contemplativa. Elogio de la inactividad (Byung-Chul Han)
5. Ausencia. Acerca de la cultura y la filosofía del Lejano Oriente (Byung-Chul Han)
6. Hegel y el poder. Un ensayo sobre la amabilidad (Byung-Chul Han)
7. La civilización inconsciente (John Ralston Saul)
8. Hay quien prefiere las ortigas (Junichiro Tanizaki)
9. Tormenta de flores (Osamu Dazai)
10. Momo (Michael Ende)
11. La metamorfosis (Franz Kafka)
12. Brujería para chicas descarriadas (Grady Hendrix)
13. La Policía de la Memoria (Yoko Ogawa)
14. El arco iris de gravedad (Thomas Pynchon)
15. La sombra fuera del tiempo (H. P. Lovecraft)
16. La sombra sobre Innsmouth (H. P. Lovecraft)
17. Cuando Alice se subió a la mesa (Jonathan Lethem)
18. El ojo del mundo (Robert Jordan)
19. Carl el Mazmorrero (Matt Dinniman)
20. Zangetsuki. Crónicas de la luna (Masakuni Oda)
21. Solaris (Stanisław Lem)
22. Berserk Master Edition 1 (Kentaro Miura)
23. Mujina Into the Deep 1 (Inio Asano)
24. Bibliomania (Macchiro y Obaru)
25. Barrio lejano (Jiro Taniguchi)
26. El perro enamorado de las estrellas (Takashi Murakami)
27. Buenas noches, Punpun 1 (Inio Asano)
28. Solanin (Inio Asano)
29. Parasyte 1 (Hitoshi Iwaaki)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pedrogarauleon-bit/book-quiz-online.git
cd book-quiz-online

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Open your browser and navigate to http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## Project Structure

```
book-quiz-online/
├── src/
│   ├── lib/
│   │   ├── Answer.svelte           # Answer button component
│   │   ├── Question.svelte         # Question display component
│   │   ├── QuestionSystem.svelte   # Quiz flow management
│   │   ├── ResultScreen.svelte     # Result display with books
│   │   ├── NatureDecriptor.svelte  # Book personality description
│   │   └── RadialChart.svelte      # Affinity chart visualization
│   ├── assets/
│   │   ├── store.js                # Svelte store for state management
│   │   └── utils.js                # Utility functions
│   ├── App.svelte                  # Main app component
│   ├── app.postcss                 # Tailwind CSS configuration
│   └── main.js                     # Entry point
├── public/
│   ├── lang/
│   │   └── en/
│   │       ├── natures-en.json            # 29 personality types
│   │       ├── questions-en.json          # Quiz questions
│   │       ├── naturedescription-en.json  # Book personality descriptions
│   │       ├── natures-to-books-en.json   # Personality to book mapping
│   │       └── strings-en.json            # UI strings
│   ├── books-data.json              # Complete book metadata
│   ├── img/                         # Images and assets
│   └── audio/                       # Sound effects
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
├── svelte.config.js                 # Svelte configuration
├── tailwind.config.cjs              # Tailwind CSS configuration
└── README.md                        # This file
```

## How It Works

1. **User Answers Questions** - Selects responses to personality questions
2. **Points Calculation** - Each answer contributes points to different book affinities
3. **Weighted Scoring** - Points are normalized to show relative affinity
4. **Result Matching** - The system identifies which book(s) match best
5. **Display Results** - Shows matched book with title, author, description, and personality profile

## Customization

### Adding New Languages

To add support for a new language:

1. Create a new folder in `public/lang/[language-code]/`
2. Copy the JSON files from `public/lang/en/` and translate them
3. Update language detection in `src/assets/utils.js`

### Modifying Questions

Edit `public/lang/en/questions-en.json` to change quiz questions. Each question must include:

- `id`: Unique question identifier
- `title`: The question text
- `responses`: Array of answer options, each with:
  - `id`: Answer identifier
  - `response`: Answer text
  - `scores`: Array of book affinities with points

### Adding Book Cover Images

Add book cover images to `public/img/bookcovers/` with names matching the book IDs in `books-data.json`.

## Technologies Used

- **Svelte** - Reactive UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **PostCSS** - CSS processing

## License

This project is licensed under the CC0 1.0 Universal (CC0 1.0) Public Domain Dedication. See LICENSE.md for details.

## Acknowledgments

- Original concept based on Pokemon Mystery Dungeon Explorers of Sky personality test
- Inspired by [pmd-quiz-online](https://github.com/Nrosa01/pmd-quiz-online) by Nrosa01
- Books curated by Pedro García Leon

## Contributing

Contributions are welcome! Feel free to:

- Submit bug reports
- Suggest new books or questions
- Contribute translations
- Improve the UI/UX

Please open an issue or submit a pull request.

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Discover which book matches your personality!** 📚✨

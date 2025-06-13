// Placeholder voor README.md
# Kevin Tailwind CMS ✨

Een eigen CMS-systeem gebouwd met React + Tailwind CSS. Hiermee kun je componenten samenstellen, live aanpassen en exporteren naar HTML.

## 🔧 Installatie

```bash
npm install
npm run dev
```

## 📁 Projectstructuur

```
public/            # Bevat index.html
src/
  components/      # Herbruikbare UI-componenten (Header, Hero, etc.)
  cms/             # Logica van de page builder + editors
  pages/           # Dashboard, Editor, Login
  App.jsx
  main.jsx
styles/            # Tailwind configuratie
```

## ✅ Features

- Componentbibliotheek
- Props-editor per component
- Live preview
- Device toggle (desktop, tablet, mobiel)
- Pagina-selector + localStorage opslag
- HTML-export (binnenkort!)
- Mock login

## 🚀 Klaar om te starten
Gebruik `/editor` om de page builder te openen en componenten samen te stellen.

## 📦 Build
```bash
npm run build

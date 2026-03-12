# Miniblox Chat Translator + Filter

A userscript for [Miniblox](https://miniblox.io/) that adds real-time chat
transliteration and an outgoing/incoming message filter.

No APIs. No requests. No external dependencies.  
Just fast client-side character mapping and pattern matching.

---

## ✨ Features

### 🌐 Transliteration
- Real-time transliteration applied when sending chat messages
- Fully offline — no translation API used
- Supports uppercase and lowercase
- Commands (messages starting with `/`) are left untouched
- Language preference is saved across sessions via `localStorage`

### 🛡️ Chat Filter
Applies to both **outgoing** and **incoming** messages:
- **Bad word detection** — blocks profanity and slurs across 14 languages
  (English, Russian, Arabic, Hebrew, Chinese, Turkish, Polish, Japanese,
  Korean, Hindi, Vietnamese, and more)
- **Leetspeak/obfuscation detection** — catches common character substitutions
- **Spam detection** — blocks repeated identical messages (threshold: 3)
- **All-caps detection** — optional, off by default (10+ letter minimum)
- Blocked messages are replaced with a `🚫 This message was blocked` notice

### 🗺️ Supported Languages
| Code | Language   | Code | Language   |
|------|------------|------|------------|
| HI   | Hindi      | BR   | Braille    |
| RU   | Russian    | MO   | Morse Code |
| JA   | Japanese   | VI   | Vietnamese |
| AR   | Arabic     | ZH   | Chinese    |
| GR   | Greek      | TR   | Turkish    |
| KO   | Korean     | PL   | Polish     |
| HE   | Hebrew     | KA   | Georgian   |
| TH   | Thai       | HY   | Armenian   |

---

## 📦 Installation

### 1️⃣ Install a Userscript Manager

- [Tampermonkey](https://www.tampermonkey.net/)
- [Violentmonkey](https://violentmonkey.github.io/)
- Greasemonkey

### 2️⃣ Add the Script

1. Open your userscript manager
2. Create a new script
3. Paste the contents of `user.js`
4. Save
5. Visit [miniblox.io](https://miniblox.io/)

A **"Chat: [Language] ▾"** button will appear in the top-left corner.
Click it to open the language selector dropdown.

---

## ⚙️ Filter Configuration

Inside `user.js`, you can toggle filter options:
```js
const CONFIG = {
    blockBadWords: true,   // Block profanity and slurs
    blockSpam: true,       // Block repeated messages
    blockAllCaps: false    // Block all-caps messages (optional)
};
```

---

## 👤 Author

Made by **TheM1ddleM1n** · Filter contributions by **joudaALT**

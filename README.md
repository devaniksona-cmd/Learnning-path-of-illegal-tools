# FORBIDDEN TOOLS — Bug Bounty Arsenal

> Tools you are **not supposed** to install or use in bug bounty hunting.
> Install commands · Run commands · What actually happens · Why it's illegal.

---

## 🚀 Deploy to GitHub Pages (3 steps)

1. **Fork or clone** this repo
2. Go to **Settings → Pages → Deploy from branch → main / root**
3. Your site is live at `https://yourusername.github.io/repo-name`

That's it. Zero build step. Zero dependencies.

---

## 📁 File Structure

```
/
├── index.html          ← Homepage with category cards
├── dos.html            ← DoS / DDoS tools
├── phishing.html       ← Phishing & social engineering
├── wifi.html           ← WiFi attack tools
├── rats.html           ← RATs / malware / spyware
├── stuffing.html       ← Credential stuffing tools
├── c2.html             ← C2 frameworks & ransomware
├── mitm.html           ← MITM / network interception
├── oos.html            ← Out-of-scope actions
├── rules.html          ← The 8 golden rules + checklist
│
├── css/
│   └── style.css       ← Full design system (variables, components, utilities)
│
└── js/
    ├── main.js         ← Scroll reveal, copy-to-clipboard, smooth scroll
    └── components.js   ← Injects shared nav + footer into every page
```

---

## 🎨 Design System

All styling lives in `css/style.css` as CSS variables.
Change the palette once, it updates everywhere:

```css
:root {
  --red:    #ff2d4e;   /* primary accent */
  --green:  #00ff88;   /* safe/legal */
  --cyan:   #00e5ff;   /* tool names */
  --orange: #ff7c2a;   /* warnings */
  --bg:     #050810;   /* main background */
}
```

---

## ➕ Adding a New Page

1. Copy `dos.html` as a template
2. Update the `<title>`, hero badge, h1, and table rows
3. Add a link to it in `js/components.js` (NAV_HTML and FOOTER_HTML sections)
4. Done — nav and footer inject automatically

---

## ⚖ Legal Notice

This site is for **awareness and education only**.
All content describes tools that are illegal to use without explicit written authorization.
Nothing on this site constitutes legal advice.

---

*Zero external dependencies · 100% static · GitHub Pages ready*

# ECO-WUDHU GUARD — presentation website

Plain-local, presentation-ready single-page website in Indonesian. Open `index.html` directly in a browser or serve the folder with any static server.

## Updated features

The presentation now includes a rounded-rectangle navigation bar with section icons, institutional logo strip, eight horizontally scrollable methodology steps based on the technical DOCX, separate Visi and Misi cards, a complete scrollable Arduino sketch with a copy button, animated creator photo-frame placeholders, and a more playful simulation with running-flow animation, tank fill, LED state, LCD state, and servo movement.

## Files

- `index.html` — presentation structure and research content
- `styles.css` — Frutiger Aqua visual system, responsive layout, animations
- `script.js` — navigation, copy-to-clipboard, methodology interaction, and simulation logic
- `assets/ecowudhu-logo-new.png` — refreshed droplet/shield/leaf logo
- `assets/mtsn44.png`, `assets/jmc.png`, `assets/adi.png` — institutional logo assets used beside EcoWudhu Guard
- `assets/opening-sketch.png` — supplied opening-screen sketch reference

## Interaction

Click **Mulai presentasi** to enter the presentation. Use the icon navigation or arrow keys. On **Kode & Catatan**, scroll inside the code frame and use **Salin kode**. On **Simulasi & Kredit**, adjust the volume and click **Jalankan aliran**.

Content is adapted from the supplied research report PDF and `Monitor_Debit_Air_Wudhu_versi3.docx`.


## Add your 1:1 photos

Place the real device photo at `assets/device.png`, Ferdiansyah’s photo at `assets/paferdi.png`, and Khafid Khamdan’s photo at `assets/pakhafid.png`. The website uses `aspect-ratio: 1 / 1` with `object-fit: cover`, so portrait or landscape images will stay square without stretching.

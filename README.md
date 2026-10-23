# Academy of Information Technology website

The website for the Academy of Information Technology at Southwest Miami Senior High.
It's plain HTML and CSS with no build step, so you can change any page in a text editor.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: tracks overview, recent wins, certifications |
| `programs.html` | Course maps for all four tracks, NAF model, certifications |
| `student-life.html` | Clubs and photo gallery |
| `resources.html` | NAFTrack, scholarships, polos |
| `apply.html` | How to apply and contact info |

Colors and fonts live at the top of `css/style.css` (the `:root` block).
Photos and badges live in `images/`.

## Common edits

- **Add a new win:** in `index.html`, copy one `<li>` inside `<ul class="wins">` and change the year, name and award.
- **Add a photo:** put the file in `images/` (keep it under about 1600px wide), then add an `<img>` to the gallery in `student-life.html`. Always write an `alt` description.
- **Change contact info:** it appears in the footer of every page and on `apply.html`. Search all files for `vlazo` to find every spot.
- **Header and footer:** these are repeated in each page. If you change the menu, change it in all five files.

## Publishing with GitHub Pages (free)

1. Push this repository to GitHub.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the main branch and the `/ (root)` folder, then click **Save**.
4. After a minute, the site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

Before posting student photos, make sure the school has photo releases on file for those students.

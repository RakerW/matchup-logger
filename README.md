# Round Logger — putting it on the iPhone Home Screen

An HTML file sent by mail, Dropbox or OneDrive can never become a Home Screen
app on iOS: those apps show the page in their own preview, and Safari does not
open `file://` addresses. The page has to be served over **https** once. After
that it is installed on the phone and works with no signal.

## Publish it (about five minutes, on the Mac)

1. On github.com create a **new public repository** called `matchup-logger`.
   Public is fine: these files hold no personal data and no token. The token you
   type into the logger stays in your phone's browser and is never part of the page.
2. Open the repository, choose **Add file → Upload files**, and drag in every
   file from this folder: `index.html`, `sw.js`, `manifest.webmanifest`,
   `icon-180.png`, `icon-512.png`. Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait a minute, then reload the Pages settings page. It shows the address:
   `https://<your-account>.github.io/matchup-logger/`

## Install it (on the iPhone)

1. Open that address in **Safari** — not Chrome, and not a link preview inside
   Mail or Slack. If you arrive from another app, tap the ••• or compass icon
   and choose *Open in Safari* first.
2. Tap the **Share** button (the square with the arrow).
3. Choose **Add to Home Screen**, then **Add**.

It now opens full screen, with no browser bars, and loads with no network. Rounds
are stored on the phone itself.

## Updating it later

Upload the new `index.html` to the same repository. The phone picks the new
version up the next time it opens with a signal. Recorded rounds are kept.

## One thing to know

Rounds live in this page's own storage on the phone. Deleting the Home Screen
icon and reinstalling can clear it, so send rounds to the desktop app after each
tournament rather than leaving them on the phone for weeks.

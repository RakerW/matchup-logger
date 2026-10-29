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
   `icon-180.png`, `icon-512.png`, `viewer.html`. Commit.
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

## The viewer, for an iPad

`viewer.html` goes up with the logger and is published at the same address with
`viewer.html` on the end:

    https://<your-account>.github.io/matchup-logger/viewer.html

It is the whole app, read-only: every page, every number, nothing to press that
changes anything. Open it once, tap **Read the shared database…**, and give it
the repository your app syncs with, the file name and a GitHub token. From then
on it reads the database itself, so it works away from home with the computer
switched off. Add it to the Home Screen the same way as the logger.

Make that token **read-only**: a fine-grained token, this one repository only,
*Contents: read*. There is no code in the page that can write to GitHub, so a
read-only token loses nothing — and if the iPad is ever lost, revoke it on
GitHub and the page is an empty shell again. **Forget this device's settings**
on the page clears the token and any kept copy from that device.

By default the viewer keeps nothing but the repository settings: the database
lives in the tab and goes when the tab closes. Tick *Keep a copy on this device*
only if you want it to work with no signal at all — that does leave a copy of
the database in the iPad's browser.

Nothing here publishes your data: this repository holds the pages, your database
stays in its own private repository. Never turn Pages on for that one.

## Updating it later

Upload the new `index.html` — and `viewer.html`, if you use it — to the same
repository. The phone picks the new version up the next time it opens with a
signal. Recorded rounds are kept.

The logger prints its version at the bottom of the Send screen. If it does not
match the version of the app on the computer, the upload did not happen.

## One thing to know

Rounds live in this page's own storage on the phone. Deleting the Home Screen
icon and reinstalling can clear it, so send rounds to the desktop app after each
tournament rather than leaving them on the phone for weeks.

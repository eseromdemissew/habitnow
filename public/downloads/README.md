# HabitNow Android download

Place your real, release-signed Android APK in this folder with the exact filename:

`habitnow.apk`

Project location: `public/downloads/habitnow.apk`
Public download URL: `/downloads/habitnow.apk`

The download page checks whether this file is available. Until it exists, visitors see early-access signup instead of a broken download button. After adding or replacing the file, publish the updated website and refresh the download page.

Use a release-signed APK, not a debug build. Keep the same application ID and signing key for updates. Test installation and updates on an actual Android phone before release. An Android App Bundle (.aab) cannot be installed directly; upload that format to Google Play instead.

To enable the separate Google Play button, supply your real listing URL in the site's Play Store setting. Do not put passwords, signing keys, or keystores in this public folder.
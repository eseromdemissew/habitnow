<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Android releases in `public/downloads/habitnow.apk`; the download page checks the real binary response before offering a download so missing files never produce broken APK links.
- Route shared download CTAs to the download page when no Play Store listing is configured so APK and early-access availability have one destination.

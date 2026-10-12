<h1 align="center">Render</h1>

<p align="center">
  Turn a social profile into a polished card you can download, copy, or share.
</p>

<p align="center">
  <a href="#getting-started">Get started</a> ·
  <a href="#using-render">Using Render</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#privacy">Privacy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black.svg" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-149eca.svg" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6.svg" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg" alt="Tailwind CSS 4" />
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" /></a>
</p>

Render turns a public profile into a ready-to-post image. Choose a card style, layout, and background, then download the result or copy it to your clipboard. No account is required.



## Features

- Create cards for X, GitHub, Instagram, and LinkedIn.
- Pull public profile details from X, GitHub, and Instagram; edit LinkedIn details manually.
- Choose Native, Minimal, or Ticket card styles, each with light or dark card colors.
- Export for X, LinkedIn, Instagram, square posts, or GitHub previews at 2× resolution.
- Customize profile details, stats, backgrounds, and photos.
- Download a PNG, copy it to the clipboard, or share a profile link.
- Use the site in light or dark mode.
- Open a profile directly in the studio with a shareable URL.

## Getting started

### Requirements

- Node.js 20 or newer
- [pnpm](https://pnpm.io/)

### Run locally

```sh
git clone https://github.com/amulyasrivastava1408-cell/Render.git
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

No environment variables are required for local development. GitHub allows 60 unauthenticated API requests per hour. To increase that limit, optionally add a GitHub personal access token with no scopes to `.env.local`:

```dotenv
GITHUB_TOKEN=your_github_token
```

Keep tokens private. Do not commit `.env.local`.

### Production

```sh
pnpm build
pnpm start
```

Render is a Next.js application and can run on hosts that support Next.js, including Vercel.

## Using Render

1. Choose a platform and enter a handle or profile URL. A leading `@` is also accepted.
2. Select a card style, export format, and background.
3. Use **Show** to choose which stats and profile details appear.
4. Open **Edit details** to change the profile or upload a photo or banner.
5. Choose **Download** to save a PNG or **Copy** to copy it to your clipboard.
6. Use **Share** to share or copy a link to the profile.

### Shareable profile URLs

Open a profile directly in the studio:

```text
/x/handle
/github/handle
/instagram/handle
/linkedin/handle
```

X, GitHub, and Instagram profiles load available public information. LinkedIn currently opens a blank editable card; LinkedIn sign-in is not implemented.

## Card styles

<table>
  <tr>
    <td width="33%"></td>
    <td width="33%"></td>
    <td width="33%"></td>
  </tr>
  <tr>
    <td align="center"><b>Native</b><br><sub>Inspired by the platform's profile layout</sub></td>
    <td align="center"><b>Minimal</b><br><sub>A centered profile with a quiet layout</sub></td>
    <td align="center"><b>Ticket</b><br><sub>A profile card with a ticket-style stub</sub></td>
  </tr>
</table>

## How it works

| Platform | Profile source | Details |
|---|---|---|
| X | [FxTwitter public API](https://github.com/FxEmbed/FxEmbed) | Name, bio, profile photo, banner, stats, and verification status |
| GitHub | [GitHub REST API](https://docs.github.com/rest/users) | Name, bio, profile photo, followers, following, and public repositories |
| Instagram | Public profile metadata, with an embed fallback | Name, photo, and available public stats; Instagram may limit profile data |
| LinkedIn | Manual entry | Add a name, headline, stats, and photo yourself |

Profile images are loaded through a same-origin image proxy so the browser can include them in exported cards. The proxy only accepts the image hosts used by supported profile sources.

The browser renders the card at the selected export size. Render uses [html-to-image](https://github.com/bubkoo/html-to-image) to create the PNG.

## Privacy

- Render does not require user accounts and does not store profile edits in a database.
- Profile lookups are handled by the app server and cached for performance.
- Uploaded photos and backgrounds are processed in your browser and are not uploaded by the editor.
- The app includes Vercel Analytics; when deployed with analytics enabled, page visits may be measured by Vercel.

## Development

Run the available checks before submitting changes:

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Contributions are welcome. Open an issue to discuss an idea or submit a pull request.

## Built with

- [Next.js 16](https://nextjs.org/) and [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [html-to-image](https://github.com/bubkoo/html-to-image) for PNG export
- [Inter](https://rsms.me/inter/) and [Geist Mono](https://vercel.com/font)
- [Lucide](https://lucide.dev/) icons

## License

Render is released under the [MIT License](LICENSE).

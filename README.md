# 5 Requests Per Second <a href="https://5rps.jp" target="_blank">Official Website</a>

<a href="https://www.instagram.com/5requestspersecond/" target="_blank"><img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram"></a>
<a href="https://discord.gg/cWae4TfR" target="_blank"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
<a href="https://www.x.com/5rps-film" target="_blank"><img src="https://img.shields.io/badge/Twitter-000000?style=flat&logo=x&logoColor=white" alt="YouTube"></a>

### Requirements

- `pnpm`
- `make` (GNU Make 4.x+)

### Installation

```bash
make install
```

The Makefile defaults to `pnpm`. You can override the package manager for a one-off run with `make PNPM=npm install`.

> **Windows tip:** Make sure you run these commands from an environment that provides GNU Make (e.g. Git Bash or WSL). If you prefer PowerShell, run the underlying `pnpm` commands directly.


### Development

1. Run the development server

```bash
make dev
```

2. You can now access the site on http://localhost:3000

To run the Next.js build locally:

```bash
make build
```

### Deployment

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=website-git-main-remote-startup-senpai)

This website is directly deployed to [Vercel](https://vercel.com/remote-startup-senpai). Any changes to the `main` branch will be automatically deployed.

You can trigger a deploy from your current branch with:

```bash
make deploy BRANCH=$(git branch --show-current)
```

The `BRANCH` variable defaults to `main`, so `make deploy` will push to `origin/main`.

## Template Reference

This website has been bootstrapped using [Timothy Lin's NextJS template](https://github.com/timlrx/tailwind-nextjs-starter-blog).

# Casa de Oxalá — Web

[![CI](https://github.com/wellbenicio/casa-de-oxala-web/actions/workflows/ci.yml/badge.svg)](https://github.com/wellbenicio/casa-de-oxala-web/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wellbenicio_casa-de-oxala-web&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wellbenicio_casa-de-oxala-web)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=wellbenicio_casa-de-oxala-web&metric=coverage)](https://sonarcloud.io/summary/new_code?id=wellbenicio_casa-de-oxala-web)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI/CD — GitHub Actions Setup

The project uses GitHub Actions for CI. Every push to `main` or `develop` (and every pull request targeting those branches) triggers the pipeline, which:

1. Installs dependencies (`npm ci`)
2. Runs the linter (`npm run lint`)
3. Runs the TypeScript type-checker (`npm run type-check`)
4. Builds the Next.js application (`npm run build`)
5. Runs tests with coverage (`npm run test`)
6. Uploads the coverage report as a build artifact
7. Analyzes code quality with SonarCloud

### Required Secrets (GitHub → Settings → Secrets and variables → Actions)

| Secret Name          | Description                                      |
|----------------------|--------------------------------------------------|
| `SONAR_TOKEN`        | SonarCloud authentication token                  |
| `SONAR_ORGANIZATION` | SonarCloud organization key (e.g. `wellbenicio`) |
| `SONAR_PROJECT_KEY`  | SonarCloud project key (e.g. `wellbenicio_casa-de-oxala-web`) |

### SonarCloud Setup

1. Sign in to [sonarcloud.io](https://sonarcloud.io) using your GitHub account.
2. Click **"+"** → **"Analyze new project"** and import this repository.
3. Go to **Administration → Analysis Method** and **disable** Automatic Analysis (CI-based analysis is used instead).
4. Go to **My Account → Security** and generate a new token.
5. Add the token and the organization/project keys as GitHub secrets (see table above).

> **Security note:** Never commit secrets, tokens, or environment files to the repository.  
> Files matching `.env*` (including `.env.local`, `.env.production`, `.env.development`) are already listed in `.gitignore` and will never be tracked by git.


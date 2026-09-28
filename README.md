# Centreline Build

A responsive Next.js 16 company website for Centreline Build, with individual service pages and a Resend-powered project enquiry form.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form environment

Copy `.env.example` to `.env.local` and add:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FORM_TO_EMAIL=admin@centrelinebuilding.co.nz
```

The form always sends from `Centreline Build <enquiries@weblaunch.co.nz>`. The `weblaunch.co.nz` domain is verified in the connected Resend account. `CONTACT_FORM_TO_EMAIL` controls where enquiries are delivered.

## Checks

```bash
npm run lint
npm run build
```

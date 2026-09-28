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

The form uses Resend's test sender by default. For production delivery from the Centreline domain, verify the domain in Resend and also set:

```bash
RESEND_FROM_EMAIL=Centreline Build <website@centrelinebuilding.co.nz>
```

## Checks

```bash
npm run lint
npm run build
```

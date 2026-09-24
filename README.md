# AdorVix Website + Growth Console

This repo is your whole web presence, in two parts:

- **`index.html`** — your public website. This is what visitors see when they go to your domain: an animated hero, services grouped into three categories (Performance Marketing, Content & Creative, Web & Local Presence — including website builds), process, contact, and a "Request a service" form.
- **`console.html`** (+ `app.js`) — your **internal admin tool only**. It's for you (and your team) to manage clients and create invoices — it is not meant for clients to log into. The "Admin Login" link on the site is for your own access, not a client portal. Clients reach you through the "Request a service" form instead, which emails you directly.

## What this is

- A **static site** — just three files, no server, no database, no build step.
- The console's data (clients, invoices, settings) is saved in **your browser's local storage**, per browser/device.
- The console's login is a basic access gate for convenience, not a real security system — anyone with access to the device/browser could get in. Don't put anything highly sensitive in it.
- The website's animations (scroll reveals, hero motion, tabbed service categories) are plain CSS/JS, respect visitors' reduced-motion settings, and need no extra setup.

## Run it locally

Open `index.html` in a browser to see the website. Click "Client Login" (or open `console.html` directly) to reach the admin tool.

## Put it on GitHub Pages (free hosting)

1. Create a new repository on GitHub (e.g. `adorvix-website`).
2. Upload `index.html`, `console.html`, and `app.js` to the root of the repo (drag-and-drop on GitHub's web UI works fine, or `git push`).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then GitHub will give you a URL like `https://yourusername.github.io/adorvix-website/`.

That's your live public website. The console lives at the same address with `/console.html` on the end (e.g. `https://yourusername.github.io/adorvix-website/console.html`), and is also reachable via the "Client Login" button on the homepage.

**Using your own domain instead of `github.io`:** in the same **Settings → Pages** screen, add your domain under "Custom domain" and point your domain's DNS at GitHub Pages (GitHub's docs walk through the exact DNS records) — no code changes needed here.

## First login

- Username: `admin`
- Password: `adorvix123`

**Change this immediately** after your first login: go to **Settings → Change Login Credentials**.

## Using it

### On the public website (`index.html`)
- **Services** are grouped into three tabs — Performance Marketing (SEO, Google PPC, Meta Campaign, YouTube Marketing), Content & Creative (Instagram Reels, Content Writing, Graphic Design & Branding), and Web & Local Presence (Website Builders, GMB Manager, Email Marketing). Visitors click a tab to switch category.
- **Request a service** — visitors fill in a short form (name, email, phone, service, message) and clicking "Send request" opens *their* email app with everything pre-filled, addressed to your inbox (`infoadorvix@gmail.com`). No account or backend needed on either side — you just check your email like normal.
- **Admin Login** — the button in the nav/footer that takes *you* to `console.html`. This is not advertised as a client feature; clients only ever see the request form.

### In the console (`console.html`) — internal use only
This is scoped to exactly one job: **manage clients by creating their invoices.** Nothing else lives here.
- **Dashboard** — quick totals: clients, invoices, revenue collected, outstanding.
- **Clients** — add the external clients you serve (name, billed entity, contact info, the services they're subscribed to). Each client automatically gets a unique **Client ID** (e.g. `CL-0001`), shown in the Clients list and on every invoice you bill to them. When a service request email comes in from the website, add that person here once you're ready to work with them.
- **Invoices → New Invoice** — pick a client, name the project/campaign, set the campaign dates, and add service lines (description, qty/days, USD rate). The console auto-calculates USD→BDT conversion, gateway fee, other charges, grand total, and spells the total out in words. New invoices start as **Draft** so you can edit freely before sending.
- **Suggestions as you type** — Project Name, Billed Entity, and Service Description fields remember what you've typed before and suggest it next time (standard browser autocomplete), so you're not retyping the same project or service names on every invoice.
- **Three statuses** — **Draft** (still being prepared, not yet issued), **Unpaid** (sent to the client, awaiting payment), **Paid** (payment received). Change status any time from the Invoices list (a dropdown right on each row) or from inside the invoice preview — no need to recreate an invoice just because its status changed.
- **Two dates, tracked separately** — the **Invoice Date** (when it was created/issued) and the **Paid Date** (when payment came in, editable any time a status is Paid — useful if payment arrived a few days after you marked it). Both appear on the invoice itself and in the Invoices list.
- **Invoice preview** — a clean, boxed layout: company details and logo in one panel, invoice ID/date/status/barcode in another, client and campaign details each in their own panel, and the Service Terms in a clearly bordered block — all designed to be legible and professional both on-screen and in print. The logo is rendered from a sharper, larger source image so it stays crisp at this bigger size. A **PAID** or **DRAFT** seal sits next to the QR code in the signature area (the PAID seal includes the payment date) rather than floating over the page, so it stays correctly placed even when an invoice spans multiple pages.
- **Barcode + QR code** — every invoice carries a scannable barcode of its invoice ID, and a QR code encoding the invoice ID, project, total, and current status.
- **Download PDF** generates an actual PDF file straight from the invoice content — this is a genuinely generated file (not a browser "print to PDF"), so it never shows a page URL, local file path, date stamp, or any other browser-added text. Long invoices with many service lines automatically flow across multiple A4 pages cleanly, without splitting a row or the totals/signature block across a page break.
- **Email Invoice** — downloads the PDF and opens your email app addressed to the client, with a subject and message pre-filled. **One real limitation to know:** browsers cannot attach a file to an email automatically — there's no way around this without a paid backend/email-sending service. The button downloads the PDF and reminds you to attach it before hitting send; it isn't a fully automatic "click once, email sent with attachment" flow.
- **Search** — the Invoices tab searches across **invoice ID**, **client name**, and **project name** at once, so you can find a bill by whichever detail you remember.
- **Every invoice number is unique** — invoice IDs are generated as `ADX-YYYYMMDD-####`, incrementing automatically, and both the barcode and QR code always reflect that exact number.
- **Full history, anytime** — the Invoices tab lists everything you've ever created. Every row has its own **Download PDF** and **Email** button, so you can re-download or re-send any past invoice, not just the one you just made, whenever you need it — no re-entering data.
- **Analytics** — revenue by month, a Paid/Unpaid/Draft split, your top clients by revenue, and your most-billed services, calculated live from your invoices.
- **Settings** — company name/tagline/contact info shown on invoices, default USD→BDT rate and gateway fee %, and login credentials.
- **Settings → Data** — export a JSON backup regularly (especially before clearing your browser data or switching devices), and import it back whenever you need to restore or move to a new device/browser.

## Important limits (because this is a static, no-backend site)

- Data does **not** sync between browsers or devices automatically. If you use this on your laptop and your phone, they'll have separate data — use Export/Import to move data between them.
- Clearing your browser's site data/cache will erase everything. Export backups often.
- This is best suited for a single person or a small team sharing one browser profile/device, or for each team member keeping their own local data and periodically merging via backup files.
- **Email Invoice** cannot attach the PDF automatically — see above. If you outgrow this and want true one-click "send with attachment," that would need a small paid service (e.g. EmailJS or a similar API) wired in, which is a bigger change than this static setup.

## Editing the website content

Open `index.html` in any text editor — it's plain HTML. The sections, top to bottom, are: nav, hero, services, process, why us, call-to-action band, contact, footer. Each has a short `<section id="...">` you can find and edit directly — headlines, service descriptions, email/phone, etc.

## Customizing

- Update the logo: it's embedded as base64 in both `index.html` and `console.html` (search for `data:image/png;base64,` or `data:image/jpeg;base64,`). To swap it, upload your new logo file to the repo (e.g. `logo.png`) and replace those `<img src="data:...">` tags with `<img src="logo.png">`.
- Colors, fonts, and layout are in the `<style>` block at the top of each HTML file. The two files share the same color variables (navy, blue, amber, green) so they stay visually consistent.

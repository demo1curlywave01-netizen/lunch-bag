# Lunch Bag Website: AI Agent Build Prompt

You are a senior product designer + full-stack engineer. Build a complete, production-quality website for **"Lunch Bag"**, a pure-vegetarian homemade office-lunch delivery brand. Use **Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion**. The result must look like a real, premium, trustworthy food brand, not a template and not a generic "AI-looking" site. Before writing code, read the brief fully and plan the page structure, design tokens and components.

---

## 1. Brand & visual direction

- **Color theme: strictly WHITE + RED.** Define tokens: clean white/off-white backgrounds (`#FFFFFF`, `#FFF8F6`), a confident food-brand red as primary (around `#D62828` / `#C8102E`), a deeper red for hover/pressed (`#9D0208`), a soft blush tint (`#FFE5E0`) for sections/cards, and near-black warm text (`#1F1A17`). Use no other accent colors except a tiny functional green for the "Pure Veg" mark. Red must feel appetizing and premium, not alarming: use it for CTAs, icons, highlights and section accents, with lots of white space.
- **Typography:** pick a distinctive, appetizing pairing from Google Fonts (e.g. a warm display serif or rounded display for headings + a clean sans for body). Do not use the default Inter/Arial-only look. Strong hierarchy, generous line-height, large confident hero headline.
- **Imagery:** realistic, appetizing food photography feel. Hero = looping muted autoplay video (with poster image + fallback) or a full-bleed image carousel of steaming North Indian thalis (paneer, dal makhani, soft rotis) and corporate professionals happily opening a "Lunch Bag". Since final photos are not available yet: use high-quality placeholder image/video slots that are clearly structured (`/public/images/...`, one config file listing every image slot with alt text and the intended subject) so they can be replaced in minutes. Use `next/image` with proper sizes, blur placeholders, lazy loading. Do NOT hotlink random copyrighted images or invent logos. Create a simple, clean "Lunch Bag" wordmark/logo in SVG (red bag + wordmark) as a placeholder.
- **Feel:** warm, fresh, fast, hygienic, trustworthy. Rounded corners, soft shadows, subtle paper/grain or pattern accents (e.g. faint thali/steam line-art), good contrast, accessible (WCAG AA).

---

## 2. Motion & hover interactions (important)

The site must feel alive. Implement tasteful, smooth, performant motion:

- **Cards** (menu items, badges, passes, steps): lift + slight 3D tilt following the cursor, shadow deepening, subtle red glow/border on hover.
- **Buttons:** magnetic hover (button gently follows cursor), shine sweep, arrow slide, press scale. Primary CTA in red, secondary outlined.
- **Images:** slow zoom on hover with soft overlay and a small "Add to plan" / "View details" reveal.
- **Hero:** animated steam wisps rising over the thali, slow parallax on food/props, floating small elements (leaf, chili, lunch bag icon) reacting lightly to mouse movement.
- **Scroll:** staggered fade-up/reveal of sections, animated counters for trust/speed numbers, sticky header that shrinks and gains a blur/shadow on scroll, progress indicator on the weekly menu.
- **Weekly menu:** day tabs with a sliding red active indicator and animated content swap.
- A **"10:00" speed ticker / animated stopwatch** element reinforcing "under 10 minutes".
- Respect `prefers-reduced-motion` (disable parallax/tilt), keep 60fps, no layout shift, no heavy libraries beyond Framer Motion. Touch devices: replace hover effects with tap/press feedback.

---

## 3. Pages & sections

**Global:** sticky navbar (Home, Menu, Lunch Passes, For Companies, Our Story), red "Get My Lunch Pass" CTA, footer (brand blurb, quick links, contact, social icons, FSSAI placeholder text field like "FSSAI Lic. No.: [to be added]". Never invent a number), floating WhatsApp button, cookie notice if needed.

### HOME (must instantly answer: What is it? How fast is it? Why should I trust it?)

- **Hero:** headline *"Your Favorite Meals. At Your Desk in 10 Minutes."* Subtext: *"Pure vegetarian, hygienic, and incredibly pocket-friendly homemade lunch delivered fresh to your office. No artificial colors, no palm oil, just pure goodness."* Primary CTA "Browse Today's Menu", secondary "Get a Lunch Pass". Looping video/carousel as described. A small strip: *"Eat Fresh in 10 Mins: Grab your warm, healthy lunch from our nearest delivery rider."*
- **"Zero-Compromise" Health Badge checklist** (icon cards with short text): 100% Pure Veg (separate, strictly vegetarian kitchen), Truly Homemade (authentic traditional recipes), Zero Palm Oil (premium, heart-healthy oils), No Artificial Stuff (no synthetic colors or MSG). Use custom line icons in red instead of emojis.
- **Speed Promise section:** "Restaurant Speed. Mother's Kitchen Quality." with a 45-minute-vs-10-minute comparison visual (animated timeline/bar).
- **Health/Pocket section:** "Kind to Your Body, Easy on Your Pocket."
- **How it works in 3 steps:** choose your meal/pass, we pre-stage near your office hub, pick up / receive in under 10 minutes.
- Menu teaser (today's thali) + passes teaser + corporate teaser + story teaser.
- **Trust section:** badges + placeholder slots for real customer reviews/logos (clearly marked as placeholders). Do NOT invent fake testimonials, fake numbers or fake company logos. Use a "[Client to provide]" structure in a content config.
- Final CTA band in solid red.

### MENU PAGE (dynamic & simple)

- **Weekly calendar view:** day tabs so users can see what is cooking each day and plan or pre-order their week. (The client note said "Tuesday to Friday"; build Mon-Fri, data-driven, so any days can be turned on/off.) Each day shows the thali: items (e.g. paneer dish, dal, rotis, rice, salad, sweet) with veg mark, short description, photo slot, price, "Add to my week" / "Pre-order" button. The daily rotating 100% vegetarian menu data lives in one editable JSON/TS config (later replaceable by a DB/CMS). Include a simple pre-order/cart drawer UI.

### LUNCH PASSES (pricing page)

- A frictionless layout to buy a **"5-Day Lunch Pass"** or **"20-Day Monthly Pass"** that automates weekday meals. Two clean pricing cards (recommend the monthly one with a "Best value" ribbon), what is included, delivery location + time-slot selector, start date, pause/skip info text, and a short FAQ. Prices are placeholders in config (marked "[price to be confirmed]").
- Build the purchase flow UI: select pass, then details (name, phone, office/building, floor, time slot), then payment.
- Integrate **Razorpay in TEST mode** only if keys are later supplied: create the server-side order route + signature verification route correctly (amount from a server-side catalog, HMAC SHA256 check with `timingSafeEqual`, never trust the client amount, secrets only in env, provide `.env.example`). If keys are missing, show a clear "payments not configured" state, never a fake success.

### FOR COMPANIES (Corporate Subscriptions)

- Target **HR managers and team leads** feeding groups or setting up permanent office perks. Explain how companies can subsidize or sponsor daily "Lunch Bag" deliveries for their entire staff as a monthly workplace perk. Benefits cards, simple how-it-works, and an enquiry form (company name, contact person, designation, work email, phone, team size, city/office area, message) with full client + server validation (valid email, 10-digit Indian mobile starting 6-9, required fields, max lengths), spam protection (honeypot + rate limit), and storage/notification (save to a DB or file store plus an email/log hook; never expose data publicly).

### OUR STORY

- Section **"Why did you start this?"** using this copy/tone: *"We were tired of eating heavy, oil-laden restaurant food at work every day. We missed home, so we built Lunch Bag to bring the taste of a mother's kitchen to your cubicle."* Warm layout with a founder photo slot, kitchen photo slot, and the four health badges again.

---

## 4. Client copy (source of truth; polish lightly for grammar, never change the claims)

- "Your Favorite Meals. At Your Desk in 10 Minutes."
- "Pure vegetarian, hygienic, and incredibly pocket-friendly homemade lunch delivered fresh to your office. No artificial colors, no palm oil, just pure goodness."
- "Browse our daily rotating, 100% vegetarian menu."
- "Eat Fresh in 10 Mins: Grab your warm, healthy lunch from our nearest delivery rider."
- **Badges:**
  - 100% Pure Veg: completely separate, strictly vegetarian kitchen setup.
  - Truly Homemade: prepared with love using authentic, traditional recipes.
  - Zero Palm Oil: cooked only in premium, heart-healthy oils.
  - No Artificial Stuff: absolutely no synthetic food coloring or MSG.
- **"Restaurant Speed. Mother's Kitchen Quality."** Skip the 45-minute wait on standard food delivery apps. We strategically pre-stage our fresh, hot meals near major corporate hubs so that your lunch arrives in under 10 minutes. It's faster than walking down to the office food court.
- **"Kind to Your Body, Easy on Your Pocket."** Our meals are crafted using light, daily-sourced ingredients without a single drop of palm oil or artificial food color. It's food you can safely eat every single day of the week without breaking your budget.
- **Corporate:** information on how companies can subsidize or sponsor daily "Lunch Bag" deliveries for their entire staff as a monthly workplace perk.
- **Lunch Passes:** a frictionless way to buy a "5-Day Lunch Pass" or "20-Day Monthly Pass" to completely automate weekday meals.

---

## 5. Engineering requirements

- **Mobile-first and fully responsive** (360px to 1440px+), since most visitors will be office workers on phones.
- **Performance:** Lighthouse 90+ (Performance / Accessibility / SEO / Best Practices). Optimized images/video, `font-display: swap`, no render-blocking, no CLS.
- **SEO:** proper titles/meta/OpenGraph, semantic HTML, JSON-LD (FoodEstablishment + FAQ), sitemap, robots, alt text.
- **Accessibility:** keyboard navigation, focus rings (red), ARIA for tabs/drawers, color contrast checked on red/white.
- **Clean architecture:** reusable components, content in `/content` config files (menu, passes, badges, FAQs), design tokens in the Tailwind theme/CSS variables, no hardcoded magic values scattered in JSX.
- **Security:** server-side validation on every API route, no secrets in client code, `.env.example` only (no values), never commit `.env` files.
- **Do not invent facts:** no fake reviews, ratings, customer counts, licenses, addresses or phone numbers. Use obvious "[to be added]" placeholders in config for anything the client has not provided (phone, address, FSSAI no., prices, social links, delivery hubs).

---

## 6. Deliverables & process

1. First reply with a concise plan: sitemap, design tokens (colors/fonts), component list, and the list of image/video slots that must be supplied.
2. Then build everything, run `npm run lint` and `npm run build`, and fix all errors.
3. Test visually at 375px, 768px and 1280px. Test all hover/tap interactions, the weekly menu tabs, the pass flow and forms (valid + invalid input).
4. Finish with a README: how to run, where to edit content, which placeholders to replace, env variables, and a short list of anything not completed.

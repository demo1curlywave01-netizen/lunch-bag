# Lunch Bag — Pure-Vegetarian Homemade Office Lunch Delivery

A complete, production-grade web application built for **Lunch Bag** using **Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion**.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js**: v18+ (tested on Node v24)
- **npm**: v9+

### 2. Setup & Installation
```bash
# Clone or navigate to the directory
cd lunch_box

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Linting
```bash
npm run lint      # Runs ESLint (0 errors, 0 warnings)
npm run build     # Compiles optimized static & dynamic production routes
npm run start     # Starts production server on port 3000
```

---

## 🎨 Brand & Visual System (Strictly White + Red Theme)

- **Backgrounds**: Clean White (`#FFFFFF`), Warm Canvas (`#FFF8F6`), Blush Tint (`#FFE5E0`)
- **Primary Brand Red**: `#D62828` (appetizing food red)
- **Deep Red**: `#9D0208` (hover & pressed state)
- **Bright Accent Red**: `#C8102E`
- **Text**: Warm Near-Black (`#1F1A17`)
- **Pure Veg Mark**: Standard FSSAI green dot in square (`#16A34A`)
- **Typography**: `Fraunces` (Google Font - display culinary serif for headings) & `Plus Jakarta Sans` (modern, legible sans-serif for UI/body)

---

## 📂 Project Architecture & Content Configuration

All copy, menu items, passes, and media slots are cleanly centralized in [`src/content/`](src/content) so they can be modified in minutes without touching JSX layout code:

| File | Content Controlled |
|---|---|
| [`src/content/site-config.ts`](src/content/site-config.ts) | Brand name, tagline, phone, email, FSSAI placeholder, active delivery hubs, WhatsApp config |
| [`src/content/menu-data.ts`](src/content/menu-data.ts) | Monday–Friday rotating thalis (items, calories, protein, price, descriptions, highlights) |
| [`src/content/passes-data.ts`](src/content/passes-data.ts) | 5-Day Weekly & 20-Day Monthly Lunch Pass plans, pricing, terms, and FAQs |
| [`src/content/badges-data.ts`](src/content/badges-data.ts) | The 4 Zero-Compromise Health Badges (100% Pure Veg, Truly Homemade, Zero Palm Oil, No Artificial Stuff) |
| [`src/content/corporate-data.ts`](src/content/corporate-data.ts) | Corporate meal perks, benefits, and office setup steps |
| [`src/content/trust-data.ts`](src/content/trust-data.ts) | Verified transparent placeholders for customer reviews and partner logos |
| [`src/content/media-slots.ts`](src/content/media-slots.ts) | Structured asset registry with dimensions, aspect ratios, and subjects |

---

## 🖼️ Media Slots & Asset Replacement Guide

All photography slots are saved in [`public/images/slots/`](public/images/slots/) and mapped in [`src/content/media-slots.ts`](src/content/media-slots.ts):

| Slot ID | File Path | Aspect Ratio | Subject |
|---|---|---|---|
| `hero_video_loop` | `/public/images/slots/hero-thali-loop.mp4` | 16:9 | Steaming thali loop video (Fallback poster: `hero-thali-poster.jpg`) |
| `thali_monday` | `/public/images/slots/thali-monday.jpg` | 4:3 | Monday Shahi Paneer & Dal Tadka Thali |
| `thali_tuesday` | `/public/images/slots/thali-tuesday.jpg` | 4:3 | Tuesday Amritsari Rajma Masala Thali |
| `thali_wednesday` | `/public/images/slots/thali-wednesday.jpg` | 4:3 | Wednesday Dal Makhani Deluxe Thali |
| `thali_thursday` | `/public/images/slots/thali-thursday.jpg` | 4:3 | Thursday Methi Malai Paneer Thali |
| `thali_friday` | `/public/images/slots/thali-friday.jpg` | 4:3 | Friday Paneer Tikka Masala Thali |
| `story_founder` | `/public/images/slots/story-founder.jpg` | 1:1 | Founder in test kitchen |
| `story_kitchen` | `/public/images/slots/story-kitchen.jpg` | 16:9 | Stainless steel pure-veg cloud kitchen hygiene |
| `corporate_hero` | `/public/images/slots/corporate-lunch.jpg` | 16:9 | Corporate colleagues opening Lunch Bags in cafeteria |

> To replace any image with official client photos, simply drop the new photo in [`public/images/slots/`](public/images/slots/) matching the filename above.

---

## 🔒 Placeholders Marked for Client Provision

In strict adherence to the brief, **no fake reviews, ratings, corporate logos, licenses, or phone numbers have been fabricated**. The following placeholders are marked in config for client updates:
1. **FSSAI License Number**: Currently `FSSAI Lic. No.: [to be added by client]` in [`src/content/site-config.ts`](src/content/site-config.ts).
2. **Official Contact Phone & Email**: Set to `+91 98XXX XXXXX [to be provided]` and `hello@lunchbag.in [to be verified]`.
3. **Exact Prices**: Marked with `[price to be confirmed by client]` (e.g. ₹149 thali, ₹725 5-day pass, ₹2,599 20-day pass).
4. **Verified Customer Testimonials**: Set in [`src/content/trust-data.ts`](src/content/trust-data.ts) with `[Client to provide verified review quote]`.
5. **Partner Logos**: Clearly labeled `[Client Corporate Partner Logo 1..4]`.

---

## 💳 Payment Gateway (Razorpay Integration)

The application includes two production-grade API endpoints for payments:
- [`/api/razorpay/create-order`](src/app/api/razorpay/create-order/route.ts): Calculates price strictly from the server-side catalog (never trusting client-supplied amounts) and generates a Razorpay Order ID.
- [`/api/razorpay/verify-signature`](src/app/api/razorpay/verify-signature/route.ts): Verifies payment webhook/return signatures using SHA256 HMAC and `crypto.timingSafeEqual`.

### Configuring Keys:
1. Obtain test API keys from [Razorpay Dashboard](https://dashboard.razorpay.com).
2. Add them to `.env.local`:
   ```env
   RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_SECRET=...
   ```
3. *If keys are missing*: The application safely operates in **Mock Test Mode**, simulating checkout without real charges or errors.

---

## 📱 Responsive & Motion Highlights
- **10:00 Speed Ticker**: Live countdown stopwatch emphasizing the under-10-minute staging guarantee.
- **Card 3D Tilt**: Interactive cursor tracking with subtle red depth shadows.
- **Magnetic Buttons**: Framer Motion magnetic cursor follow, shine sweep, and press feedback.
- **Steam Wisps Animation**: Smooth rising steam keyframes on hot food visuals.
- **Interactive Day Tabs**: Animated sliding red pill indicator for Monday to Friday menus.
- **Pre-Order Tray Drawer**: Sliding cart drawer with time-slot selection (`12:30 PM`, `1:00 PM`, `1:30 PM`), desk location, and item quantity controls.
- **Floating WhatsApp Action**: Sticky floating button with pre-filled lunch ordering message.

---

## 📈 SEO & Performance
- Full OpenGraph & Twitter Cards configured.
- Structured JSON-LD metadata for `FoodEstablishment`.
- Dynamic XML sitemap generator at [`/sitemap.xml`](src/app/sitemap.ts).
- Dynamic robots config at [`/robots.txt`](src/app/robots.ts).
- Mobile-first responsive layouts tested across 375px, 768px, and 1280px+ viewports.

# Hotel Booking Search Form (Next.js + MUI)

A responsive, production-ready hotel search form built using **Next.js**, **Material UI (MUI)**, and **CSS Modules**. This component includes city suggestions, date pickers, guest selectors, and error handling, designed for seamless user experience.

---

## Features

- Responsive Design	Fully responsive layout adapting to mobile, tablet, and desktop (single-row layout ≥1024px).
- City Input with Suggestions	Implements a city search input with real-time suggestions dropdown (autocomplete behavior).
- Date Picker	Dual date pickers for check-in and check-out with min-date set to the current day.
- Guest Selector	Custom input field for selecting number of guests, with icon and input validation.
- Search Button	Custom-styled button with embedded icon; triggers search and routes to result page on submit.
- Error Handling	Validates inputs and displays user-friendly messages if fields are incomplete or invalid.
- Navigation on Search	On valid input, navigates to the results page with query parameters (e.g., city, date, guests).
- Visual Enhancements	Integrated SVG icons for UI clarity (calendar, guests, search icon, back button).
- Component-Based Structure	Modular, reusable React components (e.g., HotelsSearcher, HotelCitiesSuggestions, Button).
- Styling with CSS Modules	Scoped and maintainable styling using CSS Modules for clean separation of concerns.

## Assumptions Made
- City suggestions are based on a predefined list or mocked data (not fetched from a live API).

- Only cities are searchable in the input field — no hotel names, areas, or pin codes.

- Date logic assumes users must select both check-in and check-out dates.

- Guests field supports selection of a total number of guests only — no categorization (e.g., adults vs. children).

- Navigation assumes the presence of a /hotels route that accepts query parameters:
?city=...&checkin=...&checkout=...&guests=...

- The form does not include price range, hotel filters, or room selection features.

- The design prioritizes desktop view with all inputs aligned in one row for screens ≥1024px.



---

## 🛠️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hotel-search-form.git
   cd yatra-online-assignment


## Getting Started
Install all the dependencies by running 
```bash npm i ```
then , run the development server:

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


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

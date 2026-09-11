# Memory Card

🔗 **Live Demo:** [add link after deploying]

## Introduction

This project is a football-themed memory card game, built as part of The Odin Project's React course. The rules: click a card to score a point, but click one you've already clicked and your current score resets to zero. The goal is to click through all 12 cards without repeating one.

## Initial Project Goals

- Apply `useState`/`useEffect` to manage state and side effects in a real React app.
- Fetch and handle asynchronous data from an external API (`async/await`, `Promise.all`).
- Practice lifting state up to coordinate data across multiple components.
- Build a complete game loop: scoring, duplicate detection, and shuffling.

## Technologies Used

- React (Vite)
- TheSportsDB API — player data and photos
- ESLint + Prettier
- Vercel (deployment)

## Completed Features

- Fetches 12 football players from TheSportsDB API on mount.
- Preloads all player images before revealing the grid, avoiding images popping in one by one.
- Reshuffles all 12 cards after every click (Fisher-Yates shuffle).
- Tracks current score and best score, updating correctly on both win and loss.
- Loading screen with a spinning indicator while data and images are still loading.
- Football-themed UI: circular photo frames that neutralize clashing jersey colors, a pitch-green palette, and gold accents.

## Skills Demonstrated

- **Asynchronous state management**: used `useEffect` with an empty dependency array to fetch data exactly once on mount, combined with `async/await` and `Promise.all` to run multiple requests in parallel and gather their results.
- **Manually creating Promises**: wrapped the native `Image` element's `onload`/`onerror` events in a Promise to sync image preloading with the component's loading state.
- **Lifting state up**: split responsibilities cleanly between `App` (score, clicked cards) and `CardGrid` (card data, shuffle logic), communicating through props and callbacks.
- **Array shuffling algorithm**: implemented the Fisher-Yates shuffle without mutating state directly.
- **Plain CSS**: infinite rotation animation with `@keyframes`, Flexbox/Grid layout, and choosing `min-height` over a fixed `height` to prevent content overflow on browser zoom.

## Lessons Learned

- **Biggest challenge**: repeatedly reading a stale state "snapshot" within the same event handler right after calling a setter (e.g. checking the win condition immediately after updating clicked cards), which led to incorrect comparisons even though the setter itself was called correctly.
- **How I solved it**: instead of reading the state variable again after calling its setter, I computed the new value directly where needed (e.g. `newClickedCards.length`) and passed it as a parameter to the next function, rather than relying on state that would only update on the following re-render.
- **General takeaway**: understanding that React state doesn't update synchronously is essential before writing logic with several interdependent conditions inside a single event handler.

## Credits/Attribution

- **Player data and photos**:
  - Source: [TheSportsDB](https://www.thesportsdb.com/)
  - License: Free API key (`123`), used for learning/non-commercial purposes.

## Contact

- GitHub: @BaoLong294
- Email: longbao2904@gmail.com
- LinkedIn: Long Bảo

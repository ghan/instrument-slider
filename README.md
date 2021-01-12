# Carousel Slider for Instrument 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**`npm start`** to run

Requirements:
- [x] Libraries are allowed only for tweening (other than React).
- [x] Carousel should have 3 or more slides containing an image which links to an external url.
- [x] The carousel should loop back to the front when at the end, auto-advance every 10 seconds,
and should pause auto-advancing when the mouse is hovering over the carousel.
- [x] Carousel should have paging arrows for next and previous as well as paging dots to link directly
to a given slide and show the current slide index.
- [x] Carousel should be responsive down to 480px wide.
- [x] Carousel should meet basic WCAG 2.1 AA accessibility standards.

Notes:
- Normally I'd use a CSS-in-JS pattern for styling, leveraging a library like `styled-components`. Since third party libraries are not allowed, I styled in CSS.
- To comply with WCAG, I consulted the documentation here https://www.w3.org/WAI/tutorials/carousels/
- PropTypes is included for basic type checking. 

Edge Cases:
- if you click forward or backward very quickly, the animation goofs.
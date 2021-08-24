# SeatFreak

![Home Page](https://i.imgur.com/Rq2rUoy.jpg)

An E-Commerce web application called SeatFreak (inspired by SeatGeek) created in React to view, search, and mock purchase tickets for upcoming live events. The application utilizes the TicketMaster API and IP Info API to retrieve event data in the user's area. The user may also search by keyword to find event listings sorted by date, view price ranges and seating maps, and select individual events for additional info.

## Background
My passion for FinTech, live events, and E-Commerce inspired me to build a React-based replica of the SeatGeek website. E-Commerce websites help fuel online business which is becoming more and more paramount as we live in a world post-Covid.

By developing this project, I have a better understanding of how to build a responsive E-Commerce web application using React and I can demonstrate my knowledge of React Routes, React Hooks, and integrations to multiple 3rd Party APIs.

[Deployed Website](https://seatfreak-ajz.herokuapp.com/)

## Installation
API Keys for the following APIs are required to run locally.
-   [TicketMaster](https://developer.ticketmaster.com/)
-   [IpInfo](https://ipinfo.io)

In the project directory, you can run:
#### `npm install`
#### `npm start`

## Tech Stack
-   Built with React (HTML / CSS / JavaScript / JSX)
-   TicketMaster API
-   Semantic UI
-   React Icons
-   Google Fonts
-   Heroku

## Features List
-   Responsive mobile design.
-   Retrieve trending nearby events using Geolocation.
-   Search events by keyword to display a list of live events sorted by date.
-   Select individual events for seating map information.
-   Mock purchase tickets by selecting individual events and number of tickets.

## Future Enhancements
-   Integration with Stripe or other payment processing APIs.
-   Add additional event detail.
-   Add a dedicated checkout page instead of a modal.
-   Add ability to sign in a view the tickets you have purchased.
-   Fix minor bugs.
-   Clean up code to make DRY.

## Challenges
-   The most difficult part of the project was determining the right API. Given the short timeframe, I knew it was integral for me to find an API I felt comfortable working with. I had a number of Project 2 ideas that would have been difficult to implement because I couldn't find a quality API to retrieve data from.
-   Responsive design is extremely important to me so as with Project 1, I felt it was important to focus on making it look professional and mobile ready. Once I got going with responsive styling, it wasn't too bad, but I realized afterwards that there could have been better and easier ways to do it.

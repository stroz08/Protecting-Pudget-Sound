# Testing Plan

## Types of Testing

- Manual Acceptance Testing
  - Manually test application's functionality by completing tasks to see if the website works as expected according to our business requirements
  - Testing from a user's perspective

## Test Environment

- MacBook Pro
- ASUS laptop
- HP laptop

### Supported Browser/OS Combination

- Google Chrome and macOS Monterey
- Google Chrome and Windows 10
- Google Chrome and Windows 11

## Process

[TODO]

## Manual Acceptance Testing Script

This application has no user authentication, so there is no difference in functionality based on users being logged in. Tests should be run against code in the production environment, on supported browser/OS combinations. There is no custom data for testing purposes.

#### Home Page

1. Visit the home page of the application. Expect to see the navigation bar at the top of the page with the application's name and logo on the left and the navigation buttons (Explore, Get Involved,and About) on the right. The Explore and Get Involved buttons should display subpages when hovered over. Below the navigation bar, expect to see a phrase “I’m curious about” followed by a drop down menu with nothing selected. A search button should be to the right of the dropdown. Below, you should see a map in its default state (no heat map overlay). (Page 1)
2. Select a species from the drop down menu and complete the search. Heat map overlay should be shown on the map. (Page 1.1)
3. Select an area within the Puget Sound waters. A tooltip should pop up displaying the Marine Area you selected with a hyperlink titled ‘Learn More’. (Page 1.2)

#### Explore Page

1. Visit the Explore page found in the navigation bar. Expect to see the title of the page on the top left of the page below the navigation bar. Two cards displaying images should be below the title. When hovering over the cards, a slightly transparent overlay should appear along with the title of the card. (Page 2)
2. Click on the card title ‘Marine Areas’ to take you to the Marine Areas subpage. A title saying ‘Marine Areas’ should appear in the top left of the page below the navigation bar. Below the title expect to see cards representing the different marine areas in the Puget Sound. The name of each area should be displayed in the card, along with an image and its respective number. When hovering over a card, the name should become bold and underlined. (Page 2.1)
3. Click on a marine area card to take you to its respective information page. At the top left of the page below the navigation bar, expect to see the marine area number and name. Below the name will be a block of text. To the right of the block of text will be an image showing the marine area. (Page 2.1.1)
4. Go back to the Explore page by clicking the respective button in the navigation bar. Then click on the card title ‘Species’ to take you to the Species subpage. A title saying ‘Species’ should appear in the top left of the page below the navigation bar. Below the title expect to see cards representing a selection of different species in the Puget Sound. The name of each species should be displayed in the card, along with a corresponding image. When hovering over a card, the name should become bold and underlined. (Page 2.2)
5. Click on a species card to take you to its respective information page. At the top left of the page below the navigation bar, expect to see the species name. Below the name will be a block of text. To the right of the block of text will be an image showing the species. (Page 2.2.1)

#### Get Involved Page

_(Stretch Goal)_

#### About Page

1. Visit the About page found in the navigation bar. Expect to see a title saying ‘About Us’ in the top left of the page under the navigation bar. Centered below that, expect to see a header saying ‘Our Mission’. Below that should be a block of text. Similarly, below the block of text should be another header saying ‘Why?’. Another block of text will appear below that. Lastly, expect to see information about the team members at the bottom of the page. (Page 4)

## Defect Management

- If a bug is found, add it as an issue in Github and assign it to a developer for fixing.
- Once the bug has been fixed, run the acceptance test again to make sure it has been fully resolved.

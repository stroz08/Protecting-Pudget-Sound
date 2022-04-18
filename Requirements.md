### Requirements

#### General 

1. Every page in our website will have a fixed navigation bar at the top showing our logo/ site title on the left and links to the other pages on the right: Map, Explore, Get Involved (stretch goal), About Us. 
3. Clicking on the Map button on the navigation bar directs the user to the Map page.
4. Clicking on the Explore button on the navigation bar directs the user to the Explore page.
5. Clicking on the Get Involved button on the navigation bar directs the user to the Get Involved page.
6. Clicking on the About Us button on the navigation bar directs the user to the About Us page.
7. Under the map on the home page a disclaimer will be displayed 
  “We are not responsible for any consequences due to out-of-season fishing. Please refer to Washington’s Marine Area regulations before fishing.”


#### Non-functional Requirements 

1. All website pages are approved by a web accessibility color contrast tracker. 
2. This website will be usable on browser widths larger than 1300px. 


#### 1: Default Home Page

1. The phrase “I’m curious about” followed by a drop down menu will appear at the top of the page.
2. A search button will be displayed next to the drop down menu. 
3. The map will be displayed below in its default state and take up almost the entire page. The land will be grayed out and no color will be in the water. 
4. In all of its states, the map will have a colored legend where the upper part of the legend has warmer colors describing higher density marine populations and the lower part of the legend has colder colors describing lower density.
5. Disclaimer will be displayed below the map in all states. 

#### 1.1: Home Page with Input

1. Users will select a species from the dropdown menu listing the different species they may choose from.
2. Users will click the search button to trigger the map.
3. The heat map will correlate to the queried species in the dropdown menu on the top right corner of the screen. The land will remain grayed out, while the water will be covered in the colors corresponding to the key.


#### 1.2: Home Page with Pop-up

1. Clicking on an area on the map displays a pop up tooltip which describes the marine area as well as a “Learn More” button.
    1. Pop up tooltip does not work in map’s default state, when clicking on land, or when clicking on water outside of the Puget Sound area. Tooltip is only available for marine areas. 
2. Clicking on the “Learn More” button for any specific marine area will direct the user to that specific marine areas page (2.1.1)
3. Directions for how to use the map will be displayed below the map.

#### 2: Explore Page

1. The page has two cards for ‘Marine Areas’ and ‘Species’ next to each other that take up most of the screen.
2. When the user arrives at the ‘Explore’ page, neither card is selected. 
3. Both cards are selectable and display a related image.
4. When the user hovers over the ‘Marine Areas’ card, a slightly transparent overlay will appear over the image and the title will be shown.
5. When the user clicks on the ‘Marine Areas’ card, they will be redirected to the Marine Area page. (2.1)
6. When the user hovers over the ‘Species’ card, a slightly transparent overlay will appear over the image and the title will be shown. 
7. When the user clicks on the ‘Species’ card, they will be redirected to the Species page. (2.2) 

#### 2.1.1: Marine Area Info Page

1. Name of the marine area will be at the top of the page.
2. Display a static map of marine area boundaries on the right side.
3. Page will offer fixed information about the specified marine area below the name to the left of the image.
4. Upon hover, the map will expand in size to a larger view for greater detail.
5. Page will be scrollable to encompass further information.
6. Information such as name, description, and image will not be clickable.

#### 2.2: Species Page

1. When page loads, the page will display common fish species found in the Puget Sound.
2. When page loads species page each species will be listed in alphabetical order.
3. Each species will have its own card-like display, no two species will share a card.
4. Each card is clickable.
5. When a species card is clicked the user will be directed to the respective species page. 
6. Cards are sorted alphabetically by default.
7. There will be a filter button to filter what species are displayed on the page. 
8. Filter options include by marine area and by at-risk species
    1. Filters are inclusive, so results will show for every filter that is selected. For example, if Marine Area 7, Marine Area 8, and at-risk species are all selected, all species that fall under any of these categories will be displayed. 
9. When the filter is selected, a checkmark is added to the selected filter.
10. The cards automatically reload to match the filter.
11. To remove the filter, the user deselects the filter. The checkmark will be removed and the cards will reload to match.
12. Filter by marine area. 
    1. When clicked, only species found in that area will be displayed.
13. Filter by at-risk species. 
    1. When clicked, only at-risk species will appear with a warning mark in the top right corner of the card.
14. Page must be accessible by hovering over the ‘Explore’ button on the navigation bar, as well as by clicking the ‘Species’ card on the ‘Explore’ page.


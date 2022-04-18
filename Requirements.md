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

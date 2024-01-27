# Our Fellow Neighbors 

This breakdown details the technologies employed in each file of the project. Gain insights into the tools and concepts utilized to create the Our Fellow Neighbors.

# HomeBirds.js
The explenations apply to `HomeFish.js`, `HomeTrees.js` and `HomeMammals.js`

1. **React.js:**
   - A JavaScript library for building user interfaces.
   - Used for creating reusable UI components and managing the application's state.

2. **useState:**
   - A React Hook used for adding state to functional components.
   - Enables the component to maintain and update its state.
   - The `useState` hook is utilized to manage various states, including `birdsQuery`, `filteredBirds`, `selectedBirds`, and `showAboutBirds`.

3. **useEffect:**
   - A React Hook used for handling side effects in functional components.
   - Used to update the `filteredBirds` state when the `birds` prop changes.

4. **CSS Styling:**
   - External CSS (`HomeAnimals.css`) is imported to style the components.
   - The `animal-about` class is used for styling a section with information about birds.

5. **Image Rendering:**
   - An image of birds (`welcomeBirds`) is imported from the assets folder and displayed in the component.

6. **Event Handling:**
   - Event handling functions like `handleBirdsSearch` and `handleBirdsClick` are defined to respond to user input.
   - `handleBirdsSearch` is triggered by changes in the search input field, updating the `birdsQuery` and filtering the displayed birds accordingly.
   - `handleBirdsClick` is triggered when a bird is clicked, updating the `selectedBirds` state and displaying additional information (`AboutBird` component).

7. **Rendering Logic:**
   - Conditional rendering is employed based on the `showAboutBirds` state. If true, the `AboutBird` component is rendered; otherwise, a welcome message and image are displayed.

8. **Input Field and List Rendering:**
   - An input field is rendered for users to search for birds.
   - The list of birds (`filteredBirds`) is mapped and displayed as clickable list items.

11. **Prop Handling:**
    - The `birds` prop is received and used to initialize the `filteredBirds` state in the `useEffect` hook.

13. **Functional Programming:**
    - Functional programming concepts are demonstrated through the use of array methods like `map` and the creation of event handling functions.

## AboutBirds.js 
The explenations apply to `AboutFish.js`, `AboutTrees.js` and `AboutMammals.js`

1. **Props** 
    - the component receives a prop ('bird') containing information about a specific bird. 

2. **Image Rendering**
    - An image of the bird (`bird.img`) is rendered using the `img` tag.
    - Alt text is provided for the image to enhance accessibility.

## Menu.js 

1. **Routing:**
   - React Router is a library for React.js that enables declarative routing in a single-page application. It allows developers to define how the application's UI should change in response to a change in the URL, providing a seamless adn dynamic user experience. 
   - The menu items are associated with specific routes using the `to` prop of the `Link` component.
   - Routes include "/home", "/trees", "/fish", "/mammals", "/birds", and "/contact".
   - The `Link` component is an integral part of React Router, facilitating client-side navigation without triggering a full page reload.


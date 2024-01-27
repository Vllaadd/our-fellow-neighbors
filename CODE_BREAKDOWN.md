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


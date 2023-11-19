# React-phonebook-04

This repository contains the refactored solution for the "Contacts Book" task, implementing state management using Redux Toolkit. The Redux state structure is as follows:

`
{
  contacts: [],
  filter: ''
}
`

- No errors or warnings in the console when running the code.
- Each component has a separate folder with a React component file and a styles file.
- Minimal required data is stored in the Redux state, managed via Redux Toolkit.
- Utilizes `configureStore()` to create the Redux store.
- Uses `createSlice()` function for state management.
- Defines actions for saving and deleting contacts, as well as updating the filter.
- Connects React components with Redux logic using the `react-redux` library and its hooks.
- Implements Redux Persist to store the contacts array in local storage.


1.  What problem does the context API help solve?   
    - you no longer have to pass props down from component to component

2.  In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known       as a 'single source of truth' in a redux application?
    - store is where state is kept which is why it is the single source of truth... because data flows only from there.
    - actions are simply synchronous and asynchronous functions that dispatch a type and a payload to the reducer of the application
    - the reducer is a simple pure function that copies state, makes a single (or many) changes to state and returns a new copy in place of previous state.
    - the store is revisited here because when state is updated so is the store. Now the UI re-renders based on the most up to date store.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - application state is global and when updated all components within have access to the updates. 
    - component state is localized state within a single component and the rest of the application has no access to this state.
    - It is best to use component state for things that do not need to interact with the rest of the application. 
    
4.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
    - redux thunk is a piece of middleware that allows you to create and pass action creator functions asynchronously

5.  What is your favorite state management system you've learned and this sprint? Please explain why!
    - I like context api but redux is by far my favorite. There are many moving parts and I love seeing it come together. There will be so much I have to learn still about managing redux but this is what I will see most often so I want to tackle it harder than context API which is easier to brush up on the details due to fewer moving parts.


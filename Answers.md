- [ ] What problem does the context API help solve?
  -Simplify state management.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  -Actions are an object with a required type key, an optional payload key, that are dispatched by dispatch functions.
	-Reducers are a place to organize all the actions we need for the application.
	-Store is an object that contains our state and represents the changes for the app
	-We can only change state within the redux reducer.

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
  -Application state is the top layer so all the components will be able to access that, and component state is state made in that one component that will only be available to the children underneath it.
	-Application state would be used when you have multiple components accessing it, and component state will be used when its just for that one component or children it can be passed down to.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  -Redux thunk is a middleware that calls action creators that return a function. We can customize how we dispatch our actions.

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!
  -Even though im a bit rusty with redux i rather redux over context. Redux has one place for all the actions, it seems more organized, i feel i would get confused of the flow if i had to be ontop of the contexts and where they are placed.
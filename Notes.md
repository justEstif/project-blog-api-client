# Client side

## Using

- React (vite.ts)
- Axios
- react form hook
- tailwind + tailwindstyledcomponents(npm package)

## Project Structure

- pages
- components
- context

## Pages:

- HomePage
  - GET /api/posts
- PostPage
  - GET /api/posts/:id
- RegisterPage
  - POST /api/register
- LoginPage
  - POST /api/login
- LogoutPage
  - POST /api/logout
- OwnerPage
  - UPDATE /api/posts/:id
  - DELETE /api/posts/:id

## Components

- form for login and register
  - react-form-hook

## Global Context:

- current user

## TODO

model: <https://hugotex.vercel.app/>

1. make home page

  - [X] create nav bar
    - [x] Logo -> link to home page
  - [X] User icon when not logged in
  - [ ] Logout icon when logged in (with username)

2. Create login page
  - [ ] react router: <https://www.theodinproject.com/lessons/node-path-javascript-router>
  - [ ] zustand
  - [ ] form -> react form hook + axios
    - context login: <https://dev.to/finiam/predictable-react-authentication-with-the-context-api-g10>
    - create a custom hook `useAuthListener` -> for checking login/logout user and returning user
  - [ ] keep user in context that is accessible app wide
  <!-- TODO: Move the api related func to services/api.ts -->
    - requests objects for the url to be sent to the api
    - create functions that work with the api

3. Create post page
4. Create comment form in post page
6. Create owner website
  1. Create owner create, edit post page

highlight js: <https://highlightjs.org/>


## User store

- logginUser function
  - function to get response from api
    - getResponse(request) => response ??
  - function to confirm api function ->
    - <!-- TODO: Fix the backend response if not good  -->
  - function to change the currentUser store based on the returned value
- registerUser function
- logoutUser function
- currentUser
  - token
  - user
    - username
    - id
    - email
    - owner
<!-- DONE: LOGOUT -->
<!-- DONE: Add bearer header to axios -->

what does it mean to log in a user
  - get the user info
  - get response from api
  - get the user and token
  - set the user and token in the store to that value
    - ther need to be some initial user and token in the store
  - return some message of success
  - redirect to homepage
    - the homepage checks is there is a token, and if there is sends it with the useAuthListener request
  - prevent logging or registering

<!-- DONE: create a register user function in the store or use the login user  -->
<!-- DONE: create a register user function in the api.auth -->
what does it mean to register a user?
- get the user input for email, username, password
- call the api and send a post request with that information
- if there is a response, login user, set the token to that value, and redirect to the home page

functions
  - `logInUser`
    - calls api /api/login
      - if success
        - get user and token
        - sets the user and token
      - else
        - shows error message to user

  - Handle the way a post is shown
    - show comments
    - allow create comments and update comments on post

  - Owner create, update, delete posts

Done: show the post title and body
Show comments in order
Add form for writing comments
Only allow logged in user to write commments

user logins in
  - token and user store in store
  - opens post
    - post: scrolls
      - sees comments form
      - write comments
      - submit
        - call api
        - save the comment
    commentData: CommentDto,
    userId: string,
    postId: string

form:
  - body: get the input

  on submit:
    - from the location get the post id
    - call the createComment with the post id and the user id in store
    - on comments update the page ??

  - api url: POST /api/posts/:id/comment

### Owner Page

-User logs in

  - if user show button on nav bar
  - create page for owner
  - owner create, update, delete post pages
  - create routes that get redirected if not owner

- if owner show a delete button next to the post when deletes the post, and an update post
- Show all posts in the owner page just like the home page

- Add button that says create post
- Open create post page which is a form with a title and body input and publish checkbox
- If user open a post
- show an update post and delete post button
- update post open form with the posts content and on submit updates it
- delete post asks for confirmation and deletes the post
- Get posts
- Update post form
- Delete post


- if owner show mark on nav bar then:
  - if post page show and edit, delete and create button

- TODO:
  - refresh page after the comment is made


NOTE:
- There seems to be a bug when trying to  `useNavigate` after a post request

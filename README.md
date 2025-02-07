# Web Chat With Friends

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.


### Elevator pitch
**Web Chat With Friends** aims to provide a simple way to communicate with friends or family across devices! No need to download a hundred apps across different devices, no more waiting for updates to install before replying to someone, or discovering that your favorite app isn't compatible with your new phone or operating system - all you need is your browser, username, and password and you're good to go!


### Design
![image](https://github.com/user-attachments/assets/8466b9c3-e1a6-4600-8eae-4dce3a7fad62)


### Key features

- Users will create a username and password if they don't already have one, or log in using an existing username and password.
- The startup will provide daily knock knock jokes from the Humor API to help users start conversations back up that have gone stale.
- Users will be able to see and continue their previous chats if they log in using an existing username and password, previous chat contents persist between sessions.
- Users will be able to see the activity status of their friends, if they're active in the app or away.
  

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - I will be using two HTML pages for the login screen and for the chat screen. Friends and their status will be displayed on the left, with the current chat window in the center of the screen. Selecting another chat will cause the chat window to change to that of the selected person.
- **CSS** - The page will resize to correctly fit different screen sizes, to ensure elements are properly sized. The webpage will use proper style and formatting.
- **React** - Allow users to log in, send messages, see friend status, display text as it's typed and display it in the chat history once sent.
- **Service** - The application will retreive login information, friends list, and chat history. It will retreive the daily knock knock joke from the Humor API.
- **DB/Login** - Stores users, friend association, and chat history in a database. Users won't be able to send or receive messages until logged in with a valid account. Welcome message placeholder added that displays user's username at the top of the chat page.
- **WebSocket** - When a user sends a message, their active status will be enabled be visible to those on their friends list. Sending a message to a friend will update their page to display its contents.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://webchatwithfriends.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I have two HTML pages, one for logging in, and one for viewing friend list and talking to them.
- [X] **Proper HTML element usage** - Used HTML elements to sort and display text, provide interactable buttons/text fields, manage lists and tables, link images, and link other websites.
- [X] **Links** - I implemented links to move between the login page to the chat page, as well as hyperlinks to my GitHub page.
- [X] **Text** - I used text throughout the deliverable to convey information about interactables to the user and to present the daily joke.
- [X] **3rd party API placeholder** - The bottom of the chat page has a placeholder joke, once implemented it will display a random joke each day.
- [X] **Images** - I used a chat bubble image for the favicon and in the header next to the "chatting with friends" title.
- [X] **Login placeholder** - The login page has fields to submit a username and password
- [X] **DB data placeholder** - Friends are displayed on the left side of the chat page, previous messages are available for viewing.
- [X] **WebSocket placeholder** - The "active" status icon next to friend names will change based on their recent activity.
      
## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - Header and footer are consistentn across pages and have proper formatting and styling.
- [X] **Navigation elements** - Links to navigate between pages work correctly, as well as links to my Github page.
- [X] **Responsive to window resizing** - Elements shift and disappear based on window size to prevent overlap with key features.
- [X] **Application elements** - The page is easily understandable and readable at a glance.
- [X] **Application text content** - Text is formatted neatly and colored to indicate web links.
- [X] **Application images** - Used my logo as a favicon in the top bar and in my header.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.

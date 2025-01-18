<h2>About the App</h2>
The Contact List Manager App.
<br><br>
I have created this application using the MERN stack. The application has the following functionalities:
<ol>
  <li>The user can add new contacts.</li>
  <li>The user can search for any contact using the name of the contact or email of the contact.</li>
  <li>BONUS: The user can remove any contact from the contacts list.</li>
</ol>
This project demonstrates my approach to building a full-stack application with a clean, maintainable, and scalable codebase.
<br>
<h2>Screenshots of the application</h2>
<img width="1710" alt="Screenshot 2025-01-17 at 7 03 31 PM" src="https://github.com/user-attachments/assets/62b9eb35-b06a-4093-924e-e5a2237b892b" />
<img width="1710" alt="Screenshot 2025-01-17 at 7 03 42 PM" src="https://github.com/user-attachments/assets/777fd88d-318c-43f3-be50-fadfe545c560" />
<img width="1710" alt="Screenshot 2025-01-17 at 7 03 54 PM" src="https://github.com/user-attachments/assets/db5f17e0-25c3-468a-8c6e-c42280c0431e" />




<br>
<h2>Setup and Run Instructions</h2>
<ol>
  <li>Make sure to install node v21 (preferred).</li>
  <li>Clone the repository.</li>
  <li>Open the project in Visual Studio Code.</li>
  <li>First, navigate to the frontend "contact-list-app" directory using the "cd contact-list-app" command, and follow the following steps:</li>
  <ol>
    <li>Run the command "npm i" or "npm install" in terminal to install the node dependencies.</li>
    <li>Next, run the command "npm run dev" in terminal.</li>
    <li>Next, copy the link in the terminal, open a browser (chrome or any), paste the link, and it will start the react frontend of the app.</li>
    <li>React app is up and ready!</li>
  </ol>
  <li>Secondly, return to the root directory then navigate to the backend "contact-list-service" directory using the "cd contact-list-service" command, and follow the following steps:</li>
  <ol>
    <li>Create a file ".env" and add "PORT=3000", and "MONGO_CONNECTION=your_mongo_connection_string"</li>
    <li>Run the command "npm i" or "npm install" in terminal to install the node dependencies.</li>
    <li>Next, run the command "node server.js" in terminal. The backend node server should start now.</li>
    <li>Backend is up and ready!</li>
  </ol>
  <li>Now, you can add new contacts, search for any contact, and remove any contact from the contact list manager.</li>
  <li>Application should be up and ready!</li>
</ol>

<br>
<h2>Approach Explanation</h2>
<u><I>Technology Stack incorporated:</I></u>
<ul>
  <li>Backend: Node.js with Express.js</li>
  <li>Frontend: React with HTML, CSS, and Material-UI (MUI) for styling and components</li>
  <li>Database: MongoDB (NoSQL database)</li>
  <li>Testing: HTTPie for API endpoint testing</li>
</ul>
<br>
<u><I>Design - Backend</I></u>
<ul>
  <li>I started the backend development first by designing and building the core services the application needed. Once the services were ready, I put them through their paces with HTTPie, testing each endpoint thoroughly to ensure everything worked smoothly before shifting my focus to the front end.</li>
  <li>Flow of work: MongoDB Setup -> Designed Models -> Implemented Services -> Added Controllers -> Defined Routes -> backend-app is ready</li>
  <li>Created 4 endpoints to handle core functionalities:</li>
    <ul>
    <li>GET /contactlistmanager: Retrieve all contacts from the contact list.</li>
    <li>POST /contactlistmanager: Add a new contact to the contact list.</li>
    <li>GET /contactlistmanager/search/<name_or_email_or_keyword>: Search for a contact using the name or email.</li>
    <li>DELETE /contactlistmanager/:id : Delete a contact using its unique ID.</li>
    </ul>
</ul>

<u><I>Design - Frontend</I></u>
<ul>
  <li>I designed and implemented the user interface with React, combining HTML, CSS, and MUI components to create a sleek, responsive design tailored to the app's needs. To keep things efficient and organized, I developed reusable frontend services for handling API calls, making the codebase cleaner and easier to maintain.</li>
  <li>Used: React Hooks for state management - useState, useEfffect. Props for the flow of data across components. fetch() to make API calls. Used HTML, CSS, and MUI components for quicker, faster, and custom development of components.</li>
</ul>

<u><I>Trade-offs and Decision Making</I></u>
<ol>
  <li>I opted for useState and useEffect to manage the state, keeping the code simple and lightweight. Since the app is relatively small and not overly complex, I decided to skip Redux for now to avoid the extra setup and overhead of a global store. That said, if the app grows in size or complexity, Redux can easily be added later to handle state management more effectively.</li>
  <li>I created a separate service layer for API calls to keep the components clean and make the code more reusable in the frontend react app. This approach helps reduce repetition and makes the codebase easier to manage and maintain.</li>
  <li>I chose MongoDB for its flexibility and seamless integration with Node.js. To address the lack of strict schema enforcement, Mongoose models with validation can be used.</li>
  <li>I relied on HTTPie for quick and efficient testing of endpoints during backend development. I didn’t set up automated tests this time due to time constraints.</li>
</ol>

<h2>Author</h2>
Chiragkumar Maisuria, a Full Stack Developer

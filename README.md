Random Website (Quizzie)

A small, playful website made of a few unrelated mini-projects stitched together. It started with "I had no clue what to make, so I made some random stuff", and it turned into a quiz, a junk food fact explorer, and a spooky job application form.

What's in it
Quiz Time! A general knowledge quiz. Each round picks 5 random questions from a larger pool, and the answer order is shuffled every time. It has a live score, a progress bar, and a different result message depending on how well you do. You can restart for a fresh set of questions.
Disadvantages of Yummy Food. After the quiz, pick your favourite junk food (noodles or brownies) to see fact cards about what it does to your body, plus a tip on how to enjoy it a bit more healthily.
Job Application at Charlie's. A haunted hotel job application form. Your answers (name and chosen position) are used to build a creepy "you're hired" message.
Dark mode. A toggle button in the top corner switches between light and dark themes.
Responsive layout. The site adjusts for smaller screens (the decorative sticker and image stamps are hidden on small devices).
How it's built

This is a plain front-end project with no frameworks, no build step, and no dependencies to install.

Technology	Used for
HTML	Page structure. Every "screen" is a div in a single page.
CSS	Layout (flexbox and grid), the stamp-style image borders, hover effects, dark mode, and the responsive rules.
JavaScript	Quiz logic, screen switching, form handling, and the theme toggle.
Google Fonts	Fredoka (main font), Special Elite and Creepster (haunted hotel theme).

A few implementation notes:

One page, many screens. Each section is a .screen element, and only the one with the .active class is displayed. JavaScript moves between screens by adding and removing that class.
Quiz data lives in an array. Questions are stored as objects in allQuestions, each with a list of answers marked correct: true or false. A Fisher-Yates shuffle function randomizes both the questions picked for each round and the order of the answers.
Dark mode is a single dark-mode class on <body>. The CSS overrides colors for each element when the class is present.
Project structure
.
├── index.html      # Page structure and all screens
├── style.css       # All styling, including dark mode and responsive rules
├── script.js       # Quiz logic, navigation, form handling, theme toggle
├── README.md
└── *.jpg / *.png / *.jfif   # Images used by the site

The site expects these image files in the same folder as index.html:

hmm-removebg-preview.png (the sticker on the intro)
sesame-noodles-1-11.jpg
hakka-noodles-platter-sq1.jpg
images.jfif
Fudgy-Cocoa-Brownies-13-1.jpg
Dark-Chocolate-Brownies-shutterstock_112430981.jpg
How to run it

There is nothing to install.

Option 1: Open the file

Download or clone this repository.
Double-click index.html to open it in your browser.

Option 2: Use a local server (optional)

Some editors and browsers behave better with a local server.

VS Code: install the "Live Server" extension, right-click index.html, and choose Open with Live Server.
Python: from the project folder, run:
bash
  python -m http.server 8000

Then visit http://localhost:8000 in your browser.

Note: the site loads its fonts from Google Fonts, so you need an internet connection to see them. Without one, it falls back to your system fonts.

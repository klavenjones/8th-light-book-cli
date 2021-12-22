# 8th Light Google Book API - Klaven Jones

This is a simple command line application that allows you to search for books and save them to a text file. This application leverages the Google Books API.

# 🟢 How to get Started

---

In order to get started you need [Git](https://git-scm.com/), [Yarn](https://yarnpkg.com/) and [Node](https://nodejs.org/en/) installed.

Clone this project:

`git clone https://github.com/klavenjones/8th-light-book-cli.git`

Go into the directory:

`cd 8th-light-book-cli`

Install dependencies:

`yarn install`

# 💻 Running the app

---

Once you've downloaded the dependencies you can run the app using `yarn execute`

From the terminal you will see options, and some instructions on how to run the application.

# ✅ Testing

To run tests just run the command `yarn test`.

# Environment Variables

Be sure to add your google api key to a .env file

```jsx
GOOGLE_API_KEY=<APIKEY>
```

# Approach

So I wanted to create a command line application where the application has a set of menu items, that will lead the user to their goal, which is to search for books and save it to a list. I used a cool library called inquire to create the menu for the user. I also used a libraries like chalk and boxen to make it a bit more eye catching for a user when they create the application.

## Challenges and what I learned

### Tests

One of my weakness as a programmer are tests. I have knowledge of how to write tests using libraries like Jest. But I lack the knowledge of writing good meaningful tests and being knowledgable with certain methodologies when it comes to writing test. So I had to do a bit of research and I still have a long way to go in that regard, but I learned quite a bit.

For this project, I started by writing tests that test for the input of the application to make sure it fails when the wrong type of input is given. I’m eager to learn from the feedback I’ll receive from you guys!

## fs

Another challenge was learning how to save a file and read a file using JavaScript. After some research I came across this cool library built in to node called fs. Which is quite easy to use and I learned a bit reading it from the docs.

# H-Appy

## An app to remind you of fun things to do that make you happy, by HappyHaddock

This is the server side repo for the app - the client side repo can be found at [https://github.com/peter-james-allen/h-appy-client](https://github.com/peter-james-allen/h-appy-client).

The full README for the app is in that repo - click [here](https://github.com/peter-james-allen/h-appy-client/blob/main/README.md) to see it.

This server is hosted publicly on heroku. Try [https://happy-haddocks.herokuapp.com/activities](https://happy-haddocks.herokuapp.com/activities) to see the API in action!

Below is our initial planning documentation from the very beginning of the project.

---

## Planning

Theme:

- Menu
- Nibble main dessert (activity size / nature)
- Al fresco or indoor activities

Purpose:

- Find interesting things to do (indoor + outdoor)
- Improve mental health

Interactions:

- Sign-up / in / out (maybe not needed?)
- Select likes and dislikes
- ( Week / meal plan ) - how many activities per week / type of activities
- You can filter the suggestions for the day
- Generate idea - click button to generate activity idea
- Mark activities as done
- Rate activities - ratings visible for users
- Enter location
- Map - show activities nearby
- Stretch goal - show relevant results for suggested activity e.g. movie listings
- Run / walk generation API
- Accessibility score for each activity
- Activities:
  - stored in our backend DB
  - Wild card / catch of the day - From [Bored API](https://www.boredapi.com/documentation#endpoints-key)

Platform

- Mobile

Tools

- React Native
- Node
- Express
- MongoDB
- MERN!

MVP

- Open App and see Menu of activities
- Choose activities based on ‘size’
- See activities based on filter - Nibbles / Main Meals / Desserts

To do

- Need to choose starting menu items

## User Stories

- Core Functionality
- As a bored person, so that I can be not bored, I want to see stuff I could do that I like doing
- As a person trying to hold off the start of the workday, so that I can do something to wake my brain up and prepare myself for the day, I want to see quick activities that are fun but short (i.e. appetisers)
- As a person facing down a weekend of existential dread, so that I can avoid facing the black void, I want to see activities that are fun but quite long (i.e. mains or banquets or specials)
- As a person wanting to treat myself, I want to see fun & indulgent activities (i.e. deserts)
- As a person trying to while away an evening, I want to see fun but medium sized activities (i.e. mains)
- As a user, So that I can better understand what the titles mean, I want to add descriptions to each menu item
- As a user, So that i can see what preparation an activity would involve, I want to add notes (i.e. “ingredients”) to each activity
- As an indecisive person, so that i can organize my menu easily, I want to be able to move an activity from one heading to another

Suggestions
As a bored person who feels uninspired, so that I can add more stuff to my menu, I want to see suggestions for stuff I could do but probably won’t
As a person who lacks imagination, so that I can fill out my menu, I want to see what other people have put on their menus
As a mild narcissist, so that I don’t accidentally reveal my personality flaws to the world, I want to make certain items private
As a man of taste and culture, so that I can peruse only the finest of options, I want to rate other people’s menu items
As a regular person, for my own mental wellbeing, I don’t want to see other people’s rating of my items unless I specifically look for them

## Workflow:

- 2 day sprints
- Always work on branch, no pushing to master
- All PR merges require review from 2 other team members
- Clear, communicative commit messages
- Linting - Prettier
- Set up CI - Circle or travis
- Stretch goal - Deploy to heroku
- Testing - TDD!!!!! BDD
- Cypress - like capybara for react
- Choose a testing framework (Jest maybe?)
- Documentation - Readme, Wiki to document learning
- Choose a Scrum-Master every day - responsible for driving the meetings forward

## Meeting check-list

- Review our tickets and features for the day
- Choose pairs
- Allocate tickets

## Daily Schedule

- 9:30 - Stand ups
- 9:45 - get cracking!
- 9:45 - 13:00 morning sesh
- 14:00 - 17:00 afternoon sesh
- 17:00 - Retro

## Project Schedule

- 8 Days until Demo day
- 6 Days to make features
- Wedensday next week - feature freeze, refactoring
- Thursday next week demo practice
- Friday next week - demo day

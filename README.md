# flaky-test-cypress

> The Flaky Test Challenge

![App](./images/app.png)

## Levels

There are several flaky situations. Each example is in its own branch and includes changes to the application source code and the testing code. Can you solve each one by fixing the _test code_ only? Try fixing the spec before watching the video that shows my solution.

- branch [level1](https://github.com/bahmutov/flaky-test-cypress/tree/level1) to warm you up. [Solution video](https://youtu.be/iHDZ53gLltc)
- branch [level2](https://github.com/bahmutov/flaky-test-cypress/tree/level2) where you need to burn the test to prove it is flaky or not. [Solution video](https://youtu.be/bWR6zFGywMI)
- branch [level3](https://github.com/bahmutov/flaky-test-cypress/tree/level3) shows a fast test that somehow still fails. [Solution video](https://www.youtube.com/watch?v=MbsEUQPMDzw)
- branch [level4](https://github.com/bahmutov/flaky-test-cypress/tree/level4) has a situation where the app "loses" a few first entered letters. [Solution video](https://www.youtube.com/watch?v=iHjPHX2rYiM)

If you like practicing Cypress test writing and want more hands-on exercises, check out my [Cypres courses](https://cypress.tips/courses).

## Install and run the app

- clone this repo to your local machine
- check out a branch with the flaky test `git checkout level1`, `git checkout level2`, etc
- run `npm install` to install all dependencies
- start the app in one terminal with `npm start`. You should see:

```
Compiled successfully!

The app is running at:

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

- open Cypress test runner with `npx cypress open` command. Click on the [app.cy.js](./cypress/e2e/app.cy.js) spec to run it.

Did the spec pass?

## Small print

## Small print

This is the code forked from [bahmutov/flaky-test-cypress](https://github.com/bahmutov/flaky-test-cypress).
The original application code forked from [dangi13/flaky-test-cypress](https://github.com/dangi13/flaky-test-cypress).
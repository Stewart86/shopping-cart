# Shopping Cart App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assignment 1

Assignment 1 can be found by clicking on Assignment 1 on the nav bar of this shopping app after running `npm start` or using the url `localhost:3000/assignment-1`

## Assignment 2

### Major Decisions

#### Material UI - component libary

A decision was made (based on the following reasons) to use Material UI component libary instead of Tailwind CSS for styling of UI components.

Having not used Tailwind CSS before and have heard alot of good things about it, I was acutally quited excited to be trying this utility libary for the first time.
I did some quick research, and watch a couple of YouTube videos and found that Tailwind CSS is pretty customisable and not had to learn. However,
as I was only given 5 days to build this app, a trade off between time spend learning a new technology (got lost between UI bugs) or creating an app with more features and fixing functional bugs.

Having use Material UI for most of my projects, i would still be able to do some styling without expending time finding out how to add spaces between elements or similar encouter.

So I have decided to skip this bonus task and continue to use Material UI.

#### Assumption 1 - Product listing will grow

Although this is a fake api that only returns 20 items, this will never be the case for a real world shopping app. A search function is needed. It is also a number one feature for any shopping app to have. Basically I cannot imagine myself finding thing to buy without it.

A simple search and sort (although ascending only) will allow shoppers to find the things they want quickly.

As data is fixed and small, sorting can easily be done with client-side JavaScript. However, do note that for actual production app, search should be done from the server-side. One, so that large amount of data would not be sending over the net. Two, sorting with database using index should be more efficent that client-side code.

#### Assumption 2 - Product page should so recommandation to boost more sales

I have created a simple recommandation engine that randomised 4 items of the same category and display together with the product detail page. No fancy algorithm here but is was assumed that a person looking for women's clothes would probably be interested in more women's clothes.

#### Assumption 3 - Someone will always lost their way

A Not found page was created reusing the same recommandation component so even if user navigate into path unspecified, they might still find something they want.

On a side note, since this recommandation is so reusable, there is no harm putting it in the cart page as well.

#### Assumption 4 - Automated checkout

Adding particular forms and payment infomation and intergation with payment platform is something that I would have done for a production shopping app. As this is just a demo, a fake automated checkout is used.

#### Assumption 5 - Join the darkside

A dark mode preference is set in such a way that if user's browser is already defaulted to dark theme, the app will be in dark mode. Otherwise, Light theme will be used.

This is a feature that comes with Material UI, and colors for dark or light can be changed to suit clients preference.

#### Assumption 6 - Theme's changes should be easy

UI is always subjective and beauty will always be in the eye of the beholder. As such, in most case UI elements will subject to alot of changes base on user feedback and client's requirements. One good thing about material UI that I found was that theme is very customisable. It can be changed in one location (`ThemeProvider.js`) and all UI components will reflect the change app wide. Might be able to do it with Tailwind CSS too, but that will cause me more time spent to find then to code.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

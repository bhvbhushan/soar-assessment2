# SOAR Task - Bhavya Bhushan

Firstly, **Thank You** for giving me the opportunity and putting your time for review of this project

### Installation and Setup

- After cloning the repo, open the terminal
- Install the required packages by running `npm install` or `yarn`
- You can run the app locally, by running `yarn dev` or `npm run dev`

### App Structure

The project is structured in multiple sub-directories for seperation-of-concern.
The sub-directories inside `src` directory are as follows:

- **\_api** - Contains Mock API for the data
- **\_constants** - Contains data constants, types, enums
- **\_context** - Contains User & Alert context
- **\_controllers** - Contains API calls and data formating to be used directly in app
- **\_core** - Contains Core Components for the app, like AppLayout and AppRoutes
- **\_helpers** - Contains reusable helper function which are used across multiple modules
- **\_interfaces** - Contains data Interfaces which are reusable, one-time interface are created in the component file itself
- **\_lib** - A library of all the reusable components
- **\_pages** - Contains all the Pages of the application
- **\_styledComponents** - Contains some MUI elements which are custom-styled for reusability
- **\_validations** - Data validation for User Profile (for now)
- **assets** - Images, Logos used in the app

### Development Features

- Click on Credit Card to change color
- Transfer Section, be default shows only contacts, when user selects any then the input for entering Amount is visible
- In Setting page, user icon can be changed, but it wont save as app doesn't have access to server file system
- User data can be modified and updated, validators for password and email is added
- Centralized Axios error-handling wrapper in `_helpers/axiosWrapper.ts`
- Mock API using 'axios-mock-adapter' in `_api/mockAdapter.ts`, which mimics the API behaviour and also for POST and PUT request, fails every 3 request for each endpoint to display error
- Customized MUI components in `_styledComponents` directory
- Centralized Alert context for Success and Error, can be scaled to other severity levels as well and fully customizable
- User data validation using `yup` validator
- Custom `theme.ts` file for modifying breakpoints for Mobile, Tab and Desktop. Also, creating color theme for the application

### Scope of Improvements/Incomplete

- Intentionally didn't handle **See All** for Credit Cards, as I am assuming it would be a Modal, however, allowed scrolling in the components, so that cards could be scrolled. In mobile view, the Modal for cards seemed a bit over-engineering. However, if any other functionality is required, will be happy to implement so
- Figma had logos as PNG, even SVG export was giving PNG-embedded image, so, it was a complex to modify them, hence, used the Icons as PNG, specifically for Dashboard and Setting menu items, using conditioal statement
- Spacing b/w bar in Grouped Bar charts is not working somehow, tried with `barPercentage` & `categoryPercentage` but no success, tried different things, nothing worked. Need more time to figure this out.

### Questions

Email: bhvbhushan7@gmail.com

Profile: [Toptal](https://www.toptal.com/resume/bhavya-bhushan), [LinkedIn](https://www.linkedin.com/in/bhavya-bhushan-19227ab8/)

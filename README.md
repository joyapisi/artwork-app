# Artwork_App

React/Redux Project
<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
      - [Tech Stack](#tech-stack)
      - [Key Features](#key-features)
- [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#set-up)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
      - [Install ReactJS](#react-installation)
      - [Install linters](#linter-installation)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 [Artwork_App] <a name="Artwork_App"></a>

**[Artwork_App]** This is a mobile app that can be used to find details of various artwork displayed on the home page. All data is fetched from the Art Institute of Chicago API.

You will learn how to use React and Redux. It also follows <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Gitflow.</a>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <summary>Javascript runtime environment</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node JS</a></li>
  </ul>

   <summary>Redux</summary>
  <ul>
    <li><a href="https://redux.js.org/">React JS</a></li>
  </ul>
  
  <summary>React JS</summary>
  <ul>
    <li><a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React JS</a></li>
  </ul>

  <summary>Version control</summary>
  <ul>
    <li><a href="github.com">Git Hub</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **[Redux]**
- **[React_JS]**
- **[Gitflow]**
- **[Mobile-Version]**
- **[Artwork-Detils]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## [🚀 Live_Demo]<a name=#live-demo></a>
[View Live Demo](https://joys-artwork-app.netlify.app/)

## [🎥 Video Explanation]<a name=#video_explanation></a>
[View Video Explanation](https://www.loom.com/share/74dfa0c9829b4fa28a69fa88356e6ba0)

## 💻 Getting Started <a name="getting-started"></a>

Creating your first "Artwork App" project

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

-A Git hub account
-Git bash
-Node JS
-React JS
-Visual Studio Code as your code editor

# Setup <a name="set-up"></a>

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone[(https://github.com/joyapisi/space-traveler-hub.git)]
```
## Understand Set Up Requirements
Since this code is using webpack, you will run `npm start` in your terminal to run it instead of opening it with the live server. 

## Understand Set Up Requirements

### Define React

<a href="https://react.dev/">React JS</a> is a front-end library introduced by Facebook in 2013 and it has become one of the most popular ways to build modern user interfaces today.

- <a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM">React in 100 seconds</a>
- <a href="https://www.youtube.com/watch?v=Wm_xI7KntDs">The Story of React</a>

### Define Linters

A linter is a tool to help you improve your code. You can learn more about Linters here: (source: (<https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/>)).

#### Advantages of Linting:

1. Fewer errors in production- The use of linters helps to diagnose and fix technical issues such as code smells. As a result, fewer defects make their way to production.
2. Achieving a more readable and consistent style, through the enforcement of its rules.
3. Having more secure and performant code.
4. Having an objective and measurable assessment of code quality.
5. Having fewer discussions about code style and aesthetic choices during code reviews.

#  Create Your React App and Install Linters <a name="install"></a>

## Create Your React App <a name="react-installation"></a>

- Run this insde your project's root directory
```
npx create-react-app . 
```
- For further installaton instructions use <a href="https://create-react-app.dev/">this</a> link to set up your react app by following these topics in order:
<ul>
  <li><a href="https://create-react-app.dev/docs/getting-started">Getting Started</a></li>
  <li><a href="https://create-react-app.dev/docs/folder-structure">Folder Structure</a></li>
</ul>

## Install Linters <a name="linter-installation"></a>

Linters for various programming languages are available for use, e.g. Rubocop for Ruby or ESLint for JavaScript.

There are many ways you can integrate a linter in your workflow:

-text editor plugin
-GitHub Actions
-GitHub apps

### Steps to Install Linters for this project

**Note:** The npm package manager is going to create a node_modules directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:

# .gitignore

node_modules/

**NOTE:** If you are using Windows, you don't have to initialize npm by runnng `npm init -y` to create a `package.json` file since Create React App already set one up for you.

_how to use npm: (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)._

## Install ESLint

1. Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x  @babel/preset-react@7.x @babel/preset-react@7.x
```  

2. Run
  ```
   npx eslint "**/*.{js,jsx}"
   ```
on the root of your directory of your project whenever you want to fix linter errors.


### [Stylelint](https://stylelint.io/) <a name="stylelint-installation"></a>

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

1. Run

`npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`

2. To Fix style(css) linter errors run
   ```
     npx stylelint "**/*.{css,scss}" 
    ```
6. **IMPORTANT NOTE:** feel free to research auto-correct options for Stylelint such as usng `npx stylelint "**/*.{css,scss}"  --fix ` if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Joy Phoebe**

- GitHub: (https://github.com/joyapisi)
- Twitter: (https://twitter.com/joyapisi)
- LinkedIn: (https://linkedin.com/in/joy-phoebe-00b80a13a)

## 🔭 Future Features <a name="future-features"></a>

### **[Feature-1]**

- Add more styling (aesthetics)

### **[Feature-2]**

- Add destop version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/joyapisi/To-Do-List/issues).

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly leave a comment below and share it with someone who enjoys coding! Coding is all about continuous learning and allowing yourself to be a beginner. Keep going!

## 🙏 Acknowledgments <a name="Microverse Inc."></a>

I'm thankful to Microverse for providing a study platform which guided me through this project.

## ❓ FAQ <a name="faq"></a>

- **[Question_1]**
  An easier and quicker way to understand webpack?

  - This YouTube<a href="https://www.youtube.com/watch?v=MpGLUVbqoYQ">video</a> will help you understand webpack better and in details

- **[Question_2]**
  Where can I download node JS for installation?

  - Node Js can be downloaded here- <ul>
    <li><a href="https://nodejs.org/en/download/"> Node JS </a></li>
  </ul>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE.txt) licensed.

## © Attribution <a name="attribution"></a>
Original design idea by [Nelson Sakwa on Behance.](https://www.behance.net/sakwadesignstudio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


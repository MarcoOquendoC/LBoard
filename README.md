![Microverse](https://img.shields.io/badge/Microverse-blueviolet) ![HTML](https://img.shields.io/badge/-HTML-orange) ![CSS](https://img.shields.io/badge/-CSS-blue) ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)

# LeaderBoard
- The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
- VIsual Studio Code.

### Setup
- Open the terminal on your computer
- Navigate through directories using [change directory (cd)](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10) command to where you want to clone the repository.
- Type the following command then press ENTER: 
  - git clone https://github.com/MarcoOquendoC/LBoard.git
- the terminal will send to you information about your download.
- Type the following command then press ENTER: 
  - cd LBoard
- **Type the following lists of commands and press ENTER after each command:**
  - *Basic Setup*
    - npm install --save-dev

  - *Setup linters*
    - npm install --save-dev hint@7.x
    - npx hint .
    - npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
    - npx stylelint "**/*.{css,scss}"
    - npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
    - npx eslint .

  - **Open project in VSC**
    - code .

## Built With
- **HTML/CSS & JS best practices:** Correct use of tags, elements, properties and syntax.
- **GitHub flow:** Correct use of Branches for deployment and features development.
- **Linters Check:** Local and Pull Request check for errors, bugs and stylistic errors in code.
- **Webpack:** used as a bundle to compile JavaScript modules.

## 🌎 Live Demo:
- [LeaderBoard](https://marcooquendoc.github.io/LBoard/)

## Authors 
### 👤 Marco Oquendo
- GitHub: [@MarcoOquendoC](https://github.com/MarcoOquendoC)
- Twitter: [@marcooquendoc](https://twitter.com/marcooquendoc)
- LinkedIn: [Marco Vinicio Oquendo](https://www.linkedin.com/in/vinicio-oquendo-4a289156/)

## Show your support
- Give a ⭐️ if you like this project!

## 📝 License
- This project is [MIT](./LICENSE) licensed.

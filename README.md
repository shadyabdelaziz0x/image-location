# Image-location

Simple app that allows user to map taken pictures to the location they were taken

## Set up

Run the folllowing commands:

```shell
$ git clone <this_repo_url>
$ cd image-location
$ yarn install
$ yarn pods
```

## Set up VSCode

Install the following plugins:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [ES7 Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

## Running the app

Start the application on Android:

```shell
$ yarn run-android
```

Start the application on iOS:

```shell
$ yarn run-ios
```

Once the application has been deployed to the device/simulator, you can restart the metro bundler running

`$ yarn start`

## Recommended tools

- [Cocoapods](https://github.com/CocoaPods/CocoaPods)
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://prettier.io/)

## Linting

To preserve code styling, we add a pre-commit hook that will check the staged using `eslint`.

You can lint the code manually:

`$ yarn lint`

This will run against all files in the `src` folder.

To run the pre-commit hook manually:

`$ yarn lint-staged`

To fix lint errors:

`$ yarn lint:fix`

If you faced issue when committing, check the issues reported. Each issue should contain the violated rule. Go to [eslint rules](https://eslint.org/docs/rules/) page and check the rule documentation.

## Relevant technologies

- [React Native](https://facebook.github.io/react-native/docs/getting-started)
- [React Navigation](https://github.com/react-navigation/react-navigation)

## App Structure

- **android**: contains android project
- **ios**: contains ios project
- **src**: app code
  - **res**: common resources
    - **colors**: app colors
    - **fonts**: app fonts
    - **images**: app images
    - **strings**: app strings
    - **typography**: app type text styles
  - **navigation**: app navigation setup here
  - **services**: add common global services here
  - **state**: app store setup here (managed with Redux)
    - **ducks**: ducks files following:
      - [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux)
      - [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action)
    - **storeConfig**: App store, Root Reducer & Saga configurations
  - **utils**: helper methods
  - **views**: components declaration here
    - **atoms**: conatins app smallest components
    - **components**: conatins app components
    - **containers**: contains app screens

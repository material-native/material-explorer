Material Explorer
=================
[![MIT][license-badge]][license]
[![dependencies][dependencies-badge]][dependencies]
[![devDependencies][devDependencies-badge]][devDependencies]

[license-badge]: https://img.shields.io/npm/l/material-native.svg
[license]: https://github.com/material-native/material-native/blob/master/LICENSE
[dependencies-badge]: https://img.shields.io/david/material-native/material-explorer.svg
[dependencies]: https://david-dm.org/material-native/material-explorer
[devDependencies-badge]: https://img.shields.io/david/dev/material-native/material-explorer.svg
[devDependencies]: https://david-dm.org/material-native/material-explorer?type=dev

Material Explorer example app showing off [material-native](https://github.com/material-native/material-native) components.

## Getting Started
### Android
You may need to open `material-explorer/android` in Android Studio first or setup `ANDROID_HOME` for react-native to find the Android SDK. You can also run the project or start the simulator using Android Studio.

```shell
git clone https://github.com/material-native/material-explorer.git # clone the repository
cd material-explorer # enter the directory
npm install # install dependencies
npm run setup # Configure Material Explorer the included material-native package

# In a separate terminal tab:
react-native run-android
```

### iOS
You can also run `ios/MaterialExplorer.xcodeproj` in XCode in place of `react-native run-ios`.

```shell
git clone https://github.com/material-native/material-explorer.git # clone the repository
cd material-explorer # enter the directory
npm install # install dependencies
npm run setup # Configure Material Explorer the included material-native package

# In a separate terminal tab:
react-native run-ios
```

## Developing with your own copy of material-native
Material Explorer can use a development copy of material-native (a clone of your git fork of the material-native/material-native repository). You will need to clone repository at or move your existing checkout to `material-explorer/material-native` in order for this to work.

To set up Material Explorer for this after setting up your clone run `npm run setup-custom`. Note that this has to delete the copies of `react` and `react-native` in `material-native/node_modules`, this is necessary to make Material Explorer work but will make tests in material-explorer/material-native until you re-run `npm install`.

You can use the `npm run custom-test` helper to automate `npm install` and `npm test` in material-native/ then running `npm run setup` to restore the Material Explorer afterwards.

## Screenshots

<img width="230" alt="Colors" src="./screenshots/Colors.png"> <img width="230" alt="Typography" src="./screenshots/Typography.png"> <img width="230" alt="Icons" src="./screenshots/Icons.png"> <img width="230" alt="Ripples" src="./screenshots/Ripples.png"> <img width="230" alt="Buttons" src="./screenshots/Buttons.png"> <img width="230" alt="Action Buttons" src="./screenshots/Action Buttons.png"> <img width="230" alt="Toggles" src="./screenshots/Toggles.png"> <img width="230" alt="Text Fields" src="./screenshots/Text Fields.png"> <img width="230" alt="Avatars" src="./screenshots/Avatars.png"> <img width="230" alt="Dialogs" src="./screenshots/Dialogs.png">

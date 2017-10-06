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

# In a separate terminal tab:
react-native run-android
```

### iOS
You can also run `ios/MaterialExplorer.xcodeproj` in XCode in place of `react-native run-ios`.

```shell
git clone https://github.com/material-native/material-explorer.git # clone the repository
cd material-explorer # enter the directory
npm install # install dependencies

# In a separate terminal tab:
react-native run-ios
```

## Developing with your own copy of material-native
Material Explorer can use a development copy of material-native (a clone of your git fork of the material-native/material-native repository). You will need to clone repository at or move your existing checkout to `material-explorer/material-native` in order for this to work. You will also need to manually delete the `material-native/node_modules/react` and `material-native/node_modules/react-native` folders.

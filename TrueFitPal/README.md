# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# TrueFitPal

TrueFitPal is a fitness tracking app that allows users to monitor their nutrition, track their progress, and share their journey with friends. Built with React Native, it works on both iOS and Android platforms.

## Features

- Track daily calorie intake and macros
- Log meals and water intake
- Monitor progress with friends
- Share collaboration codes to connect with friends
- View friends' progress and nutrition
- Customizable profile and goals
- Dark mode support

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- React Native development environment set up
- iOS: XCode (for Mac users)
- Android: Android Studio

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/TrueFitPal.git
cd TrueFitPal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Run on your device:
- For iOS:
```bash
npm run ios
# or
yarn ios
```
- For Android:
```bash
npm run android
# or
yarn android
```

## Project Structure

```
TrueFitPal/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── DiaryScreen.js
│   │   ├── FriendsScreen.js
│   │   └── ProfileScreen.js
│   ├── components/
│   └── utils/
├── App.js
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Native
- React Navigation
- React Native Paper
- Expo

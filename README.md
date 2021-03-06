# How to Use React & Firebase Storage

![](./screenshots/screenshot1.png)
![](./screenshots/screenshot2.png)

## Table of Contents

| No. | Topics                                    |
| --- | ----------------------------------------- |
| 1   | [About Code Courses](#about-code-courses) |
| 2   | [Live Demo](#live-demo)                   |
| 3   | [Technologies](#technologies)             |
| 4   | [Running the demo](#running-the-demo)     |
| 5   | [Useful links](#useful-links)             |

<a id="about-code-courses"></a>

## 1. About Code Courses

<a href="https://codecourses.site">Code Courses</a> is a website where people learn about coding and different technologies/frameworks/libraries. To help people learn, all of the courses are **FREE** and **DETAIL**. Hopefully, after following the content on Code Courses, you will find your dream jobs, and build any applications that you want.

<a id="live-demo"></a>

## 2. Live Demo

- For the full course, You can refer to this [link](https://codecourses.site/react/how-to-use-react-and-firebase-storage).

- You can refer to this [Youtube video](https://youtu.be/7-buLUtEeR8) for the live demo.

<a id="technologies"></a>

## 3. Technologies

This demo uses:

- Firebase
- React.js
- Uuid

<a id="running-the-demo"></a>

## 4. Running the demo

To run the demo follow these steps:

1. Download the repository [here](https://github.com/codecourses-site/react-firebase-storage/archive/main.zip) or by running `git clone https://github.com/codecourses-site/react-firebase-storage.git` and open it in a code editor.
2. [Head to Firebase and create a new project](https://console.firebase.google.com)
3. Create a file called **.env** in the root folder of your project.
4. Import and inject your secret keys in the **.env** file containing your Firebase keys in this manner.

```js
REACT_APP_FIREBASE_API_KEY = xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx;
REACT_APP_FIREBASE_AUTH_DOMAIN = xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx;
REACT_APP_FIREBASE_STORAGE_BUCKET =
  xxx - xxx - xxx - xxx - xxx - xxx - xxx - xxx;
```

11. Make sure to exclude **.env** in your gitIgnore file from being exposed online.
12. Run the following command to install the app.

```sh
    npm install
    npm run start
```

Questions about running the demo? [Open an issue](https://github.com/codecourses-site/react-firebase-storage/issues). We're here to help ??????

<a id="useful-links"></a>

## 5. Useful links

- ???? [Firebase](https://console.firebase.google.com)
- ???? [React.js](https://reactjs.org/)

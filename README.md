# Registration Database

In this project, you will continue to change and improve the registration and validation project you have previously worked on. In this version, when the user says the data is ok on the validation screen, you will add the data to a database. This project will not include editing or modifying the data, or deleting a record from the database.

Begin by making a COPY of the previous project.

You created a Firebase database with the Udemy course, and you need that same database in future sections of the course. You can have multiple databases in your Firebase account, so create a new one for this project. You can check in the documentation about how to add a new database. Here is one way that works when writing this assignment. Go to the Firebase screen, look above the heading "Realtime Database" where you should see the name of your database in smaller type, with a down arrow to the right. Click on the down arrow; one of the options is to add a database. Click on that and go through the steps to create a new database, in the same way you did with the Udemy video.

https://react-native-course-bef50-default-rtdb.firebaseio.com/

In the project, add "axios" with "npm install axios". Create a file for the http connections, as in the Udemy video. At this point, you only need the function to add a user in that file.

In the validation file, the onPress event for the "Yes" button sets up an alert -- that needs to change to calling the handler that adds the user to the database. If there is an error, the catch should set up an alert that says "Could not add new user". In both situations -- success or error -- pop to the top of the navigation stack.

Hint: one thing you did not have to do in the Udemy videos was to set up the expenseData variable, because it had already been set up in the ExpenseForm file. Your project isn't set up in the same way, so you will need to create the data variable, perhaps named userData, in the validation screen file, to be used as the data to send to the http function that adds to the database.

When it's working, add 2 records to the database for different users. Go to the Firebase screen and expand those records. You may use any data you choose for the user information; make sure the 2 records are different, not at all similar. Take a screenshot, which will resemble this:

![dataStore.PNG](https://github.com/bell-kevin/registrationDatabase/blob/main/readMeExamplePicture.PNG)

Submission: Zip together the root folder and the 1 screenshot, and submit the single zipped folder.

![p](https://github.com/bell-kevin/registrationDatabase/blob/main/screenshots/firebase.PNG)

## How to:

Create one app. for both Android and iOS (Apple) using one computer alorithm for both apps. You'll need Visual Studio Code and Android Studio to get started:

https://code.visualstudio.com/download

https://developer.android.com/studio

If you want to see how your app. will look on iOS (Apple) devices, you'll need Xcode from the Apple app. store:

https://developer.apple.com/xcode/

To run the Xcode app, you'll need a fairly new Apple computer.

https://reactnative.dev/docs/environment-setup

https://reactnative.dev/docs/components-and-apis

https://reactnative.dev/docs/intro-react

Check out App.js here in the code files for the computer algorithm code.

## Storing Projects

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)

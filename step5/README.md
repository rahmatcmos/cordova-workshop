# Steps to follow#

* Open a new command-line terminal and go inside step 5 folder. Run the following command.
```
$ cordova create .
```
* Delete everything inside www folder.

* Copy the js/, css/, and index.html from the step 2 to the www folder.

* Add a platform to your application
```
$ cordova platform add android
$ cordova platform add ios
```

* Connect your device using USB and run the application on the device using following command
```
$ cordova run android
```

* Update the code to run on 'deviceready' event.




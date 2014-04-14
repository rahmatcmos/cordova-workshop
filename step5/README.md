# Steps to follow#

1. Open a new command-line terminal and go inside step 5 folder. Run the following command.
```
$ cordova create .
```
2. Delete everything inside www folder.

3. Copy the js/, css/, and index.html from the step 2 to the www folder.

4. Add a platform to your application
```
$ cordova platform add android
$ cordova platform add ios
```

5. Connect your device using USB and run the application on the device using following command
```
$ cordova run android
```

6. Update the code to run on 'deviceready' event.




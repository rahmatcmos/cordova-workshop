# Cordova Workshop#

This is a step by step introduction to building mobile application using Apache Cordova.

## Step 1##
In step 1, we just create an index.html file that includes required CSS and JS libraries. This application uses jQuery Mobile for styling and jQuery for DOM manipulation and AJAX calls.

## Step 2##
In step 2, we created application user interface using jQuery Mobile. We created a jQuery Mobile page and added a header and listview to render stories. In app.js, we registered for pagecreate event, and made a GET call to fetch stories from hackerpins.com.

## Step 3##
In step 3, you created an OpenShift account and created your own hackerpins application backend. Refer to step3/README.md for details.

## Step 4##
In step 4, we packaged the application using PhoneGap build cloud service. Refer to step4/README.md for details.

## Step 5##
In step 5, we created Apache Cordova application using CLI. We deleted the template code under www directory and replaced it with the code created in step 2. Then we bind to Apache Cordova deviceready event.

## Step 6##
In step 6, we improved the application and bind to tap events. In step 5, there was a lag when you clicked on any story. This was fixed in step 6 by using tap events and InAppBrowser.

## Step 7##
In step 7, we created the full application with three views -- hot, upcoming, new. Also, we used Mustache for templating rather than injecting HTML fragments.
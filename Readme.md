# Class Organization App - Created by:  Ze Zhou

This is an application that lists different classes in a Technology program at a Post-Secondary School.

## Description

As of **October 31, 2021**, this app consists of 3 pages: 

* Home page - consists of a brand logo, header, tagline, and a link to the todo page
* todo page - consists of the following:
  * Branding header
  * An unordered list of items displaying 5 different categories and classes which are pulled from json data.
    * Within each component, we have properties such as ID, Title, Category, Date, and if that class is Complete or not
    * Within each list item, we also have displayed the option of editing or deleting that specific list item or school class.
      * Right now we simply only have the options displayed. Functionality will be implemented at a later date.
  * App Bar component containing a button that allows the user to add a new list item or school class
    * Right now we simply only have the App Bar and button displayed. Functionality will be implemented at a later date.
* Error page: this page is designed to show up when the user tries to go to an unrecognized url. This page consists of the branding header, an error message with an icon, and a button that takes the user back to the home page

As of **November 21, 2021**, this app has functionality for the buttons: 

* Delete button: takes user to the delete page displaying the selected Class Item and two options:
  * Cancel - takes user back to todo page
  * Delete - deletes the selected Class Item and takes user back to the todo page
* Edit button: takes user to the edit page displaying a form of all of the selected Class Item data fields and values. Here, users have two options:
  * Cancel - takes user back to todo page
  * Edit - user can change the data values in the form and click the `edit` button which will update the selected Class Item values to whatever the user changed it to
* Add button: takes user to the add page displaying a form with only a new Class Item ID created and passed through. Users will then have two options:
  * Cancel - takes user back to todo page
  * Add - user can fill out all of the empty data fields in the form and click the `add` button which will add a new Class Item to the list containing all of the User's inputted values.
## Instructions
1. Start and run the application either by:
   * Visiting the link: https://frosty-davinci-746b47.netlify.app/
   * Download this Git project, run `npm install` in the terminal, then run `npm start` in the terminal

2. The user will arrive at the "Home Page" where they can click the "`to do app`" button which will take them to the "To Do Page"
3. The "To Do Page" consists of an unordered list of 5 different school classes displaying properties such as the lesson title, category, due date, if the class is complete, and an edit and delete button. The user will be able to edit each school class or delete the class altogether.
4. Also on the "To Do Page", there is an App Bar with a button at the bottom of the screen. This allows the user to add more school classes into the unordered list displayed.
5. If the user inputs an unknown or unrecognized URL, they will be directed to the "Error Page". Here, the user will see an error message and also a "`Take me home`" button which will take the user back to the "Home Page" if clicked.
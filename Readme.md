# Class Organization App - Created by:  Ze Zhou

This is an application that lists different classes in a Technology program at a Post-Secondary School.

As of October 31, 2021, this app consists of 3 pages: 

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
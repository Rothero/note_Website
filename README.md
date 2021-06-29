## Note App

A simple web application to write, save,update and delete notes, using ***Next.js*** and ***MongoDB Atlas***


## Main Features 
The project main purpose was for me to train developing in Next.js using a database.
For that reason the applicattion is quite simple, having a set of essential features.


That are:
* Create Notes
* Update Notes
* Delete Notes

Created Notes are displayed in the main page with it's Title, using the `View` option you can see the description and the `delete` button, that erases the note.
The `edit` button let the user update the title of the note and description of it.



### Usage


This application uses ***Semantic UI React*** to create some of the components, so it's recommended to make a `npm install` before the first build, so all the packages needed are downloaded.

***MongoDB Atlas*** is a *NOSQL* cloud database that's really fast and easy to use.

Because it's used to save information from the notes, **you will need to have a connection string from a MongoDB cloud instance.**

For more safety put the connection string in a `.env.local` file and name it `MONGO_URI`, this string is used in the `dbConnect.js` to connect to the database.



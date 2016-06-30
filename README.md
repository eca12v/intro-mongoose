# Peer Routing Activity

Fork my intro mongoose repo: https://github.com/mhwalsh/intro-mongoose

Using the Express Routing documentation: http://expressjs.com/en/guide/routing.html

1. The goal of this step is to refactor the existing code to use multiple routing files. Create a routes folder with two router files new files, one for the 'millie' themed routes (millie.js) and another for general user routes (users.js). Require these routes in the main server file and make sure the server is functioning as it was before. I.e. test all the routes. Commit.
2. The goal of this step is to add more general routes that will work for any user, not just 'millie'. Again referring to the documentation, create three new general user routes in the users.js file that follow the requirements below. Remember to commit as you go. May be after each new route you create.
*Add a route that gets a user by a specific user id and returns that users object. For example if the id in the database is 577509 the URL should look like: http:localhost:3000/577509
*Add an update route that takes a specific user id and a body that contains the field to update. http:localhost:3000/update/577509 or http:localhost:3000/577509
*Add a delete route that takes a specific user id and deletes the user. http:localhost:3000/delete/577509 or http:localhost:3000/577509

Document your API i.e. your new routes. Make sure that it follows restful practices.

Remember you can test these with the REST CLIENT atom package, but you are welcome to add a UI to it.

Once finished submit the repo your partners name.

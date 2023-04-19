
# Social Network API
By: thandyn
Email: nguyenphuthan@gmail.com

## Description
This project demonstrates using MongoDB and mongoose and creating CRUD routes for the API of a social network where users can post their thoughts, post reaction on other user's thought and friend one another. 

## Table of Content 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)
  - [Contribute](#contribute)
  - [Test](#test)

## Installation
The steps to install packages is to open terminal and typing in `npm i` to install the packages included. 

## Usage

![alt text](/images/1.PNG)

First, we have to create a user. Creating a user will allow that user to post thoughts, react to other user's thought, and befriend other users. We go to our api user and making a username with our email. After post, user will be created successfully. 

![alt text](/images/2.PNG)

This route allows us to see all the users that has been created. 

![alt text](/images/3.PNG)

To get the single user, include the user's id into the route and send. On the preview side, users will see the user with the correlated ID. 

![alt text](/images/4.PNG)

To update user, it uses the same path as single user. In the json body, include the users new username and email, then send. The new username and email will be reflected on the preview with the same ID.

![alt text](/images/5.PNG)

To delete user, include the user's ID at the end of path. Clicking send will delete the user and a message will appear stating that user is now deleted. 

![alt text](/images/6.PNG)

In this application, user may friend other users. In the path, we include the user one's id after `/api/users/` then follow up `/friend/` and the user two id's user one want as friend. Under user one's friend will be user two's ID to indicate that they are friends.

![alt text](/images/7.PNG)

To remove a friend, the paths are the same, but with the delete route. 

![alt text](/images/8.PNG)

Users may post their thoughts. For this, user goes to `/api/thoughts` path and in the body, include a `thoughtText` and `username` into the body. After sending, a message will be in preview saying that the thought has been made.

![alt text](/images/9.PNG)

To see the all the thoughts users have posted, go to the correlated path. After sending the GET route, all thoughts can be previewed on the right side.

![alt text](/images/10.PNG)

To get a single thought, include the thought ID at the end of the path to preview it. 

![alt text](/images/11.PNG)

To update a thought, insert the thought ID and in the body, change the `thoughtText` and keep the `username` the same as user that created the thought.

![alt text](/images/12.PNG)

Use the delete route to delete the thought. Include the thought ID in the path to target that specific thought to delete. 

![alt text](/images/13.PNG)

To make a reaction, user would need the thought ID that they would like to react to. In the body, include a `reactionBody` followed up with a text of the reaction. In `username`, include which user is reacting to the thought. 

![alt text](/images/14.PNG)

To delete a reaction, users need to include the thought ID after `/api/thoughts/` then target the reaction by putting `/reaction` after the path along with the reaction ID. Send the delete route and in the preview, the reaction will be deleted.
## License
MIT

## Contribute
If you wish to contribute to this project, please email me.

## Test
Open in Insomnia and insert routes depending on what user wants to do. Try it out! 

## Questions
If you have any questions, please email me at: nguyenphuthan@gmail.com. 
For more information, please visit my Github link: https://github.com/thandyn/.

# Would You Rather Project

This is the final version of assessment project for Udacity's React & Redux course, prepared by Mustafa Kahraman.

This app is created by using `Create React App`. App can be installed by running against `npm install` and can be launched by running against `npm start`.

The provided `_DATA.js` file renamed as `_DATA_provided` and not used. It is refactored to normalize data as the provided objects treated like a database table. All informations stayed same but construction of dara objects changed and used in that way.

I have provided additional functionality to add user to the system and added loading bar also. I moved img folder to public folder. In order to better organize, I added subfolder in components folder.

I used `redux-persist` library to persist signedInUser info when refreshing page.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are three types of objects stored in my refactored database:

* Users
* Questions
* Answers

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Answers

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                 | String           | The answer’s unique identifier |
| userId          | String           | The user’s id who voted the answer     |
| questionId  | String           | The question's unique identifier that is voted |
| vote | String | It can be either `'optionOne'` or `'optionTwo'` since each question has two options.|

My code will talk to the database via 6 methods, I added and rearranged provided ones:

* `_getUsers()`
* `_getQuestions()`
* `_getAnswers()` : Added by me
* `_saveQuestion(question)`
* `_saveAnswer(answer)` : Refactored
* `_saveUser(user)` : Added by me

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_getAnswers()` Method

*Description*: Get all of the existing answers from the database.  
*Return Value*: Object where the key is the answer’s id and the value is the answer object.

4) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

5) `_saveAnswer(object)` Method

*Description*: Save the answer in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| userId | String | The id of the user who answered the question|
| questionId | String | The id of the question that was answered|
| vote | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the answer that was voted|
| userId | String | The id of the user who answered the question|
| questionId | String | The id of the question that was answered|
| vote | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

6) `_saveUser(object)` Method

*Description*: Save the user in the database.
*Parameters*: Object that contains the following properties: `userName`, `name`, and `avatarURL`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| userName | String | The id of the user |
| name | String | The name and surname of the user|
| avatarURL | String | The avatar url of the user`|

*Return Value*:  Object that contains the following properties: `userName`, `name`, and `avatarURL`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| userName | String | The id of the user |
| name | String | The name and surname of the user|
| avatarURL | String | The avatar url of the user`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).

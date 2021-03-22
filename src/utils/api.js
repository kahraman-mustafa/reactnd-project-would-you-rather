import {
  _getAnswers,
  _getQuestions,
  _getUsers,
  _getSignedInUser,
  _saveQuestion,
  _saveAnswer 
} from "./_DATA";

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
    _getAnswers(),
    _getSignedInUser()
  ]).then(([users, questions, answers, signedInUser]) => ({
    users,
    questions,
    answers,
    signedInUser
  }))
}

export function saveQuestion({author, optionOne, optionTwo}){
  return _saveQuestion({author, optionOne, optionTwo});
}

export function saveAnswer({userId, questionId, vote}){
  return _saveAnswer({userId, questionId, vote})
}
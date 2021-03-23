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

export function saveQuestion({author, optionOneText, optionTwoText}){
  const questionInput = {author, optionOneText, optionTwoText};
  return _saveQuestion(questionInput);
}

export function saveAnswer({userId, questionId, vote}){
  const answer = {userId, questionId, vote};
  return _saveAnswer(answer);
}
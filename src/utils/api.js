import {
  _getAnswers,
  _getQuestions,
  _getUsers,
  _saveUser,
  _saveQuestion,
  _saveAnswer
} from "./_DATA";

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
    _getAnswers()
  ]).then(([users, questions, answers]) => ({
    users,
    questions,
    answers
  }))
}

export function getUsers(){
  return _getUsers();
}

export function getQuestions(){
  return _getQuestions();
}

export function getAnswers(){
  return _getAnswers();
}

export function saveUser({userName, name, avatarURL}){
  const userInputs = {userName, name, avatarURL};
  return _saveUser(userInputs);
}

export function saveQuestion({author, optionOneText, optionTwoText}){
  const questionInputs = {author, optionOneText, optionTwoText};
  return _saveQuestion(questionInputs);
}

export function saveAnswer({userId, questionId, vote}){
  const answerInputs = {userId, questionId, vote};
  return _saveAnswer(answerInputs);
}
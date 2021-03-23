let users = {
  "sarahedo": {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: ""
  },
  "tylermcginnis": {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: ""
  },
  "johndoe": {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: ""
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: 'have horrible short term memory',
    optionTwo: 'have horrible long term memory'
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: 'become a superhero',
    optionTwo: 'become a supervillain'
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: 'be telekinetic',
    optionTwo: 'be telepathic'
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: 'be a front-end developer',
    optionTwo: 'be a back-end developer'
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: 'find $50 yourself',
    optionTwo: 'have your best friend find $500'
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: 'write JavaScript',
    optionTwo: 'write Swift'
  }
}

let answers = {
  "sarahedo8xf0y6ziyjabvozdd253nd": {
    id: "sarahedo8xf0y6ziyjabvozdd253nd",
    userId: "sarahedo",
    questionId: "8xf0y6ziyjabvozdd253nd",
    vote: "optionOne"
  },
  "sarahedo6ni6ok3ym7mf1p33lnez": {
    id: "sarahedo6ni6ok3ym7mf1p33lnez",
    userId: "sarahedo",
    questionId: "6ni6ok3ym7mf1p33lnez",
    vote: "optionTwo"
  },
  "sarahedoam8ehyc8byjqgar0jgpub9": {
    id: "sarahedoam8ehyc8byjqgar0jgpub9",
    userId: "sarahedo",
    questionId: "am8ehyc8byjqgar0jgpub9",
    vote: "optionTwo"
  },
  "sarahedoloxhs1bqm25b708cmbf3g": {
    id: "sarahedoloxhs1bqm25b708cmbf3g",
    userId: "sarahedo",
    questionId: "loxhs1bqm25b708cmbf3g",
    vote: "optionTwo"
  },
  "tylermcginnisvthrdm985a262al8qx3do": {
    id: "tylermcginnisvthrdm985a262al8qx3do",
    userId: "tylermcginnis",
    questionId: "vthrdm985a262al8qx3do",
    vote: "optionOne"
  },
  "tylermcginnisxj352vofupe1dqz9emx13r": {
    id: "tylermcginnisxj352vofupe1dqz9emx13r",
    userId: "tylermcginnis",
    questionId: "xj352vofupe1dqz9emx13r",
    vote: "optionTwo"
  },
  "johndoexj352vofupe1dqz9emx13r": {
    id: "johndoexj352vofupe1dqz9emx13r",
    userId: "johndoe",
    questionId: "xj352vofupe1dqz9emx13r",
    vote: "optionOne"
  },
  "johndoevthrdm985a262al8qx3do": {
    id: "johndoevthrdm985a262al8qx3do",
    userId: "johndoe",
    questionId: "vthrdm985a262al8qx3do",
    vote: "optionTwo"
  },
  "johndoe6ni6ok3ym7mf1p33lnez": {
    id: "johndoe6ni6ok3ym7mf1p33lnez",
    userId: "johndoe",
    questionId: "6ni6ok3ym7mf1p33lnez",
    vote: "optionTwo"
  }
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      ...users
    }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      ...questions
    }), 1000)
  })
}

export function _getAnswers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({
      ...answers
    }), 1000)
  })
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided user inputs, 
 * formats them to a user that has all required attributes
 * before adding to database
 * @param {string} name - 
 * @param {string} avatarURL - 
 * @returns {Object} user - Newly added user object
 */
 function formatUser({
  name,
  avatarURL
}) {
  return {
    id: generateUID(),
    name,
    avatarURL
  }
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided user inputs, formats them to a user,
 * saves it to the database table and return new user
 * @param {Object} userInputs - 
 * @param {string} userInputs.name - 
 * @param {string} userInputs.avatarUrl - 
 * @returns {Object} user - Newly added user object
 */
export function _saveUser(userInputs) {
  return new Promise((res, rej) => {
    const user = formatUser(userInputs);

    setTimeout(() => {
      users = {
        ...users,
        [user.id]: user
      }

      res(user)
    }, 1000)
  })
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided question inputs, 
 * formats them to a question that has all required attributes
 * before adding to database
 * @param {string} optionOneText - 
 * @param {string} optionTwoText - 
 * @param {string} author - 
 * @returns {Object} question - Newly added question object
 */
 function formatQuestion({
  optionOneText,
  optionTwoText,
  author
}) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: optionOneText,
    optionTwo: optionTwoText
  }
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided question inputs, formats them to a question,
 * saves it to the database table and return new question
 * @param {Object} questionInputs - 
 * @param {string} questionInputs.optionOneText - 
 * @param {string} questionInputs.optionTwoText - 
 * @param {string} questionInputs.author - 
 * @returns {Object} question - Newly added question object
 */
export function _saveQuestion(questionInputs) {
  return new Promise((res, rej) => {
    const question = formatQuestion(questionInputs);

    setTimeout(() => {
      questions = {
        ...questions,
        [question.id]: question
      }

      res(question)
    }, 1000)
  })
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided answer inputs, 
 * formats them to a answer that has all required attributes
 * before adding to database
 * @param {string} userId - 
 * @param {string} questionId - 
 * @param {string} vote - "optionOne" or "optionTwo"
 * @returns {Object} answer - Newly added answer object
 */
function formatAnswer({
  userId,
  questionId,
  vote
}) {
  const id = userId + questionId;
  return {
    id,
    userId,
    questionId,
    vote
  }
}

/**
 * @author Mustafa Kahraman <kahramanmstafa@gmail.com> 
 * Receive provided answer inputs, formats them to a answer,
 * saves it to the database table and return the new answer
 * @param {Object} answerInputs - 
 * @param {string} answerInputs.userId - 
 * @param {string} answerInputs.questionId - 
 * @param {string} answerInputs.vote - "optionOne" or "optionTwo"
 * @returns {Object} answer - Newly added answer object
 */
export function _saveAnswer(answerInputs) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const answer = formatAnswer(answerInputs);

      answers = {
        ...answers,
        [answer.id]: answer
      }

      res(answer)
    }, 500)
  })
}

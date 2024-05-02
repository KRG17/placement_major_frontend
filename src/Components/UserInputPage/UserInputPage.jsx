import React, { useState } from "react"
import "./UserInputPage.css"
import axios from "axios"

const UserInputPage = ({
  setResponseData,
  questionType,
  setQuestionType,
  singleQuestion,
  setSingleQuestion,
  multipleQuestions,
  setMultipleQuestions,
  theme,
}) => {
  const handleSingleQuestionSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(questionType, singleQuestion)
      const response = await axios.post(
        `http://localhost:8000/${questionType}/single/question`,
        {
          question: singleQuestion,
        }
      )
      console.log("Response from backend:", response.data)
      setResponseData(response.data)
    } catch (error) {
      console.error("Error submitting single question:", error)
    }
  }

  const handleMultipleQuestionsSubmit = async (e) => {
    e.preventDefault()
    const questionsArray = multipleQuestions.split("\n").filter(Boolean)
    try {
      const response = await axios.post(
        `http://localhost:8000/${questionType}/multiple/question`,
        {
          question_list: questionsArray,
        }
      )
      console.log("Response from backend:", response.data)
      setResponseData(response.data)
    } catch (error) {
      console.error("Error submitting multiple questions:", error)
    }
  }

  return (
    <div className={`container ${theme}`}>
      <h1>Question Input</h1>
      <div
        id="question-type"
        style={{ textAlign: "center" }}
      >
        <h2>Select a Question Type</h2>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="">Select Question Type</option>
          <option value="cn">Computer Networks</option>
          <option value="os">Operating Systems</option>
          <option value="dbms">Database Management Systems</option>
        </select>
      </div>
      <div id="question-input">
        <h2>Question Input</h2>
        <form>
          <div>
            <label htmlFor="single-question-input">
              Enter your single question:
            </label>
            <input
              type="text"
              id="single-question-input"
              value={singleQuestion}
              onChange={(e) => setSingleQuestion(e.target.value)}
            />
            <button onClick={handleSingleQuestionSubmit}>
              Submit Single Question
            </button>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="questions">
              Enter your questions (separated by enter):
            </label>
            <textarea
              id="questions"
              value={multipleQuestions}
              onChange={(e) => setMultipleQuestions(e.target.value)}
              rows="5"
            ></textarea>
            <button onClick={handleMultipleQuestionsSubmit}>
              Submit Multiple Questions
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInputPage

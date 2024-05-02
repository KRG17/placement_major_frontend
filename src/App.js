import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./App.css"
import UserInputPage from "./Components/UserInputPage/UserInputPage"
import InputDisplayPage from "./Components/InputDisplayPage/InputDisplayPage"
import Header from "./Components/Header/Header"
import AboutPage from "./Components/AboutPage/AboutPage"

function App() {
  const [responseData, setResponseData] = useState("")
  const [questionType, setQuestionType] = useState("")
  const [singleQuestion, setSingleQuestion] = useState("")
  const [multipleQuestions, setMultipleQuestions] = useState([])
  const [theme, setTheme] = useState("dark")

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header
          theme={theme}
          setTheme={setTheme}
        />
        <Switch>
          <Route
            exact
            path="/"
          >
            <div className="user-input">
              <UserInputPage
                setResponseData={setResponseData}
                questionType={questionType}
                setQuestionType={setQuestionType}
                singleQuestion={singleQuestion}
                setSingleQuestion={setSingleQuestion}
                multipleQuestions={multipleQuestions}
                setMultipleQuestions={setMultipleQuestions}
              />
            </div>
            <div className="input-display">
              <InputDisplayPage
                responseData={responseData}
                questionType={questionType}
                singleQuestion={singleQuestion}
                multipleQuestions={multipleQuestions}
              />
            </div>
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

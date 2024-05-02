import React, { useState } from "react"
import "./InputDisplayPage.css"

const InputDisplayPage = ({ responseData, questionType }) => {
  const [loading, setLoading] = useState(true)
  const { data } = responseData

  if (loading && responseData) {
    setLoading(false)
  }

  const getQuestionTypeDisplayName = (type) => {
    switch (type) {
      case "cn":
        return "Computer Networks"
      case "os":
        return "Operating Systems"
      case "dbms":
        return "Database Management Systems"
      default:
        return ""
    }
  }

  return (
    <div className="container">
      <h1>Display Page</h1>
      <div className="content">
        <h4>Question Type: {getQuestionTypeDisplayName(questionType)}</h4>
        {/* Render loading message if data is still loading */}
        {loading && <div>No Data Available...</div>}

        {/* Render questions if available */}
        {data &&
          (Array.isArray(data) ? (
            data.map((questionData, questionIndex) => (
              <div
                key={questionIndex}
                className="question"
              >
                <h3>Question {questionIndex + 1}: </h3> {questionData.question}
                <div className="matching-topics">
                  {questionData.matching_topic.map((topic, topicIndex) => (
                    <div
                      key={topicIndex}
                      className="matching-topic"
                    >
                      <h3>Matching Topic {topicIndex + 1}</h3>
                      <p>{topic.book_topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="question">
              <h3>Question : </h3> {data.question}
              <div className="matching-topics">
                {data.matching_topic.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="matching-topic"
                  >
                    <h3>Matching Topic {topicIndex + 1}</h3>
                    <p>{topic.book_topic}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default InputDisplayPage

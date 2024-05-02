import React, { useState } from "react"
import "./AboutPage.css"
import AmazonCNImage from "../images/CN/book_topic_frequencies_Amazon.png"
import GoogleCNImage from "../images/CN/book_topic_frequencies_Google.png"
import MicrosoftCNImage from "../images/CN/book_topic_frequencies_Microsoft.png"
import AmazonDBMSImage from "../images/DBMS/book_topic_frequencies_Amazon.png"
import GoogleDBMSImage from "../images/DBMS/book_topic_frequencies_Google.png"
import MicrosoftDBMSImage from "../images/DBMS/book_topic_frequencies_Microsoft.png"
import AmazonOSImage from "../images/OS/book_topic_frequencies_Amazon.png"
import GoogleOSImage from "../images/OS/book_topic_frequencies_Google.png"
import MicrosoftOSImage from "../images/OS/book_topic_frequencies_Microsoft.png"

const AboutPage = ({ theme }) => {
  const [selectedSubject, setSelectedSubject] = useState("CN")

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value)
  }

  let selectedImages
  switch (selectedSubject) {
    case "CN":
      selectedImages = [GoogleCNImage, MicrosoftCNImage, AmazonCNImage]
      break
    case "DBMS":
      selectedImages = [GoogleDBMSImage, MicrosoftDBMSImage, AmazonDBMSImage]
      break
    case "OS":
      selectedImages = [GoogleOSImage, MicrosoftOSImage, AmazonOSImage]
      break
    default:
      selectedImages = [GoogleCNImage, MicrosoftCNImage, AmazonCNImage]
      break
  }
  return (
    <div className="about-page">
      <h1 className="about-title">Welcome to Our Platform!</h1>
      <p className="about-description">
        We're dedicated to providing comprehensive insights and resources for
        technical interview preparation, with a special focus on theoretical
        questions within the domains of Networking, Database Management Systems
        (DBMS), and Operating Systems (OS). Here's a glimpse into our analytical
        approach:
      </p>

      <h2 className="section-title">Theoretical Question Analysis:</h2>
      <p className="section-description">
        Our project began with a focus on analyzing theoretical questions
        relevant to technical interviews, particularly within the domains of
        Networking, Database Management Systems (DBMS), and Operating Systems
        (OS). We employed advanced unsupervised analysis techniques such as
        BERT, Latent Dirichlet Allocation (LDA), and Gibbs Sampling Dirichlet
        Multinomial Mixture (GSDMM) to uncover patterns and structures within a
        vast pool of theoretical questions.
      </p>

      <h2 className="section-title">Coherence Evaluation:</h2>
      <p className="section-description">
        Ensuring the quality and meaningfulness of identified topics was
        paramount. We conducted coherence evaluation to assess the semantic
        similarity and relevance of terms within clusters, refining and
        clarifying the identified topics for better interpretability.
      </p>

      <h2 className="section-title">BERTopic Integration and Visualization:</h2>
      <p className="section-description">
        We integrated the BERTopic model, leveraging deep learning algorithms
        like recurrent neural networks (RNNs) and transformers for improved
        topic clustering and accuracy. This integration allowed for the
        quantification and visualization of topics, providing insights into
        their distribution and prevalence across the dataset. Dynamic
        exploration of topics through word clouds enhanced user engagement and
        understanding.
      </p>

      <h2 className="section-title">
        Extension - N-gram Analysis and Data Enrichment:
      </h2>
      <p className="section-description">
        In the extension phase, we strategically improved the topic prediction
        model by incorporating N-gram analysis and data enrichment through book
        merging. These strategies aimed to enhance granularity, accuracy, and
        coverage, ensuring a more comprehensive understanding of theoretical
        questions related to Networking, DBMS, and OS.
      </p>

      <h2 className="section-title">Mapping:</h2>
      <p className="section-description">
        Our project also involved mapping theoretical question topics to actual
        curriculum topics. Through manual topic generation, keyword weighting,
        and TF-IDF vectorization, we established a robust mapping between
        predicted question topics and curriculum topics. This mapping provides
        valuable context and aids job seekers in better preparing for technical
        interviews.
      </p>

      <div className="select-container">
        <select
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="select-subject"
        >
          <option value="CN">Computer Networks (CN)</option>
          <option value="DBMS">Database Management Systems (DBMS)</option>
          <option value="OS">Operating Systems (OS)</option>
        </select>
      </div>

      {selectedImages.map((image, index) => (
        <div
          className="image-container"
          key={index}
        >
          <img
            src={image}
            alt={`Frequency of Topics - ${selectedSubject}`}
          />
          <p className="company-name">{`Frequency of Topics - ${selectedSubject}`}</p>
        </div>
      ))}

      <p className="about-summary">
        This project aims to empower job seekers with valuable insights and
        resources for interview preparation. Whether you're navigating the
        complexities of theoretical questions or seeking clarity on interview
        topics, we're here to support your journey towards interview success.
      </p>
    </div>
  )
}

export default AboutPage

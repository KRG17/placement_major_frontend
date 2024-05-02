import React from "react"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Welcome to Our Platform!</h1>
      <p>
        We're dedicated to providing comprehensive insights and resources for
        technical interview preparation, with a special focus on theoretical
        questions within the domains of Networking, Database Management Systems
        (DBMS), and Operating Systems (OS). Here's a glimpse into our analytical
        approach:
      </p>

      <h2>Theoretical Question Analysis:</h2>
      <p>
        Our project began with a focus on analyzing theoretical questions
        relevant to technical interviews, particularly within the domains of
        Networking, Database Management Systems (DBMS), and Operating Systems
        (OS). We employed advanced unsupervised analysis techniques such as
        BERT, Latent Dirichlet Allocation (LDA), and Gibbs Sampling Dirichlet
        Multinomial Mixture (GSDMM) to uncover patterns and structures within a
        vast pool of theoretical questions.
      </p>

      <h2>Coherence Evaluation:</h2>
      <p>
        Ensuring the quality and meaningfulness of identified topics was
        paramount. We conducted coherence evaluation to assess the semantic
        similarity and relevance of terms within clusters, refining and
        clarifying the identified topics for better interpretability.
      </p>

      <h2>BERTopic Integration and Visualization:</h2>
      <p>
        We integrated the BERTopic model, leveraging deep learning algorithms
        like recurrent neural networks (RNNs) and transformers for improved
        topic clustering and accuracy. This integration allowed for the
        quantification and visualization of topics, providing insights into
        their distribution and prevalence across the dataset. Dynamic
        exploration of topics through word clouds enhanced user engagement and
        understanding.
      </p>

      <h2>Extension - N-gram Analysis and Data Enrichment:</h2>
      <p>
        In the extension phase, we strategically improved the topic prediction
        model by incorporating N-gram analysis and data enrichment through book
        merging. These strategies aimed to enhance granularity, accuracy, and
        coverage, ensuring a more comprehensive understanding of theoretical
        questions related to Networking, DBMS, and OS.
      </p>

      <h2>Mapping :</h2>
      <p>
        Our project also involved mapping theoretical question topics to actual
        curriculum topics. Through manual topic generation, keyword weighting,
        and TF-IDF vectorization, we established a robust mapping between
        predicted question topics and curriculum topics. This mapping provides
        valuable context and aids job seekers in better preparing for technical
        interviews.
      </p>
      <h2>Frequency of Topics for Each Company:</h2>
      <div class="image-container">
        <img
          src="/assets/image1.jpg"
          alt="Frequency of Topics - Company A"
        />
        <p>Frequency of Topics - Company A</p>
      </div>
      <div class="image-container">
        <img
          src="/assets/image2.jpg"
          alt="Frequency of Topics - Company B"
        />
        <p>Frequency of Topics - Company B</p>
      </div>
      <div class="image-container">
        <img
          src="/assets/image3.jpg"
          alt="Frequency of Topics - Company C"
        />
        <p>Frequency of Topics - Company C</p>
      </div>

      <p>
        This project aims to empower job seekers with valuable insights and
        resources for interview preparation. Whether you're navigating the
        complexities of theoretical questions or seeking clarity on interview
        topics, we're here to support your journey towards interview success.{" "}
      </p>
    </div>
  )
}

export default AboutPage

import React, { useEffect, useState } from "react";
import VL from "src/assets/projects/DB_ML/VDB_ML.png";
import va from "src/assets/projects/AULOG/PY_lOGO.png";
import vb from "src/assets/projects/DB_ML/SK.png";
import vc from "src/assets/projects/DB_ML/PD.png";
import vd from "src/assets/projects/DB_ML/NP.png";
import ve from "src/assets/projects/DB_ML/MP.png";
import vf from "src/assets/projects/DB_ML/SN.png";
import vg from "src/assets/projects/PYXE/VS_lOGO.png";
import sa from "src/assets/projects/DB_ML/aa.png";
import sb from "src/assets/projects/DB_ML/ab.png";
import sc from "src/assets/projects/DB_ML/ca.png";
import sd from "src/assets/projects/DB_ML/cb.png";
import se from "src/assets/projects/DB_ML/cc.png";
import sf from "src/assets/projects/DB_ML/cd.png";
import sg from "src/assets/projects/DB_ML/task.jpg"
import sh from "src/assets/projects/DB_ML/dataset.png";


const DB_ML = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [va, vb, vc, vd, ve, vf, vg]; // Add certification images if available
  const documentationImages = [sh, sc, sd]; // Add documentation images if available

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const goToPreviousCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === 0 ? certificationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === certificationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === 0 ? documentationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === documentationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <div
        className="bg-white/10 p-8 rounded-lg w-[70%] h-[90%] mx-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4 pr-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Diabetes Progression Prediction Using Random Forest Regressor: A Machine Learning Approach
          </h2>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={VL}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

          {/* View Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://github.com/Rinaldinur-14/Diabetes-Progression-Prediction-Machine-Learning.git"
              target="_blank" rel="noopener noreferrer"
            >
              View Project on GitHub →
            </a>
          </div>
          

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>In February 2025</strong>, I embarked on a project to predict the progression of diabetes in patients using machine learning. The goal was to leverage the <strong>Diabetes dataset</strong> from <strong>Scikit-learn</strong>, which contains 10 baseline variables (features) collected from 442 diabetes patients, along with a quantitative measure of disease progression one year after baseline. The project aimed to build a predictive model using a <strong>Random Forest Regressor</strong> and evaluate its performance using metrics like <strong>Mean Squared Error (MSE)</strong> and <strong>R-squared (R²)</strong>.
            </p>
          </div>

          {/* Project Goals */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Project Goals
            </h3>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={sg}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

            <p>
              The primary objectives of the project were:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Understand the Dataset:</strong> Perform exploratory data analysis (EDA) to explore the distribution of features and their relationships with the target variable.
              </li>
              <li>
                <strong>Build and Train a Regression Model:</strong> Use a <strong>Random Forest Regressor</strong> to predict diabetes progression.
              </li>
              <li>
                <strong>Evaluate the Model's Performance:</strong> Assess the model's accuracy using metrics like <strong>MSE</strong> and <strong>R²</strong>.
              </li>
              <li>
                <strong>Visualize the Results:</strong> Plot the actual vs. predicted values to understand the model's performance.
              </li>
              <li>
                <strong>Certificate Achievement:</strong> I initially aimed to complete this project to earn a certificate from Dibimbing Digital Skill Fair 36 - Data Science. 
              </li>
            </ul>
          </div>

          {/* Tools and Technologies */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Tools and Technologies
            </h3>
            <p>
              To achieve the project goals, I utilized the following tools and technologies:
            </p>

          {/* Certification Carousel */}
          <div className="flex justify-center mb-4 relative">
            <button
              onClick={goToPreviousCert}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={certificationImages[currentCertIndex]}
              alt={`Certification Image ${currentCertIndex + 1}`}
              className="w-full max-w-40 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={goToNextCert}
              className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &rarr;
            </button>
          </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Python:</strong> The primary programming language used for data analysis, model building, and visualization.
              </li>
              <li>
                <strong>Scikit-learn:</strong> A machine learning library used to access the Diabetes dataset, split the data, and implement the Random Forest Regressor.
              </li>
              <li>
                <strong>Pandas:</strong> Used for data manipulation and exploratory data analysis (EDA) to understand the dataset’s structure and relationships.
              </li>
              <li>
                <strong>NumPy:</strong> A library for numerical computations, used for handling arrays and mathematical operations.
              </li>
              <li>
                <strong>Matplotlib and Seaborn:</strong> Libraries used for data visualization, including plotting the actual vs. predicted values and analyzing feature distributions.
              </li>
              <li>
                <strong>Visual Studio Code:</strong> The Integrated Development Environment (IDE) used for writing, debugging, and testing the website code. Its extensions and live server feature made development efficient.
              </li>
              </ul>
            </div>

            {/* Implementation */}
            <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
              <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
                Implementation
              </h3>
              <p>
                The Diabetes Progression Prediction project was implemented using Python and machine learning techniques. Below are the key steps of the implementation:
              </p>
              <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
                <li>
                  <strong>Exploratory Data Analysis (EDA):</strong> The dataset was analyzed using Pandas and Seaborn to understand the distribution of features and their relationships with the target variable. Visualizations such as histograms and correlation matrices were created to identify patterns and insights.
                </li>
                <li>
                  <strong>Data Splitting:</strong> The dataset was split into training (80%) and testing (20%) sets using Scikit-learn’s <code>train_test_split</code> function to ensure the model could be evaluated on unseen data.
                </li>
                <li>
                  <strong>Model Training:</strong> A Random Forest Regressor with 100 trees (<code>n_estimators=100</code>) was trained on the training data. The model was chosen for its ability to handle non-linear relationships and reduce overfitting.
                </li>
                <li>
                  <strong>Prediction:</strong> The trained model was used to predict diabetes progression on the test set. The predictions were compared to the actual values to evaluate the model’s performance.
                </li>
                <li>
                  <strong>Model Performance Evaluation:</strong> The model’s performance was assessed using Mean Squared Error (MSE) and R-squared (R²). The MSE was 2859.69, and the R² was 0.44, indicating that the model explained 44% of the variance in the target variable.
                </li>
                <li>
                  <strong>Visualization:</strong> A scatter plot was created using Matplotlib to compare the actual vs. predicted values. The plot showed that the model performed reasonably well but had room for improvement, especially for higher target values.
                </li>
              </ul>
              <p>
                The implementation demonstrates how machine learning can be applied to predict disease progression. While the model achieved moderate performance, there is potential for improvement through feature engineering, hyperparameter tuning, and exploring other algorithms.
              </p>
            </div>

            {/* Exploratory Data Analysis (EDA) */}
            <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
              <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
                Exploratory Data Analysis (EDA)
              </h3>
              <p>
                The first step in the project was to perform <strong>Exploratory Data Analysis (EDA)</strong> to understand the dataset's structure, distribution, and relationships between features and the target variable. Below are the key steps and findings from the EDA process:
              </p>

              {/* Dataset Information */}
              <div className="space-y-2">
                <h4 className="text-md md:text-xl font-bold mt-4 mb-2 text-white">
                  Dataset Information
                </h4>

                <div className="flex justify-center items-center mt-6 relative">
              <button
                onClick={goToPreviousDoc}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={documentationImages[currentDocIndex]}
                alt={`Documentation Image ${currentDocIndex + 1}`}
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextDoc}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

                <p>
                  The dataset contains <strong>442 rows</strong> and <strong>11 columns</strong> (10 features + 1 target). There are no missing values, and all features are numeric and have been scaled. The features include:
                </p>
                <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                  <li><strong>Age:</strong> Age of the patient (scaled).</li>
                  <li><strong>Sex:</strong> Gender of the patient (scaled).</li>
                  <li><strong>BMI:</strong> Body Mass Index (scaled).</li>
                  <li><strong>BP:</strong> Average blood pressure (scaled).</li>
                  <li><strong>S1:</strong> Total serum cholesterol (scaled).</li>
                  <li><strong>S2:</strong> Low-density lipoproteins (scaled).</li>
                  <li><strong>S3:</strong> High-density lipoproteins (scaled).</li>
                  <li><strong>S4:</strong> Total cholesterol / HDL ratio (scaled).</li>
                  <li><strong>S5:</strong> Log of serum triglycerides level (scaled).</li>
                  <li><strong>S6:</strong> Blood sugar level (scaled).</li>
                </ul>
              </div>

              {/* Descriptive Statistics */}
              <div className="space-y-2">
                <h4 className="text-md md:text-xl font-bold mt-4 mb-2 text-white">
                  Descriptive Statistics
                </h4>
                <p>
                  The target variable (disease progression) ranges from <strong>25 to 346</strong>, with a mean of <strong>152.13</strong>. Features like <strong>BMI</strong> and <strong>S5</strong> show significant variability, which may indicate their importance in predicting the target.
                </p>
                <p>
                  Key statistics from the dataset include:
                </p>
                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={se}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-full rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>
                <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                  <li><strong>Mean:</strong> The average value of each feature and the target variable.</li>
                  <li><strong>Standard Deviation:</strong> Measures the spread of the data.</li>
                  <li><strong>Minimum and Maximum:</strong> The range of values for each feature.</li>
                  <li><strong>25th, 50th, and 75th Percentiles:</strong> The distribution of the data across quartiles.</li>
                </ul>
              </div>

              {/* Feature Correlation Heatmap */}
              <div className="space-y-2">
                <h4 className="text-md md:text-xl font-bold mt-4 mb-2 text-white">
                  Feature Correlation Heatmap
                </h4>
                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={sa}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>
                <p>
                  A heatmap was created to visualize the correlation between features and the target variable. The heatmap revealed that features like <strong>BMI</strong> and <strong>S5</strong> show moderate positive correlations with the target, suggesting they are important predictors of diabetes progression.
                </p>
                <p>
                  The correlation analysis helped identify which features are most strongly related to the target variable, guiding the feature selection process for the model.
                </p>
              </div>

            </div>

          {/* Algorithm Used */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Algorithm Used
            </h3>
            <p>
              The primary algorithm used in this project was the <strong>Random Forest Regressor</strong>, an ensemble learning method that combines multiple decision trees to improve prediction accuracy and reduce overfitting. Here’s how the model was implemented:
            </p>
            <ul className="list-decimal ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Split the Data:</strong> The dataset was split into <strong>80% training</strong> and <strong>20% testing</strong> sets.</li>
              <li><strong>Train the Model:</strong> A <strong>Random Forest Regressor</strong> with <strong>100 trees</strong> (<code>n_estimators=100</code>) was trained on the training data.</li>
              <li><strong>Make Predictions:</strong> The model was used to predict the target values for the test set.</li>
              <li><strong>Evaluate the Model:</strong> Performance was evaluated using <strong>Mean Squared Error (MSE)</strong> and <strong>R-squared (R²)</strong>.</li>
            </ul>
          </div>

          {/* Model Performance */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Model Performance Evaluation
            </h3>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={sf}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-60 rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

            <p>
              The model achieved the following performance metrics:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Mean Squared Error (MSE):</strong> <strong>2859.69</strong>  
                This measures the average squared difference between the actual and predicted values. Lower values indicate better performance.
              </li>
              <li>
                <strong>R-squared (R²):</strong> <strong>0.44</strong>  
                This measures the proportion of variance in the target variable that is explained by the model. An R² of <strong>0.44</strong> means the model explains <strong>44%</strong> of the variance.
              </li>
            </ul>
          </div>

          {/* Visualization */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Visualization
            </h3>

                    {/*Image */}
                    <div className="flex flex-col items-center mb-2">
                      <img
                        src={sb}
                        alt="Special Skill Machine Learning Projectificate"
                        className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
                      />
                    </div>

            <p>
              A scatter plot was created to compare the <strong>actual vs. predicted values</strong>. The plot showed that the model performs reasonably well, but there is room for improvement, especially for higher target values.
            </p>
          </div>

          {/* Conclusion */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Conclusion
            </h3>
            <p>
              The <strong>Diabetes Progression Prediction</strong> project successfully demonstrated the application of machine learning in predicting disease progression. The <strong>Random Forest Regressor</strong> achieved moderate performance, explaining <strong>44%</strong> of the variance in the target variable. While the model performs reasonably well, there is room for improvement, particularly in predicting higher target values. This project highlighted the importance of <strong>feature selection</strong> and <strong>model evaluation</strong> in building effective predictive models. However, I did not receive the certificate, possibly because I was late in posting the project on LinkedIn. Despite this, I still gained valuable knowledge and experience from the project.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify mt-10">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Skills Gained
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Technical Skills:</strong> Python programming, data analysis, machine learning, and data visualization.
              </li>
              <li>
                <strong>Soft Skills:</strong> Problem-solving, time management, and project management.
              </li>
              <li>
                <strong>Learning:</strong> Gained experience in exploratory data analysis, model building, and performance evaluation.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DB_ML;
import styled from "styled-components";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import {
  TextInputQuestion,
  NavigationBar,
  MultiOptionQuestion,
  Results,
} from "../components";

const HomeContainer = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 70%;
  margin: auto;
  background-color: ${(props) => props.theme.primary};
  /* Large devices (Laptops, 1440px and down) */
  @media only screen and (max-width: 1440px) {
    width: 70%;
  }
  /* Medium devices (landscape tablets, 768px and down) */
  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default function Home() {
  const [step, setStep] = useState(0);
  const sections = [
    <TextInputQuestion
      title="What is your name?"
      label="Name"
      key="NameQuestion"
    />,
    <TextInputQuestion
      title="What is your email address?"
      label="Email address"
      key="EmailQuestion"
    />,
    <MultiOptionQuestion
      title="What service are you here for?"
      options={["STI Testing", "Contraception", "Other"]}
      key="ServicesQuestion"
    />,
    <Results
      results={[
        { question: "Sample Question", answer: "Sample Answer" },
        { question: "Sample Question 2", answer: "Sample Answer 2" },
      ]}
      key="Results"
    />,
  ];

  const handleBack = () => {
    setStep(step - 1);
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Head>
        <title>SH-24 Order Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        {sections[step]}
        <NavigationBar
          handleBack={handleBack}
          handleNext={handleNext}
          isFirstStep={step === 0}
          isLastStep={step === sections.length - 1}
        />
      </HomeContainer>
    </div>
  );
}

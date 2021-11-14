import styled from "styled-components";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  TextInputQuestion,
  NavigationBar,
  MultiOptionQuestion,
  Results,
} from "../components";
import Head from "next/head";

const HomeContainer = styled.div`
  min-height: 12rem;
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
  const sections = 3;

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
      <Formik
        initialValues={{ name: "", email: "", service: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Name must be between 2 and 25 characters")
            .max(25, "Name must be between 2 and 25 characters")
            .required("You must enter a name to continue"),
          email: Yup.string()
            .email("You must enter a valid email address to continue")
            .required("You must enter an email address to continue"),
          service: Yup.string()
            .oneOf(["STI Testing", "Contraception", "Other"])
            .required("You must select an option to continue"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            setFieldValue,
          } = props;
          return (
            <HomeContainer>
              {
                [
                  <>
                    <TextInputQuestion
                      title="What is your name?"
                      label="Name"
                      key="NameQuestion"
                      id="name"
                      value={values.name}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      isError={errors.name && touched.name}
                      errorMessage={errors.name}
                    />
                    <NavigationBar
                      handleBack={handleBack}
                      handleNext={handleNext}
                      isFirstStep={step === 0}
                      isLastStep={step === sections}
                      isError={
                        (errors.name && touched.name) || values.name === ""
                      }
                    />
                  </>,
                  <>
                    <TextInputQuestion
                      title="What is your email address?"
                      label="Email address"
                      key="EmailQuestion"
                      id="email"
                      value={values.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      isError={errors.email && touched.email}
                      errorMessage={errors.email}
                    />
                    <NavigationBar
                      handleBack={handleBack}
                      handleNext={handleNext}
                      isFirstStep={step === 0}
                      isLastStep={step === sections}
                      isError={
                        (errors.email && touched.email) || values.email === ""
                      }
                    />
                  </>,
                  <>
                    <MultiOptionQuestion
                      title="What service are you here for?"
                      key="ServicesQuestion"
                      options={["STI Testing", "Contraception", "Other"]}
                      id="service"
                      value={values.service}
                      handleClick={setFieldValue}
                    />
                    <NavigationBar
                      handleBack={handleBack}
                      handleNext={handleNext}
                      isFirstStep={step === 0}
                      isLastStep={step === sections}
                      isError={
                        (errors.service && touched.service) ||
                        values.service === ""
                      }
                    />
                  </>,
                  <>
                    <Results results={Object.entries(values)} key="Results" />
                    <NavigationBar
                      handleBack={handleBack}
                      handleNext={handleNext}
                      isFirstStep={step === 0}
                      isLastStep={step === sections}
                      isError={false}
                    />
                  </>,
                ][step]
              }
            </HomeContainer>
          );
        }}
      </Formik>
    </div>
  );
}

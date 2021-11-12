import Head from "next/head";
import styled from "styled-components";
import { TextInputQuestion } from "../components/TextInputQuestion/TextInputQuestion";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { MultiOptionQuestion } from "../components/MultiOptionQuestion/MultiOptionQuestion";
import { Results } from "../components/Results/Results";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 70%;
  margin: auto;
  background-color: #2f2f81;
  /* Large devices (Laptops, 1440px and down) */
  @media only screen and (max-width: 1440px) {
    width: 80%;
    background-color: purple;
  }
  /* Medium devices (landscape tablets, 768px and down) */
  @media only screen and (max-width: 768px) {
    width: 90%;
    background-color: green;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    background-color: red;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>SH-24 Order Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <TextInputQuestion title="What is your name?" label="Name" />
        <TextInputQuestion
          title="What is your email address?"
          label="Email address"
        />
        <MultiOptionQuestion
          title="What service are you here for?"
          options={["STI Testing", "Contraception", "Other"]}
        />
        <NavigationBar />
        <Results
          results={[
            { question: "Sample Question", answer: "Sample Answer" },
            { question: "Sample Question 2", answer: "Sample Answer 2" },
          ]}
        />
      </HomeContainer>
    </div>
  );
}

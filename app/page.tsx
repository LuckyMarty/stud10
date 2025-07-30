"use client";
import GlitchText from "@/components/new/GlitchText";
import LyricsEffect from "@/components/new/LyricsEffect";
import styled from "styled-components";

export default async function HomePage() {

  return (
    <PageStyled>

      <div className="lm-hero">
        <div>
          <GlitchText
            text="MOTION +"
            fontSize="12rem"
            color="#000"
          />
          <GlitchText
            text="GRAPHISME"
            fontSize="12rem"
            color="#000"
          />
          <GlitchText
            text="+ WEB DESIGN"
            fontSize="12rem"
            color="#000"
          />
        </div>
      </div>


      <LyricsEffect
        lines={[
          "Quand la créativité sort des cases,",
          "elle se transforme en magie.",
          "Ici, nous allions originalité",
          "et profesionnalisme pour faire",
          "briller vos idées, en les voyant",
          "sous un angle inattendu ce qui",
          "nous permet de booster vos projets.",
        ]}
        uppercase={true}
        fontSize="60px"
        fontFamily="N27"
      />


      <div className="lm-text-2">
        <p>
          Motion design,  <br />
          graphisme,  <br />
          web design, <br />
          illustrations…  <br />
          Peu importe le projet,  <br />
          l’idée, c’est de rendre  <br />
          vos concepts mémorables !
        </p>
      </div>
    </PageStyled>
  );
}


const PageStyled = styled.div`
  .lm-hero {
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: end;
    justify-content: center;

    > div {
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      flex-direction: column;

        >div:nth-of-type(2) {
          align-self: end;
        }
      }
    }
  }


  .lm-text-2 {
    display: flex;
    justify-content: end;

    p {
      text-align: left;
      color: #696969;
      font-size: 2rem;
      font-family: "N27";
      line-height: 1.5;
      margin-right: 6rem;
      margin-top: 6rem;
      margin-bottom: 2rem;
    }
  }
`;
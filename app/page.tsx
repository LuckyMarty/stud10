"use client";
import GlitchText from "@/components/new/GlitchText";
import ImageSlider from "@/components/new/ImageSlider";
import LyricsEffect from "@/components/new/LyricsEffect";
import styled from "styled-components";

export default async function HomePage() {

  return (
    <PageStyled>

      <section className="lm-section-1">
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
      </section>


      <section className="lm-section-2">
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

        <ImageSlider 
          images={[
            "/img/stud10-img-1.png",
            "/img/stud10-img-2.png",
            "/img/stud10-img-3.png",
            "/img/stud10-img-4.png",
          ]}
        />
      </section>
    </PageStyled>
  );
}


const PageStyled = styled.div`
  .lm-section-1 {
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

  .lm-section-2 {
    max-width: 1400px;
    margin: 0 auto;
    padding: 12rem 0;


    .lm-text-2 {
      display: flex;
      justify-content: end;
      margin-bottom: 6rem;
    
      p {
        text-align: left;
        color: #696969;
        font-size: 2rem;
        font-family: "N27";
        line-height: 1.5;
        margin-top: 6rem;
        margin-bottom: 2rem;
      }
    } 
  }
`;
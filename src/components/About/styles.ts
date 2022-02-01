import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;


  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    /* display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue); */
    font-size: 4rem;

  }
  h1{
    color: var(--black);

  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    margin-top: .5rem;
    line-height: 20px;
    color: rgba(35, 206, 107, 1)
  }





  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }



`

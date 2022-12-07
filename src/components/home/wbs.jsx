import React from "react";
import Back from "../common/back/Back";
import styled from "styled-components";
import AnimatedShapes from "../common/animasi/AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 65%;
  font-size: 47px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 65%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 65%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 275px;
  padding-top: 20px;
`;

const Phone = styled.span`
  top: 10px;
  color: #1eb2a6;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Whistleblowing = () => {
  return (
    <>
      <Back subtitle="WBS" title="WHISTLE BLOWING" />
      <Container>
        <Left>
          <Title>Whistle Blowing System</Title>
          <Desc>
            Whistle Blowing System adalah mekanisme bagi
            yayasan/koperasi/perusahaan dalam pelaporan atas dugaan pelanggaran
            atau kecurangan yang berindikasi merugikan bagi yayasan/
            koperasi/perusahaan atau hal-hal lain yang melanggar kode etik
            dan/atau peraturan perundang-undangan.
          </Desc>
            <Contact>
              <ContactText></ContactText>
              <Phone>Call Us : 081514936111 (Endang Tri Handajani)</Phone>
              <a href="mailto:gcg-ykbutgroup@ykbut.co.id" style={{color:'#1eb2a6', paddingTop: '5px'}}>Email : gcg-ykbutgroup@ykbut.co.id</a>
            </Contact>
          <Info>
            <a
              href="PedomanWhistleBlowerYKBUT2021.pdf"
              download="Pedoman Whisle Blower YKBUT 2021.pdf"
            >
              <button>Download PDF</button>
            </a>

          </Info>
        </Left>
        <AnimatedShapes />
      </Container>
    </>
  );
};

export default Whistleblowing;

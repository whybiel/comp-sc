import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 10vh 0 0 5vw;
`;

const Person = styled.h2`
  margin: 5vh 0 5vh 5vw;
  font-size: 2rem;
`;

const Text = styled.p`
  width: 74%;
  margin: 3vh 0 3vh 0vw;
  color: #e0efda;
  padding: 2vh 2vw 2vh 2vw;
  font-size: 1.5rem;
  background-color: #e18ad4;
  border: #d782ba;
  border-radius: 10px;
`;

const ImageAstra = styled.img`
  border: 6px solid #d782ba;
`;

function Main() {
  return (
    <Container>
      <Title>Valorant - O pior personagem:</Title>
      <Person>Astra</Person>
      <Text>
        Nascida em Gana, Astra é a primeira agente do continente africano no
        Valorant. Ela utiliza energias cósmicas para sugar, atrapalhar e
        confundir os inimigos no campo de batalhar. Ao contrário de outros
        personagens, a ganesa não precisa adquirir habilidades, mas estrelas que
        podem ser utilizadas em todo o mapa.
      </Text>
      <ImageAstra
        src="https://s2.glbimg.com/M5ywpKAaJmxNbeY2FFpM6z8iMWI=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/s/A/VsxciQRwaTbAZIcAvBTw/astra-wallpaper-08.png"
        alt="Astra do jogo valorant"
      />
      <Text>
        Porém, na última atualização do Vava, quebraram as pernas da bixinha,
        deixando ela com uma estrela a menos, e após puxar as estrelas não
        recarregam ao mesmo tempo, mas em sequência, ou seja 1 hora pra ter as
        estrelas novamente.
      </Text>
    </Container>
  );
}

export default Main;

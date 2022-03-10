import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #8a2af2;
  position: relative;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: 2.5rem;

  &:hover {
    border-bottom: 2px solid #fff;
    margin-bottom: 1vh;
    cursor: pointer;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 2rem;
`;

const Image = styled.img`
  width: 40vw;
  position: absolute;
  top: 7vh;
`;

const TitleFooter = styled.h2`
  position: absolute;
  top: 25vh;
  left: 40vw;
  font-size: 2rem;
  color: white;
`;
const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

function Footer() {
  return (
    <Container>
      <List>
        <ListItem>
          <Link href="#">Inicio</Link>
        </ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Galeria</ListItem>
      </List>
      <Image
        src="https://cdn.pixabay.com/photo/2016/12/21/02/51/pointing-finger-1922074_1280.png"
        alt="Dedo apontando para você"
      />
      <TitleFooter>Se você chegou até aqui, me deve um pix!</TitleFooter>
    </Container>
  );
}

export default Footer;

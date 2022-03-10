import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-image: url("https://sm.ign.com/t/ign_pt/video/v/valorant-a/valorant-astra-gameplay-reveal-trailer_7ynm.1200.jpg");
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
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  color: red;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const Link = styled.a`
  text-decoration: none;
`;

function Header() {
  return (
    <Container>
      <List>
        <ListItem>
          <Link id="#">Inicio</Link>
        </ListItem>
        <ListItem>Sobre</ListItem>
        <ListItem>Personagens</ListItem>
      </List>
    </Container>
  );
}

export default Header;

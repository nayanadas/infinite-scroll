import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function StickyNavbar() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark" className='sticky' style={{textAlign:"center"}}>
        <Container className='sticky' style={{backgroundColor: "#3556e8", position: "sticky", height:"40px"}}>
          <Navbar.Brand style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>
            ReactJS Infinite Scroll
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default StickyNavbar;

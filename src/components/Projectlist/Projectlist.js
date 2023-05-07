import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import hotstar2 from '../../Assets/hotstar2.png'
import kfc from '../../Assets/kfc.png'
import shop from '../../Assets/shop.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hotstar2}
                isBlog={false}
                title="HotStar-Clone"
                description="A React Redux Firebase-based web application that replicates the popular streaming platform Hotstar, allowing users to browse and stream their favorite movies, TV shows, and sports events."
                ghLink="https://my-hotstar-project.web.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kfc}
                isBlog={false}
                title="KFC-Clone"
                description="
                A KFC clone website using HTML, CSS, and JavaScript is designed to replicate the look and feel of the original KFC website. The website  include features such as a menu with prices, an order form, location information, Sorting , Filtering and images of food items."
                ghLink="https://creative-praline-bb6624.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shop}
                isBlog={false}
                title="Shop.com-Clone"
                description="Shop.com is an US based e-commerce website, created using HTML, CSS, JS. implimented sorting, filtering, search and voice search functionality. webpage builds responsive to multiple sizes of devices"
                ghLink="https://darling-travesseiro-cc33f2.netlify.app/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
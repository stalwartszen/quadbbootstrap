import { Carousel, Col, Form, FormControl, Row } from "react-bootstrap"
import CardComp from "./Card"
import Separator from "./Separator"
import { useEffect, useState } from "react"
import carbg from "../assets/gui.jpg.webp"

const Home = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((datas) => {
        setdata(datas);
        console.log(datas);
      });
  }, []);

  const [filter, setfilter] = useState("")


  return (
    <div style={{ padding: "2%" }}>
      <Carousel style={{ width: "100%", height: 500, backgroundImage: `url(${carbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        {data.map((item, index) => {
          return (
            <Carousel.Item key={index} >
              <img
                className="d-block w-100"
                style={{ width: "100%", height: 500, objectFit: "scale-down" }}
                src={item.show.image.original}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item.show.name}</h3>
                <p>{item.show.rating.average}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}

      </Carousel>
      <Separator color="grey" />
      <p style={{ textDecorationLine: "underline", fontSize: "2rem", fontWeight: 600 }}>TV Shows</p>
      <Form className="d-flex mb-2 mt-2" >
        <FormControl
          type="search"
          placeholder="Search By Name"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setfilter(e.target.value)}
          style={{ width: "50%" }}
        />
      </Form>
      {data && <Row >
        {data.map((item, index) => {
          return (item.show.name.toLowerCase().includes(filter.toLowerCase()) ? <Col key={index} style={{ display: "flex", justifyContent: "center" }}>
            <CardComp data={item} />
          </Col> : null)
        })}


      </Row>}



    </div>
  )
}

export default Home
import React from "react";
import { toast } from "react-toastify";
import "../App.css";
import { Form, Button, Row, Col, Container, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { query } from "../Controller/api";
import Loader from "../components/Loader";
const HomeScreen = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      text1 === "" ||
      text2 === "" ||
      text3 === "" ||
      text4 === "" ||
      text5 === "" ||
      text6 === "" ||
      text7 === "" ||
      text8 === "" ||
      text9 === "" ||
      text10 === ""
    ) {
      toast.error("Please fill all the fields");
      setLoading(false);
    } else {
      const queries = [
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        text7,
        text8,
        text9,
        text10,
      ];
      const imagePromises = queries.map(async (prompt) => {
        const { res, err } = await query({ inputs: prompt });
        if (err) {
          console.log(err);
          setError(err);
          return;
        }
        return URL.createObjectURL(res);
      });
      const images = await Promise.all(imagePromises);
      setResult(images);
      setLoading(false);
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h1>Generate Comic</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="text1" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text1}
              onChange={(e) => setText1(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text2" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text3" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text3}
              onChange={(e) => setText3(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text4" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text4}
              onChange={(e) => setText4(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text5" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text5}
              onChange={(e) => setText5(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text6" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text6}
              onChange={(e) => setText6(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text7" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text7}
              onChange={(e) => setText7(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text8" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text8}
              onChange={(e) => setText8(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text9" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text9}
              onChange={(e) => setText9(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="text10" className="my-2">
            <Form.Control
              className="myTextInput"
              type="text"
              placeholder="Enter text"
              value={text10}
              onChange={(e) => setText10(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="generate-button">
            Generate Comic
          </Button>
        </Form>
      </Col>
      <Col md={9} className="comic-div">
        {loading ? (
          <Loader />
        ) : (
          // error !== null ? (
          //   <h2
          //     style={{
          //       color: "white",
          //       marginTop: "5px",
          //       marginLeft: "5px",
          //     }}
          //   >
          //     🚧 {error} 🚧
          //   </h2>
          // ) :
          <>
            {result.length === 0 && (
              <h2
                style={{
                  color: "white",
                  marginTop: "5px",
                  marginLeft: "5px",
                }}
              >
                Hi👋 enter your text to generate a comic strip 💭📚😁
              </h2>
            )}
            {result.length !== 0 && (
              //   <Container style={{ display: "flex", flexWrap: "wrap" }}>
              <>
                {result.map((imageUrl, index) => (
                  <Row>
                    <Col md={9} style={{ display: "flex", flexWrap: "wrap" }}>
                      <Image
                        key={imageUrl}
                        src={imageUrl}
                        alt={`Comic Panel ${index + 1}`}
                        style={{ margin: "2px", color: "white", width: "100%" }}
                      />
                    </Col>
                  </Row>
                ))}
              </>
              //   </Container>
            )}
          </>
        )}
      </Col>
    </Row>
  );
};

export default HomeScreen;

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaUser, FaUserTie, FaUserFriends } from "react-icons/fa";
import Button from "../button/Button";
import "./Features.css";

function Features() {
  const features = [
    {
      icon: <FaUser className="fs-5"/>,
      title: "Employee",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo unde expedita accusamus vero pariatur?",
    },
    {
      icon: <FaUserTie className="fs-5"/>,
      title: "Manager",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo unde expedita accusamus vero pariatur?",
    },
    {
      icon: <FaUserFriends className="fs-5"/>,
      title: "Client",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo unde expedita accusamus vero pariatur?",
    },
    
  ];

  return (
    <div className="mt-4">
      <h2 className="mb-4 fs-6 fw-bold">Choose Features</h2>
      {features.map((feature, index) => (
        <Card key={index} className="my-2 p-2 rounded-3 mb-4 d-flex">
          <Card.Body className="d-flex flex-column flex-grow-1">
            <Row className="align-items-center">
              <Col xs={12} md={8} className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  {feature.icon}
                  <Card.Title className="ms-3 fs-6 fw-semibold">{feature.title}</Card.Title>
                </div>
              </Col>
              <Col xs={12} md={4} className="text-md-end text-center mt-2 mt-md-0">
                {}
              </Col>
            </Row>
            <Card.Text className="mt-2">{feature.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between flex-column flex-md-row">
            <div className="w-100 text-md-end">
              <Button
                label="Add Module"
                variant="outline-primary"
                checkbox={true}
              />
            </div>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default Features;

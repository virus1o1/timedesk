import React from "react";
import { Card } from "react-bootstrap";
import { FaUser, FaUserTie, FaUserFriends } from "react-icons/fa";
import Button from "./Button";
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
    {
      icon: <FaUserFriends className="fs-5"/>,
      title: "Client",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam nemo unde expedita accusamus vero pariatur?",
    },
    {
      icon: <FaUserFriends className="fs-5"/>,
      title: "Client",
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
        <Card key={index} className="my-2 p-2 rounded-3 mb-4">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div className="w-75">
              <div className="d-flex justify-content-start">
                {feature.icon}
                <Card.Title className="ms-3 fs-6 fw-semibold">{feature.title}</Card.Title>
              </div>
              <Card.Text>{feature.description}</Card.Text>
            </div>

            <div>
              <Button
                label="Add Module"
                variant="outline-primary"
                checkbox={true}
              />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Features;

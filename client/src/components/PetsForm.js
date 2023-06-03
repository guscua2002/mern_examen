import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/Form.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { createPet } from "../services/services";
import { correctMessage } from "../utils/AlertMessages";
import { ValidatorForm } from "../services/ValidatorForm";
import { HandleError } from "../services/HandleError";
import { petsSchema } from "../utils/ValidaForm";

const PetsForm = () => {
  const [petname, setPetName] = useState("");
  const [pettype, setPetType] = useState("");
  const [petdescription, setPetDescription] = useState("");
  const [skillone, setSkillone] = useState("");
  const [skilltwo, setSkilltwo] = useState("");
  const [skillthree, setSkillthree] = useState("");
  
 

  const navigate = useNavigate();

  const infoPet = {
    petname,
    pettype,
    petdescription,
    skillone,
    skilltwo,
    skillthree,
  };

  const validaForm = (e) => {
    e.preventDefault();
    ValidatorForm(petsSchema, infoPet, onSubmitHandler);
  };

  const onSubmitHandler = async () => {
    try {
      const data = await createPet(infoPet);
      console.log(data);

      correctMessage();
      setPetName("");
      setPetType("");
      setPetDescription("");
      setSkillone("");
      setSkilltwo("");
      setSkillthree("");
      navigate("/searchAllPets")
    } catch (error) {
      HandleError(error);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <div>
        <p className={styles.title}>Pet Shelter</p>
        <h3>Know a pet needing a Home?</h3>
      </div>
      <Col md={5}>
        <Form className={styles.formView}>
          <Form.Group
            className="mb-3 text-md-start"
            controlId="name"
            as={Col}
            md="12"
          >
            <Form.Label>Pet Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rocky"
              onChange={(e) => setPetName(e.target.value)}
              value={petname}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-md-start" controlId="email">
            <Form.Label>Pet Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Boxer"
              onChange={(e) => setPetType(e.target.value)}
              value={pettype}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-md-start" controlId="email">
            <Form.Label>Pet Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="The Champion"
              onChange={(e) => setPetDescription(e.target.value)}
              value={petdescription}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Form onSubmit={validaForm} className={styles.formView}>
        <Form.Group className="mb-3 text-md-start" controlId="email">
            <Form.Label>Skill 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="fast"
              onChange={(e) => setSkillone(e.target.value)}
              value={skillone}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-md-start" controlId="email">
            <Form.Label>Skill 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="strong"
              onChange={(e) => setSkilltwo(e.target.value)}
              value={skilltwo}
            />
          </Form.Group>
          <Form.Group className="mb-3 text-md-start" controlId="email">
            <Form.Label>Skill 3</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill"
              onChange={(e) => setSkillthree(e.target.value)}
              value={skillthree}
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit">
           add pet
          </Button>
          <div>
            <Button variant="link" onClick={() => navigate(-1)}>
              Home
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default PetsForm;

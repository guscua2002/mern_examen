import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/Form.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import { updatePet, getOnePet } from "../services/services";
import { updateMessage } from "../utils/AlertMessages";
import { petsSchema } from "../utils/ValidaForm";
import { ValidatorForm } from "../services/ValidatorForm";
import { HandleError } from "../services/HandleError";


const UpdatePet = () => {
  const { id } = useParams();

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

  const findOnePet = async () => {
    try {
      const data = await getOnePet(id);
      const {
        petname: name,
        pettype: type,
        petdescription: description,
        skillone:skill1,
        skilltwo:skill2,
        skillthree:skill3,
      } = data.data.user;

      setPetName(name);
      setPetType(type);
      setPetDescription(description);
      setSkillone(skill1);
      setSkilltwo(skill2);
      setSkillthree(skill3);
    } catch (error) {
      HandleError(error);
    }
  };

  useEffect(() => {
    findOnePet();
  }, []);



  const validaForm = (e) => {
    e.preventDefault();
    ValidatorForm(petsSchema, infoPet, update);
  };

  const update = async () => {
    try {
      const data = await updatePet(id, infoPet);
      console.log(data)
      updateMessage();
      navigate(-1);
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
           Update pet
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

export default UpdatePet;

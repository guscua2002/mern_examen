import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import styles from "../styles/ViewDetails.module.css";
import { getOnePet, updatePet,deletePet } from "../services/services";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/Col";
import { HandleError } from "../services/HandleError";
import swal from "sweetalert";


const ViewDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const navigate = useNavigate();

  // recupera registro con id y lo muestra en pantalla

  const findOnePet = async () => {
    try {
      const data = await getOnePet(id);
      setPet(data.data.user);
    } catch (error) {
      HandleError(error);
    }
  };

  useEffect(() => {
    findOnePet();
  }, []);


  // pregunta si se desea eliminar y si es si envia a la funcion grabar
  const alerta = (id) => {
    swal({
      title: "Adopcion?",
      text: "Estas seguro de Adoptar",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        erase(id);
      }
    });
  };

  // funcion que elimina un resgitro y emite mensaje de eliminacion
  const erase = async (id) => {
    try {
      const data = await deletePet(id);
      console.log(data);
      swal({ text: pet.petname + " " + "ha sido adoptado/a con éxito", icon: "success" });
      navigate("/searchAllPets")
    } catch (error) {
      HandleError(error);
    }
  };


  //------------------------------------------------------------------//
  const update = async () => {
    let cont = 0;
    let likesTemp = ({});
    console.log(pet.likes)
    cont = pet.likes + 1;
    likesTemp = { likes: cont };
    console.log(likesTemp)

    try {
      const data = await updatePet(id, likesTemp);
      console.log(data);
      findOnePet();
    } catch (error) {
      HandleError(error);
    }
  };

  //----------------------------------------------------------------------//
  return (
    pet && (
      <Row className="justify-content-md-center">
        <div>
          <h1>Pet Shelter</h1>
          <h3>Details about: {pet.petname}</h3>
          <div className={styles.headerbutton}>
            <button onClick={() => alerta(id)} type="button" class="btn btn-danger">
              Adopt {pet.petname}
            </button>
            <Button variant="link" onClick={() => navigate("/searchAllPets")}>
              Back Home
            </Button>
          </div>
        </div>
        <Card style={{ width: "30rem" }} className={styles.card}>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title className={styles.textBody}>Pet Type:{pet.pettype}</Card.Title>
                <Card.Text className={styles.textBody}>Description:{pet.petdescription}</Card.Text>
                <Card.Text className={styles.textBody}>skills:{pet.skillone}</Card.Text>
                <Card.Text className={styles.textBody}> {pet.skilltwo}</Card.Text>
                <Card.Text className={styles.textBody}> {pet.skillthree}</Card.Text>
              </Card.Body>
              <Card.Body className="text-md-center"></Card.Body>
            </Col>
            <Col></Col>
          </Row>
        </Card>
        <div>
           <button onClick={() => update()} type="button" class="btn btn-success">Likes {pet.petname}</button>
           <p className={styles.likesPet}>{pet.likes}</p>
        </div>
      </Row>
    )
  );
};

export default ViewDetails;

import React, { useEffect, useState } from "react";
import { getAllPets } from "../services/services";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import styles from "../styles/Details.module.css";
import { useNavigate, Link } from "react-router-dom";
import { HandleError } from "../services/HandleError";

const SearchAllPets = () => {
  const navigate = useNavigate();
  const [totalPets, setTotalPets] = useState([]);

  

  // la primera vez carga todos los registros
  const search = async () => {
    try {
      const data = await getAllPets();

      setTotalPets(data.data.users);
    } catch (error) {
      HandleError(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  
  return (
    <Row>
       <Button variant="link" onClick={() => navigate("/petsform")}>
              Add pet to the shelter
            </Button>
      <Table
        striped
        bordered
        hover
        variant="grey"
        className={styles.tableBorder}
      >
        <thead className="text-md-center">
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {totalPets?.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.petname}</td>
                <td>{item.pettype}</td>
                <td>{item.petdescription}</td>
                <td className={styles.btn}>
                  <td>
                    <Link to={`/viewdetails/${item._id}`}>
                      <Button variant="link" >Details Pet</Button>
                    </Link>
                    <Link to={`/UpdatePet/${item._id}`}>
                      <Button variant="link" >Edit Pet</Button>
                    </Link>
                  </td>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
     </Row>
  );
};

export default SearchAllPets;

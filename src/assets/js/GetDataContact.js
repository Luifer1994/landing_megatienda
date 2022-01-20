import axios from "axios";
const urlApi = process.env.VUE_APP_URL_API;

async function getCoutries() {
  try {
    const res = await axios.post(urlApi + "paises/list");
    return res.data.data;
  } catch (error) {
    Promise.resolve();
  }
}

async function getDeparment(country) {
  const content = {};
  content.id_pais = country;
  try {
    const res = await axios.post(
      urlApi + "departamentos/ListByCountrySiesa",
      content
    );
    return res.data.data;
  } catch (error) {
    Promise.resolve();
  }
}

async function getCities(country, deparment) {
  const content = {};
  content.id_pais = country;
  content.id_departamento = deparment;
  try {
    const res = await axios.post(
      urlApi + "municipios/ListByMunicipalityAndCountry",
      content
    );
    return res.data.data;
  } catch (error) {
    Promise.resolve();
  }
}


async function getNeighborhood(country, deparment, city) {
  const content = {};
  content.id_pais = country;
  content.id_departamento = deparment;
  content.id_ciudad = city;
  try {
    const res = await axios.post(
      urlApi + "barrios/ListNeighborhoodByCitiesLocal",
      content
    );
    return res.data.data;
  } catch (error) {
    Promise.resolve();
  }
}

export default { getCoutries, getDeparment, getCities, getNeighborhood };

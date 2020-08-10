import React, { Component } from "react";

class Lista extends Component {
  render () {
    return (
      <div class="general">

    
      <table border="3" align="center">
      <tr bgcolor="#c3c3c3">
        <th>Nombre</th>
        <th>Edad</th>
        <th>Genero</th>
    <th>Total a pagar</th>
    <th>Fecha de mensualidad</th>
    <th>Acciones</th>
  </tr>
  <tr bgcolor="#dddddd">
    <td>Dogo Gimenez</td>
    <td>40</td>
    <td>Masculino</td>
    <td>200.000</td>
    <td>2018-02</td>
    <td><a href="">ver</a></td>
  </tr>
  <tr>
    <td>Carolina Betancur</td>
    <td>38</td>
    <td>Femenino</td>
    <td>1´500.000</td>
    <td>2019-10</td>
    <td><a href="">ver</a></td>
  </tr>
  <tr bgcolor="#dddddd">
    <td>Armando Pinto</td>
    <td>41</td>
    <td>Masculino</td>
    <td>700.000</td>
    <td>2020-01</td>
    <td><a href="">ver</a></td>
  </tr>
  <tr >
    <td>Valerie Venedeti</td>
    <td>25</td>
    <td>Femenino</td>
    <td>900.000</td>
    <td>2020-01</td>
    <td><a href="">ver</a></td>
  </tr>

  <tr bgcolor="#dddddd">
    <td>Carlos</td>
    <td>30</td>
    <td>Masculino</td>
    <td>2´300.900</td>
    <td>2020-01</td>
    <td><a href="">ver</a></td>
  </tr>
</table>
     </div>
     
    );
  }
  
}
export default Lista;
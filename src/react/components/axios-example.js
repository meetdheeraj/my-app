import React from 'react';
import { Link } from 'react-router-dom'

export default class AxiosComponent extends React.Component {

  render() {
    return (
      <main>
        <ul>
          <li><Link to='/axiosget'>Axios-GET</Link></li>
          <li><Link to='/AxiosPost'>Axios-POST</Link></li>
          <li><Link to='/AxiosDelete'>Axios-DELETE</Link></li>
        </ul>
      </main>
    )
  }
}

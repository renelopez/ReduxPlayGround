"use strict";
import React,{PropTypes} from 'react';
import { Link } from 'react-router';
//
const PositionList = ({ list }) => {
  let listToRender = list.map((item) => {
    return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.skills.map((skill)=>{
            return <span className="label label-primary"> {skill} </span>;
          })}</td>
          <td><Link to={'position/'+item.id} className="btn btn-default">Go to Details</Link></td>
          <td><Link to={'position/edit/'+item.id} className="btn btn-default">Edit Details</Link></td>

        </tr>)
  });

  return (
      <div className="container-fluid">
        <Link to='/position/create' className="btn btn-success pull-right">Add new position</Link>
        <table className='table table-striped table-bordered'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Skills</th>
          </tr>
          </thead>
          <tbody>
          {listToRender}
          </tbody>
        </table>
      </div>
  );
};

PositionList.propTypes={
  list:PropTypes.array.isRequired
};

export default PositionList;




/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React,{PropTypes} from 'react';
import { Link } from 'react-router';

const FeedbackList = ({ list }) => {
  let listToRender = list.map((item) => {
    return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.candidate}</td>
          <td>{item.position}</td>
          <td>{item.recruiter}</td>
          <td>{item.reviewer}</td>
          <td>{item.score}</td>
          <td>{item.creationDate}</td>
          <td><Link to={'feedbacks/'+item.id} className="btn btn-default">Go to Details</Link></td>
          <td><Link to={'feedbacks/edit/'+item.id} className="btn btn-default">Edit Details</Link></td>

        </tr>)
  });

  return (
      <div className="container-fluid">
        <Link to='/feedbacks/create' className="btn btn-success pull-right">Add new feedback</Link>
        <table className='table table-striped table-bordered'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Candidate</th>
            <th>Position</th>
            <th>Recruiter</th>
            <th>Reviewer</th>
            <th>Score</th>
            <th>Creation Date</th>
          </tr>
          </thead>
          <tbody>
          {listToRender}
          </tbody>
        </table>
      </div>
  );
};

FeedbackList.propTypes={
  list:PropTypes.array.isRequired
};

export default FeedbackList;




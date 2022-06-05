import './not_found.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="wrapper">
        <h1>PAGE NOT FOUND =(</h1>
        <div className="linkPara">
          <p className="">Navigate back</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";


// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry']

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
// <div>
//     <h1>List of fruits</h1>
//     <ul>
//       { fruits.map((item) => (
//         <li>{ item }</li>
//       )) }
//     </ul>
//  </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const tick = () => {
//   root.render(
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// };

// setInterval(tick, 1000);

// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <table>
//     <thead>
//       <tr>
//         <th>Company</th>
//         <th>Contact</th>
//         <th>Country</th>
//       </tr>
//     </thead>
//     <tbody>
//       {students.map(student => (
//         <tr key={student.id}>
//           <td>{student.company}</td>
//           <td>{student.contact}</td>
//           <td>{student.country}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  </div>,
);

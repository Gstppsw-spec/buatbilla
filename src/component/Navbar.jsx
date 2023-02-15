// import React from 'react'
import "../styles/navbar.css";

// export default function Navbar() {
//   return (
//     <div>
//         <nav>
//             <ul>
//                 <li className='link'>joker</li>
//                 <li className='link'>clover</li>
//                 <li className='link'>heart</li>
//             </ul>
//         </nav>
//     </div>
//   )
// }

import React, { useState } from "react";
import Modal from "react-modal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState("+6282275779187");
  const [message, setMessage] = useState("Hai Vanny");

  const handleClick = () => {
    window.location.href = `https://wa.me/${number}?text=Hallo, ayok kita sleepcall!&`;
  };

  return (
    <div>
      <img
        src={"https://www.gambaranimasi.org/data/media/373/animasi-bergerak-hati-0243.gif"}
        style={{ width: "200px", height: "200px", position: "relative" }}
      />
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
      <img
        src={"https://www.gambaranimasi.org/data/media/373/animasi-bergerak-hati-0243.gif"}
        style={{ width: "200px", height: "200px", position: "relative" }}
      />
        <p>Modal content goes here</p>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
        <button onClick={handleClick}>Kirim Pesan via WhatsApp</button>
      </Modal>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import './Modal.css';

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShowModal(true)}>Open Modal</button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h1>Modal Title</h1>
//             <p>Modal content goes here</p>
//             <div className="buttonModal">
//               <button onClick={() => setShowModal(false)}>Tutup</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;










// import { useState } from 'react';

// function Navbar() {
//   const [number, setNumber] = useState("+6282275779187")
//   const [message, setMessage] = useState("Hai Vanny")

//   const handleClick = () => {
//     window.location.href = `https://wa.me/${number}?text=Hallo, Apa kabar?&`
//   }

//   // const handleClick = () => {
//   //   window.location.href = `https://wa.me/${number}?call&`
//   // }

//   return (
//     <div>
//       <button onClick={handleClick}>Kirim Pesan via WhatsApp</button>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "../styles/popup.css";
import unyu from "../image/unyu.gif";
import unyudua from "../image/unyu-dua.gif";
import unyutiga from "../image/unyu-tiga.gif";
import unyuempat from "../image/unyu-empat.gif";
import unyulima from "../image/unyu-lima.gif";
import unyuenam from "../image/unyu-tujuh.gif";

function PopUp() {
  const [showFirstPopup, setShowFirstPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showThirdPopup, setShowThirdPopup] = useState(false);
  const [showEmpat, setShowEmpat] = useState(false);
  const [showLima, setShowLima] = useState(false);
  const [showEnam, setShowEnam] = useState(false);
  const [number, setNumber] = useState("+6282269212414");

  const toggleFirstPopup = () => {
    setShowFirstPopup(!showFirstPopup);
  };

  const toggleSecondPopup = () => {
    if (showFirstPopup) {
      setShowFirstPopup(false);
    }
    setShowSecondPopup(!showSecondPopup);
  };

  const toggleThirdPopup = () => {
    if (showSecondPopup) {
      setShowSecondPopup(false);
    } else if (showEmpat) {
      setShowEmpat(false);
    }
    setShowThirdPopup(!showThirdPopup);
  };

  const Empat = () => {
    if (showFirstPopup) {
      setShowFirstPopup(false);
    }
    setShowEmpat(!showEmpat);
  };

  const Lima = () => {
    if (showSecondPopup) {
      setShowSecondPopup(false);
    } else if (showEmpat) {
      setShowEmpat(false);
    }
    setShowLima(!showLima);
  };

  const Enam = () => {
    setShowEnam(!showEnam);
  };
  const Kirim = () => {
    window.location.href = `https://wa.me/${number}?text=Ayokkk kita sleepcall, aku telpon yaa!&`;
  };

  return (
    <div className="container">
      <div className="centering-div">
        <img src={unyu} alt="" width="150" className="unyu-gif" />
        <button onClick={toggleFirstPopup} className="buttonfirst">
          Hai, teken deh coba
        </button>
      </div>
      <div>
        {showFirstPopup && (
          <div className="popup">
            <div className="popup-content">
              <img src={unyudua} alt="" width="200" className="unyu-gif-dua" />
              <h2>Oke karna kamu udah neken, kamu harus tanggung jawab ya!</h2>
              <p>
                Sekarang, kamu pilih tombol kiri atau kanan ? teken ya pilihan
                kamu!
              </p>
              <button className="popup-button" onClick={toggleSecondPopup}>
                Kiri
              </button>
              <button className="popup-button" onClick={Empat}>
                Kanan
              </button>
              {/* {showSecondPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h2>Ini adalah Pop Up Kedua</h2>
                  <p>Ini adalah konten dari pop up kedua</p>
                  <button className="popup-button" onClick={toggleThirdPopup}>
                    Show Third Popup
                  </button>
                  <button className="popup-button" onClick={toggleSecondPopup}>
                    Close
                  </button>
                  {showThirdPopup && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>Ini adalah Pop Up Ketiga</h2>
                        <p>Ini adalah konten dari pop up ketiga</p>
                        <button
                          className="popup-button"
                          onClick={toggleThirdPopup}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )} */}
            </div>
          </div>
        )}

        {showSecondPopup && (
          <div className="popup">
            <div className="popup-content">
              <img src={unyutiga} alt="" width="200" className="unyu-gif-dua" />
              <h2>Kamu pilih kiri? Yakin?</h2>
              <p>
                Oke, karna kamu pilih kiri. Kita sleepcall ya malam ini hehe
              </p>
              <button className="popup-button" onClick={toggleThirdPopup}>
                Okey
              </button>
              <button className="popup-button" onClick={Lima}>
                Pilih kanan aja deh
              </button>
            </div>
          </div>
        )}

        {showThirdPopup && (
          <div className="popup">
            <div className="popup-content">
              <img src={unyulima} alt="" width="200" className="unyu-gif-dua" />
              <h2>Yeayyyy</h2>
              <p>Nanti kamu telpon aku jam 21.00 WIB yaaa!</p>
              <button className="popup-button" onClick={Kirim}>
                Call kesini yahhhh
              </button>
            </div>
          </div>
        )}

        {showEmpat && (
          <div className="popup">
            <div className="popup-content">
              <img src={unyutiga} alt="" width="200" className="unyu-gif-dua" />
              <h2>Kamu pilih kanan? Yakin?</h2>
              <p>
                {" "}
                Oke, karna kamu pilih kanan. Kita sleepcall ya malam ini hehe
              </p>
              <button className="popup-button" onClick={toggleThirdPopup}>
                Okey
              </button>
              <button className="popup-button" onClick={Lima}>
                Pilih kiri aja dehh
              </button>
            </div>
          </div>
        )}

        {showLima && (
          <div className="popup">
            <div className="popup-content">
              <img src={unyulima} alt="" width="200" className="unyu-gif-dua" />
              <h2>Labil ya kamuuu</h2>
              <p>Sama aja tetep sleepcall, tapi lebih lama hehe...</p>
              <button className="popup-button" onClick={Kirim}>
                Hehe, Sleepcallnya kesini yaaa
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUp;

////dengan durasi waktu

// function Popup(props) {
//   const [isVisible, setIsVisible] = useState(false);

//   const showPopup = () => {
//     setIsVisible(true);
//     setTimeout(() => {
//       setIsVisible(false);
//     }, 5000);
//   };

//   return (
//     <div>
//       <button onClick={showPopup}>Tampilkan Popup</button>
//       {isVisible && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close-button" onClick={() => setIsVisible(false)}>
//               &times;
//             </span>
//             <p>Ini adalah isi dari popup</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Popup;

import React from "react";
import "./styles/styles.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="mainText">
            {/* <h1> */}
            Iam a Proffessional UI/UX Designer and web developer, consectetur on
            adipisi elita, sed do eiusmod tempar incididunt ut labare er dolore
            magna aliqua. Ut enim adminim veniam quis nostrud.
            {/* </h1> */}
            {/* <div className="line"></div> */}
          </div>
          {/* <div classame="break"></div> */}
          <div className=" subText">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspi unde omnis iste natus error sit
            voluptatem accusantium doloremque lauda ntium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia
            voluptas sit aspernatur aut odit aut fugit,
          </div>
          {/* <div className="line"></div> */}
          <div className="address">
            <div className="address1">
              <div className="text1">Phone</div>
              <div className="text2">987-123-6547</div>
            </div>
            <div className="address2">
              <div className="text1">Email</div>
              <div className="text2">browny@info.com</div>
            </div>
            <div className="address3">
              <div className="text1">Website</div>
              <div className="text2">www.brownsine.com</div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <img className="image" src="images/cent.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

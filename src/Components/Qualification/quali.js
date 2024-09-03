import React from 'react'
import './quali.css';
import Card from './Card1.js'
// import Footer from '../Footer/Footer.js';

import { useInView } from 'react-intersection-observer';
import 'animate.css';

function Quali() {


  // Array to store education data
  const educationData = [
    {
      year: '2019',
      title: 'SSLC',
      institution: 'S.D.P.H.S DHARMATHADKA',
      score: 'Scored 88%',
    },
    {
      year: '2019-2021',
      title: 'PUC',
      institution: 'PARIJNAN PU COLLEGE SOMESHWAR',
      score: 'Scored 83% (PCMC)',
    },
    {
      year: '2021-2025',
      title: 'B.E',
      institution: 'CANARA ENGINEERING COLLEGE MANGALORE',
      score: 'Scored 8 CGPA',
    },
  ];

  return (
    // scroll view
    
      <div className='quali_box motion'>
        <main className='row'>
          {/* ----education section---- */}
          <section className='col'>
            <header className='title'>
              <h2>EDUCATION</h2>
            </header>

            <div className='contents'>
              {/* Render Card components dynamically */}
              {
              educationData.map((item) => (<Card educationData={item} />))
                
              }
            </div>
          </section>
        </main>
      </div>
    
  );
}

export default Quali;



// function quali() {
//   return (
//     <>
//       <div className='quali_box'>

//         <main className='row'>
//             {/* ----education section---- */}
//             <section className='col'>
//                 <header className='title'>
//                     <h2>EDUCATION</h2>
//                 </header>

//                 <div className='contents'>

//                     <div className='box'>
//                         <h4>2019</h4>
//                         <h3>SSLC</h3>
//                         <p>S.D.P.H.S DHARMATHADKA</p>
//                         <p>Scored 88%</p>

//                     </div>

//                     <div className='box'>
//                         <h4>2019-2021</h4>
//                         <h3>PUC</h3>
//                         <p>PARIJNAN PU COLLEGE SOMESHWAR</p>
//                         <p>Scored 83% (PCMC)</p>

//                     </div>

//                     <div className='box'>
//                         <h4>currently pursuing</h4>
//                         <h3>COLLEGE</h3>
//                         <p>CANARA ENGINEERING COLLEGE MANGALORE</p>
//                         <p>Scored 8.2 SGPA in till now..</p>

//                     </div>


//                 </div>
//                 </section>

//                  {/* ----education section---- */}

//          <section className='col'>
//                 <header className='title'>
//                     <h2>EXPERIENCE</h2>
//                 </header>

//                 <div className='contents'>

//                     <div className='box'>
//                         <h4>2022</h4>
//                         <h3>WEB-DESIGN</h3>
//                         <p>lorem the color full enjoyoing the life of every world on the beauty of nature and also the college life was very nice and weekned holidays etc</p>

//                     </div>

//                     <div className='box'>
//                         <h4>2023</h4>
//                         <h3>FRONTEND DEVELOPER</h3>
//                         <p>lorem lso tned holidays etc</p>

//                     </div>

//                     <div className='box'>
//                         <h3>FULLSTACK WEB-DEVELOPER</h3>
//                         <p>lf natuery nice and weekned holidays etc</p>

//                     </div>


//                 </div>
//                 </section>



//         </main>
//         <Footer />
//       </div>
//       </>

//   );
// }

// export default quali;

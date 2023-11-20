import React from 'react'
import './quali.css';

function quali() {
  return (
    <>
      <div className='quali_box'>

        <main className='row'>
            {/* ----education section---- */}
            <section className='col'>
                <header className='title'>
                    <h2>EDUCATION</h2>
                </header>

                <div className='contents'>

                    <div className='box'>
                        <h4>2019</h4>
                        <h3>SSLC</h3>
                        <p>S.D.P.H.S DHARMATHADKA</p>
                        <p>Scored 88%</p>

                    </div>

                    <div className='box'>
                        <h4>2019-2021</h4>
                        <h3>PUC</h3>
                        <p>PARIJNAN PU COLLEGE SOMESHWAR</p>
                        <p>Scored 83% (PCMC)</p>

                    </div>

                    <div className='box'>
                        <h4>currently pursuing</h4>
                        <h3>COLLEGE</h3>
                        <p>CANARA ENGINEERING COLLEGE MANGALORE</p>
                        <p>Scored 8.2 SGPA in till now..</p>

                    </div>


                </div>
                </section>

                 {/* ----education section---- */}

         <section className='col'>
                <header className='title'>
                    <h2>EXPERIENCE</h2>
                </header>

                <div className='contents'>

                    <div className='box'>
                        <h4>2022</h4>
                        <h3>WEB-DESIGN</h3>
                        <p>lorem the color full enjoyoing the life of every world on the beauty of nature and also the college life was very nice and weekned holidays etc</p>

                    </div>

                    <div className='box'>
                        <h4>2023</h4>
                        <h3>FRONTEND DEVELOPER</h3>
                        <p>lorem lso tned holidays etc</p>

                    </div>

                    <div className='box'>
                        <h3>FULLSTACK WEB-DEVELOPER</h3>
                        <p>lf natuery nice and weekned holidays etc</p>

                    </div>


                </div>
                </section>



        </main>
      </div>
      </>

  );
}

export default quali;

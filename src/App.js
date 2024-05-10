import SectionT from './componants/SectionT'
import './App.css';
import SectionF from './componants/SectionF';
import SectionTh from './componants/SectionTh';
import SectionFo from './componants/SectionFo';
import SectionLa from './componants/SectionLa';
import SectionFi from './componants/SectionFi';
import SectionSi from './componants/SectionSi';
import SectionSe from './componants/SectionSe';
import SectionEi from './componants/SectionEi'
import SectionN from './componants/SectionN';
import SectionTe from './componants/SectionTe';

function App() {
 
  return (
    <div className="App">
      <section className='section-1'>
         <SectionF/>
      </section>


      <section className='section-2'>
         <SectionT/>
      </section>

      
      <section className='section-3' style={{ marginBottom: "20px" }}>
          <SectionTh/>
      </section>

       <section className='section-4' style={{ marginTop: "30px", marginBottom: "30px" }}>
           <SectionFo/>
       </section>
        

       <section className='section-5'>
         <SectionFi/>
      </section>
       

       <section className='section-6'>
        <SectionSi/>
       </section>
        

       <section className='section-7'>
        <SectionSe/>
       </section>

       
       <section className='section-5'>
         <SectionEi/>
      </section>  
      

      <section className='section-3'>
        <SectionN/>
      </section>


      <section className='section-10'>
        <SectionTe/>
      </section>

       <section className='section-l' style={{ marginTop: "30px" }}>
            <SectionLa/>
      </section>
    </div>
  );
}

export default App; 
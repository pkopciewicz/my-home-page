import './App.css';
import baner from './Banner.gif';
import HomePage from './HomePage.svg';
import Email from './Email.svg';
import Flag_PL from './Flag_PL.svg';
import Flag_GB from './Flag_GB.svg';

function MyApp() {
  return (
    <>
      <section className='myApp'>
        <img className='myImage' src={baner} alt='Banner'></img>
      </section>

      <section className='Top'>
        <div className='container'>
          <img className='HomePage' src={HomePage} alt='Main Page'></img>
          <div className='fakeBorder'>
            <div className='myMenuCell'>Introduction</div>
          </div>
          <div className='fakeBorder2'>
            <div className='myMenuCell'>Offer</div>
          </div>
          <div className='fakeBorder'>
            <div className='myMenuCell'>Gallery</div>
          </div>
          <div className='fakeBorder2'>
            <div className='myMenuCell'>Contact
              <img className='Email' src={Email} alt='Email'></img>
            </div>
          </div>
        </div>
        <div className='languageDropdownAnhor'>
          <div className='languageDropdownContent'>
            <img className='FlagSelection' src={Flag_PL} alt='Polski'></img>
            <img className='FlagSelection' src={Flag_GB} alt='English'></img>
          </div>
        </div>
        <div className='languageFakeBorder'>
          <div className='languageMenu'>
            <img className='Flag' src={Flag_GB} alt='English'></img>
          </div>
        </div>
      </section>

      <section className='Mid'>
        <div>
          <h1 className='myHeader'>Profesjonalne strony internetowe i rozwiązania webowe dla Twojego biznesu</h1>
          <div className='myDiv'>
            <p className='myParagraph'>Pomagamy małym i średnim firmom zaistnieć w sieci. Tworzymy nowoczesne, funkcjonalne i responsywne strony internetowe,
              które nie tylko dobrze wyglądają, ale realnie wspierają sprzedaż i rozwój Twojej marki. Każdy projekt dopasowujemy do
              potrzeb Twojego biznesu — od prostych stron wizytówek po rozbudowane serwisy i sklepy internetowe.</p>

            <p>Oferujemy kompleksowe rozwiązania webowe:</p>
            <ul>
              <li>projektowanie i tworzenie stron www,</li>
              <li>tworzenie sklepów internetowych (e-commerce),</li>
              <li>optymalizację SEO i pozycjonowanie,</li>
              <li>integracje z systemami zewnętrznymi,</li>
              <li>opiekę techniczną i aktualizacje.</li>
            </ul>
            <p>Stawiamy na przejrzystą komunikację, indywidualne podejście i nowoczesne technologie. Twoja strona to Twoja wizytówka
              — zadbajmy, by robiła świetne pierwsze wrażenie.</p>
          </div>
        </div>
        mid section
      </section>

      <section className='Bottom'>Bottom section</section>
    </>
  );
}

export default MyApp;
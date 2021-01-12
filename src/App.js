import './App.css';
import Slider from './components/Slider';
import SliderImg from './components/SliderImg';

/*  Application Top Level
    Shows slider component with a sample of 4 images.
*/

function App() {
  return (
    <div className="app">
      <h1>Instrument Slider</h1>
      <main
        className="main"
        style={{
          margin: '0 auto',
          width: '85%',
          paddingBottom: '100px'
        }}>
        <Slider
          intervalSeconds={10}
          transitionMs={500}>
          <SliderImg
            url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mount_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg/1280px-Mount_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg"
            label="Mount Hood" />
          <SliderImg
            url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mount_Adams_3503s.JPG/1920px-Mount_Adams_3503s.JPG"
            label="Mount Adams" />
          <SliderImg
            url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg/1920px-MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg"
            label="Mount St. Helens" />
          <SliderImg
            url="https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg"
            label="Mount Rainier / Tahoma" />    
        </Slider>
      </main>
    </div>
  );
}

export default App;

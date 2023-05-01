import './App.css';
import collection from './assets/images/index.json';

function getImageUrl(name: string, ext:string="svg") {
  return new URL(`./assets/images/${name}.${ext}`, import.meta.url).href;
}

let uniqueId:number = 0;
const IMAGES = collection.map(item => {
 return {"uniqueId":`${uniqueId++}`, "src": getImageUrl(item.name)};
})

function App() {
  const message: string = "Selection";
  return (
    <>
      <h1>Image Gallery</h1>
      <div>
        {
         IMAGES.map((image) => (
          <div key={image.uniqueId}>
            <a 
              key={image.uniqueId} href={`${image.src}`} target="_blank">
              <img key={image.uniqueId} src={image.src} className="logo" alt="img" />
            </a>
          </div>
          ))
        }
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
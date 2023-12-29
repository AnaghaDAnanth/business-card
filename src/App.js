import logo from './AnaghaDAnanth.jpg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-img" alt="logo" />
        </div>
        <div>
          <h2 className="App-name">
            Anagha D Ananth
          </h2>
          <p className="App-designation">
            Associate Developer
          </p>
          <div className="App-buttons">
            <button className="App-social-button">
              <i className="fas fa-envelope" style={{marginRight:'5px'}}></i> Email ID
            </button>
            <button className="App-social-button" style={{ color:"white", backgroundColor:"#0077B5"}} >
              <i className="fab fa-linkedin" style={{marginRight:'5px'}}></i> LinkedIn
            </button>
          </div>
          <h3 className="App-about"> About </h3>
          <p className="App-about-text">
            This is the about section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3 className="App-about"> Interests </h3>
          <p className="App-about-text">
            This is the interests section. I love coding, music and reading. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <footer className="App-footer">
          <button className="App-footer-button">
            <i className="fab fa-github"></i>
          </button>
          <button className="App-footer-button">
            <i className="fab fa-linkedin"></i>
          </button>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Layout fixedHeader>
          <Header style={{backgroundColor: 'transparent', zIndex: '1'}}className='header-color' title={<a href="/" style={{textDecoration:'none'}}><strong>Juri ilmjarv</strong></a>}>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
            <Main/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;

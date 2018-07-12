import React from 'react';
import BooksContainer from './containers/BooksContainer';

class App extends React.Component {
   render() {
      return (
         <div>
             <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">                    
                    Books
                </a>
            </nav>
            <div className="container">
                <BooksContainer />
            </div>
         </div>
      );
   }
}
export default App;
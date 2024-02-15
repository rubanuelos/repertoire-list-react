import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPiece from './components/AddPiece';
import Contact from './components/Contact';
import Header from './components/Header';
import PdfRender from './components/PdfRender';
import Pieces from './components/Pieces';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  const [showAddPiece, setShowAddPiece] = useState(false);
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const getPieces = async () => {
      const piecesFromServer = await fetchPieces();
      setPieces(piecesFromServer || []);
    };

    getPieces();
  }, [])

  // Fetch Pieces

  const fetchPieces = async () => {
    const res = await fetch('http://localhost:5000/pieces');
    const data = await res.json();

    return data;
  }

  // Fetch Piece

  // const fetchPiece = async (id) => {
  //   const res = await fetch(`http://localhost:5000/pieces/${id}`);
  //   const data = await res.json();

  //   return data;
  // }

  // Add Piece

  const addPiece = async (piece) => {
    const res = await fetch ('http://localhost:5000/pieces', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(piece)
    })

    const data = await res.json()

    setPieces([...pieces, data]);

  }

  // Delete Piece

  async function deletePiece(id) {
    try {
      await fetch(`http://localhost:5000/pieces/${id}`, {
        method: 'DELETE'
      })

    } catch (error) {
      console.error(error);
    }

    setPieces(pieces.filter((piece) => piece.id !== id));
  }

  return (
      <Router>
        <Navbar />
      <div className="App relative min-h-100vh pb-20 m-auto grid justify-items-stretch justify-self-center max-w-screen-sm">
          <Header onAdd={() => setShowAddPiece(!showAddPiece)}
            showAdd={showAddPiece} 
          />
          <Routes>
            <Route
            className="pieces" 
              path="/"
              element={
                <>
                  {showAddPiece && <AddPiece onAdd={addPiece} />}
                  {pieces.length > 0 ? (
                    <Pieces
                      pieces={pieces}
                      onDelete={deletePiece}
                    />
                  ) : (
                      'No Pieces Added yet'
                    )}
                </>
              }
            />
            <Route path="/about" element={<About/>}></Route>
            <Route path="/pdfrender" element={<PdfRender/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;

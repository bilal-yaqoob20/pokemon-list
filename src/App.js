import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const PokeminList = lazy(() => import('./components/pokemonList'))
const PokemonDetails = lazy(() => import('./components/pokemonDetails'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><PokeminList/></Suspense>} />
        <Route path="details/:index" element={<Suspense fallback={<div>Loading...</div>}><PokemonDetails/></Suspense>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

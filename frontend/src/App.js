import { BrowserRouter, Routes, Route } from "react-router-dom";
import Livros from "./view/gastos";
import add from "./view/add";
import update from "./view/update";
import nopage from "./view/nopage";
import "./style.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<gastos />} />
          <Route path="livros" element={<livros />} />
          <Route path="adicionar" element={<add />} />
          <Route path="atualizar/:id" element={<update />} />
          <Route path="*" element={<nopage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
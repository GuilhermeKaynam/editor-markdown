import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorMarkdown from './paginas/EditorMarkdown';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditorMarkdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
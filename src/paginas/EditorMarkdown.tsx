import React, { useState } from 'react';
import AreaEdicao from '../componentes/AreaEdicao';
import PreVisualizacao from '../componentes/PreVisualizacao';

function EditorMarkdown() {
  const [textoMarkdown, setTextoMarkdown] = useState<string>('');

  const atualizarTexto = (novoTexto: string) => {
    setTextoMarkdown(novoTexto);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Editor Markdown</h1>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AreaEdicao texto={textoMarkdown} aoMudar={atualizarTexto} />
        <PreVisualizacao conteudo={textoMarkdown} />
      </div>
    </div>
  );
}

export default EditorMarkdown;
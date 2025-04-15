import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PreVisualizacaoProps {
  conteudo: string;
}

function PreVisualizacao({ conteudo }: PreVisualizacaoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-h-[300px]">
      <div className="prose prose-slate max-w-none">
        <ReactMarkdown>
          {conteudo || 'A pré-visualização aparecerá aqui...'}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default PreVisualizacao;
import React from 'react';

interface AreaEdicaoProps {
  texto: string;
  aoMudar: (texto: string) => void;
}

function AreaEdicao({ texto, aoMudar }: AreaEdicaoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <textarea
        className="w-full h-[300px] p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={texto}
        onChange={(e) => aoMudar(e.target.value)}
        placeholder="Digite seu markdown aqui..."
      />
    </div>
  );
}

export default AreaEdicao;
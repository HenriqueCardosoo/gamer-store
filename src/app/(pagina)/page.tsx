'use client';
import ProdutoItem from '@/components/produto/ProdutoItem';
import UseProdutos from '@/data/hooks/useProdutos';

export default function Inicio() {
  const { produtos } = UseProdutos();
  return (
    <div className="grid grid-cols-4 gap-5 container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

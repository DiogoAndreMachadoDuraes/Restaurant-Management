<?php

namespace App\DAO;
use App\Models\Produto;

class Produto_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select(): array
    {
        $produto = $this->pdo
            ->query ('SELECT
                id_produto,
                nome,
                descricao,
                tipo,
                foto,
                preco
            From Produto;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $produto;
    }

    public function Insert (Produto $produto): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Produto values(
            null,
            :nome,
            :descricao,
            :tipo,
            :foto,
            :preco

        );');
        
        $statement->execute([
            'nome' => $produto ->getnome(),
            'descricao' => $produto->getdescricao(),
            'tipo' => $produto ->gettipo(),
            'foto' => $produto ->getfoto(),
            'preco' => $produto ->getpreco()
        ]);
    }

    public function Update (Produto $produto): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Produto set nome=:nome , descricao=:descricao , tipo=:tipo , foto=:foto , preco=:preco Where id_produto=:id_produto');
        $statement->execute([
            'id_produto' => $produto->getid_produto(),
            'nome' => $produto->getnome(),
            'descricao' => $produto->getdescricao(),
            'tipo' => $produto->gettipo(),
            'foto' => $produto->getfoto(),
            'preco' => $produto->getpreco()
        ]);
    }

    public function Delete (Produto $produto): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Produto WHERE id_produto = :id_produto');
       
        $statement->execute([
            'id_produto' => $produto -> getid_produto()
        ]);
    }   
}
?>
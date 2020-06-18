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
                quantidade,
                descricao,
                preco,
                foto
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
            :quantidade,
            :descricao,
            :preco,
            :foto

        );');
        
        $statement->execute([
            'nome' => $produto ->getnome(),
            'quantidade' => $produto ->getquantidade(),
            'descricao' => $produto->getdescricao(),
            'preco' => $produto ->getpreco(),
            'foto' => $produto ->getfoto()
        ]);
    }

    public function Update (Produto $produto): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Produto set nome=:nome , quantidade=:quantidade , descricao=:descricao , preco=:preco , foto=:foto Where id_produto=:id_produto');
        $statement->execute([
            'id_produto' => $produto->getid_produto(),
            'nome' => $produto->getnome(),
            'quantidade' => $produto->getquantidade(),
            'descricao' => $produto->getdescricao(),
            'preco' => $produto->getpreco(),
            'foto' => $produto->getfoto()
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
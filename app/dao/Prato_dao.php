<?php

namespace App\DAO;
use App\Models\Prato;

class Prato_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select(): array
    {
        $prato = $this->pdo
            ->query ('SELECT
                id_prato,
                nome,
                quantidade,
                descricao,
                preco
            From Prato;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $prato;
    }

    public function Insert (Prato $prato): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Prato values(
            :id_prato,
            :nome,
            :quantidade,
            :descricao,
            :preco

        );');
        
        $statement->execute([
            'id_prato' => $prato ->getid_prato(),
            'nome' => $prato ->getnome(),
            'quantidade' => $prato ->getquantidade(),
            'descricao' => $prato->getdescricao(),
            'preco' => $prato ->getpreco()
        ]);
    }

    public function Update (Prato $prato): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Prato set nome=:nome and quantidade=:quantidade and descricao=:descricao and preco=:preco Where id_prato=:id_prato');
        $statement->execute([
            'id_prato' => $prato->getid_prato(),
            'nome' => $prato->getnome(),
            'quantidade' => $prato->getquantidade(),
            'descricao' => $prato->getdescricao(),
            'preco' => $prato->getpreco(),
        ]);
    }

    public function Delete (int $id_prato): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Prato WHERE id_prato = :id_prato');
       
        $statement->execute([
            'id_prato' => $id_prato
        ]);
    }   
}
?>
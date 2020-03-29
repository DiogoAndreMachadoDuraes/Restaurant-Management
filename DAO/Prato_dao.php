<?php

namespace App\DAO;
use App\Models\PratoModel;
use App\DAO\ConnectionDB;

class Prato_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select(): array
    {
        $prato = $this->pdo
        ->query ('SELECT
        id_prato,
        nomeprato,
        quantidade,
        descricao,
        preco
    From prato;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $prato;
    }

    public function Insert (PratoModel $prato): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO prato values(
            :id_prato,
            :nomeprato,
            :quantidade,
            :descricao,
            :preco
        );');
        $statement->execute([
            'id_prato' => $id_prato->getId_prato(),
            'nomeprato' => $nomeprato->getNomeprato(),
            'quantidade' => $quantidade->getQuantidade(),
            'descricao' = $descricao->getDescricao(),
            'preco' = $preco->getPreco()
        ])
    }

    public function Update (PratoModel $prato): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
           :id_prato,
            :nomeprato,
            :quantidade,
            :descricao,
            :preco
        );');
        $statement->execute([
            'id_prato' => $id_prato->getId_prato(),
            'nomeprato' => $nomeprato->getNomeprato(),
            'quantidade' => $quantidade->getQuantidade(),
            'descricao' = $descricao->getDescricao(),
            'preco' = $preco->getPreco()
        ])
    }


    public function Delete (int $id_prato)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM prato WHERE id_prato = :id_prato');
       
        $statement->execute([
            'id_prato' => $id_prato ()
            ]);
    }
        
}

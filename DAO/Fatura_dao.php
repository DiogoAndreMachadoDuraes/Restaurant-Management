<?php

namespace App\DAO;
use App\Models\FaturaModel;
use App\DAO\ConnectionDB;

class Fatura_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $fatura = $this->pdo
        ->query ('SELECT
        id_fatura,
        iva,
        taxa
    From fatura;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $fatura;
    }
 
    public function Insert (FaturaModel $fatura): void
    { 
        $statement = $this->pdo
        ->prepare ('INSERT INTO fatura values(
            :id_fatura,
            :iva,
            :taxa
        );');
        $statement->execute([
            'id_fatura' => $id_fatura->getId_fatura(),
            'iva' => $tipo->getIva(),
            'taxa' = $descricao->getTaxa()
        ])
    }

    public function Update (FaturaModel $fatura): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO fatura values(
            :id_fatura,
            :iva,
            :taxa
        );');
        $statement->execute([
            'id_fatura' => $id_fatura->getId_fatura(),
            'iva' => $Iva->getIva(),
            'taxa' = $taxa->getTaxa()
        ])
    }


    public function Delete (int $id_fatura)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM fatura WHERE id_fatura = :id_fatura');
       
        $statement->execute([
            'id_fatura' => $id_fatura ()
            ]);
    }
        
}

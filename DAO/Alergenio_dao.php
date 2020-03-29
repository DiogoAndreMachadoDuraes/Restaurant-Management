<?php

namespace App\DAO;
use App\Models\AlergenioModel;
use App\DAO\ConnectionDB;

class Alergenio_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $alergenio = $this->pdo
        ->query ('SELECT
        id_alerge,
        tipo,
        descricao
    From alergenio;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $alergenio;
    }

    public function Insert (AlergenioModel $alergenio): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO alergenio values(
            :id_alerge,
            :tipo,
            :descricao
        );');
        $statement->execute([
            'id_alerge' => $id_alerge->getId_alerge(),
            'tipo' => $tipo->getTipo(),
            'descricao' = $descricao->getDescricao()
        ])
    }

    public function Update (AlergenioModel $alergenio): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
            :id_alerge,
            :tipo,
            :descricao
        );');
        $statement->execute([
            'id_alerge' => $id_alerge->getId_alerge(),
            'tipo' => $tipo->getTipo(),
            'descricao' = $descricao->getDescricao()
        ])
    }


    public function Delete (int $id_alerge)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM alergenio WHERE id_alerge = :id_alerge');
       
        $statement->execute([
            'id_alerge' => $id_alerge ()
            ]);
    }
        
}

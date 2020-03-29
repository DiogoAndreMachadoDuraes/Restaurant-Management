<?php

namespace App\DAO;
use App\Models\Info_nutricionalModel;
use App\DAO\ConnectionDB;

class Info_nutricional_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $info_nutricional = $this->pdo
        ->query ('SELECT
        id_nutri,
        tipo,
        quantidade_nutrientes,
        descricao
    From info_nutricional;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $info_nutricional;
    }

    public function Insert (Info_nutricionalModel $info_nutricional): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO info_nutricional values(
            :id_nutri,
            :tipo,
            :quantidade_nutrientes,
            :descricao
        );');
        $statement->execute([
            'id_nutri' => $id_nutri->getId_nutri(),
            'tipo' => $tipo->getTipo(),
            'quantidade_nutrientes' => $quantidade_nutrientes->getQuantidade_nutrientes(),
            'descricao' = $descricao->getDescricao()
        ])
    }

    public function Update (Info_nutricionalModel $info_nutricional): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
           :id_nutri,
            :tipo,
            :quantidade_nutrientes,
            :descricao
        );');
        $statement->execute([
            'id_nutri' => $id_nutri->getId_nutri(),
            'tipo' => $tipo->getTipo(),
            'quantidade_nutrientes' => $quantidade_nutrientes->getQuantidade_nutrientes(),
            'descricao' = $descricao->getDescricao()
        ])
    }


    public function Delete (int $id_nutri)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM info_nutricional WHERE id_nutri = :id_nutri');
       
        $statement->execute([
            'id_nutri' => $id_nutri ()
            ]);
    }
        
}

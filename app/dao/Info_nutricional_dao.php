<?php

namespace App\DAO;
use ConnectionDB;
use App\Models\Info_nutricional;

class Info_nutricional_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
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
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $info_nutricional;
    }

    public function Insert (Info_nutricional $info_nutricional): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO info_nutricional values(
            :id_nutri,
            :tipo,
            :quantidade_nutrientes,
            :descricao
        );');
        $statement->execute([
            'id_nutri' => $info_nutricional->getId_nutri(),
            'tipo' => $info_nutricional->getTipo(),
            'quantidade_nutrientes' => $info_nutricional->getQuantidade_nutrientes(),
            'descricao' => $info_nutricional->getDescricao()
        ]);
    }

    public function Update (Info_nutricional $info_nutricional): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
           :id_nutri,
            :tipo,
            :quantidade_nutrientes,
            :descricao
        );');
        $statement->execute([
            'id_nutri' => $info_nutricional->getId_nutri(),
            'tipo' => $info_nutricional->getTipo(),
            'quantidade_nutrientes' => $info_nutricional->getQuantidade_nutrientes(),
            'descricao' => $info_nutricional->getDescricao()
        ]);
    }

    public function Delete (int $id_nutri): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM info_nutricional WHERE id_nutri = :id_nutri');
       
        $statement->execute([
            'id_nutri' => $id_nutri
            ]);
    } 
}
?>
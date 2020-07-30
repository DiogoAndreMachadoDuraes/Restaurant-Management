<?php

namespace App\DAO;
use App\Models\Info_nutricional;
use IntlChar;

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
                id_info_nutricional,
                tipo,
                quantidade_nutrientes,
                id_produto,
                id_extra
                From Info_nutricional;')
            -> fetchAll(\PDO::FETCH_ASSOC);
        return $info_nutricional;
    }

    public function Insert (Info_nutricional $info_nutricional): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Info_nutricional values(
            null,
            :tipo,
            :quantidade_nutrientes,
            :id_produto,
            :id_extra
        );');
        $statement->execute([
            'tipo' => $info_nutricional->gettipo(),
            'quantidade_nutrientes' => $info_nutricional->getquantidade_nutrientes(),
            'id_produto' => $info_nutricional->getid_produto(),
            'id_extra' => $info_nutricional->getid_extra()
        ]);
    }

    public function Update (Info_nutricional $info_nutricional): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Info_nutricional set tipo=:tipo , quantidade_nutrientes=:quantidade_nutrientes , id_produto=:id_produto and id_extra=:id_extra Where id_info_nutricional=:id_info_nutricional');
        $statement->execute([
            'id_info_nutricional' => $info_nutricional->getid_info_nutricional(),
            'tipo' => $info_nutricional->gettipo(),
            'quantidade_nutrientes' => $info_nutricional->getquantidade_nutrientes(),
            'id_produto' => $info_nutricional->getid_produto(),
            'id_extra' => $info_nutricional->getid_extra()
        ]);
    }

    public function Delete ( Info_nutricional $info_nutricional): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Info_nutricional WHERE id_info_nutricional = :id_info_nutricional');
       
        $statement->execute([
            'id_info_nutricional' => $info_nutricional -> getid_info_nutricional()
        ]);
    } 
}
?>
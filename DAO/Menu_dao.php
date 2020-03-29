<?php

namespace App\DAO;
use App\Models\MenuModel;
use App\DAO\ConnectionDB;

class Menu_dao extends ConnectionDB
{
    public function_construct()
    {
        parent::_construct();
    }

    public function Select (): array
    {
        $menu = $this->pdo
        ->query ('SELECT
        numero_menu,
        valormenu,
        descricao
    From menu;')
        fetchAll(\PDO::FETCH_ASSOC);

        return $menu;
    }

    public function Insert (MenuModel $menu): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO menu values(
            :numero_menu,
            :valormenu,
            :descricao
        );');
        $statement->execute([
            'numero_menu' => $numero_menu->getNumero_menu(),
            'valormenu' => $valormenu->getValormenu(),
            'descricao' = $descricao->getDescricao()
        ])
    }

    public function Update (MenuModel $menu): int
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
            :numero_menu,
            :valormenu,
            :descricao
        );');
        $statement->execute([
            'numero_menu' => $numero_menu->getNumero_menu(),
            'valormenu' => $valormenu->getValormenu(),
            'descricao' = $descricao->getDescricao()
        ])
    }


    public function Delete (int $numero_menu)
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM menu WHERE numero_menu = :numero_menu');
       
        $statement->execute([
            'numero_menu' => $numero_menu ()
            ]);
    }
        
}

<?php

namespace App\DAO;
use App\Models\Menu;

class Menu_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $menu = $this->pdo
        ->query ('SELECT
        numero_menu,
        valormenu,
        descricao
    From menu;')
       -> fetchAll(\PDO::FETCH_ASSOC);

        return $menu;
    }

    public function Insert (Menu $menu): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO menu values(
            :numero_menu,
            :valormenu,
            :descricao
        );');
        $statement->execute([
            'numero_menu' => $menu->getNumero_menu(),
            'valormenu' => $menu->getValormenu(),
            'descricao' => $menu->getDescricao()
        ]);
    }

    public function Update (Menu $menu): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO alergenio values(
            :numero_menu,
            :valormenu,
            :descricao
        );');
        $statement->execute([
            'numero_menu' => $menu->getNumero_menu(),
            'valormenu' => $menu->getValormenu(),
            'descricao' => $menu->getDescricao()
        ]);
    }

    public function Delete (int $numero_menu): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM menu WHERE numero_menu = :numero_menu');
       
        $statement->execute([
            'numero_menu' => $numero_menu
            ]);
    }    
}
?>
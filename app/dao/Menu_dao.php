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
                id_menu,
                nome,
                valor,
                descricao,
                foto
                From Menu;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $menu;
    }

    public function Insert (Menu $menu): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Menu values(
            :id_menu,
            :nome,
            :valor,
            :descricao,
            :foto
        );');
        $statement->execute([
            'id_menu' => $menu->getid_menu(),
            'nome' => $menu->getnome(),
            'valor' => $menu->getvalor(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto()
        ]);
    }

    public function Update (Menu $menu): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Menu set valor=:valor and descricao=:descricao Where id_menu=:id_menu');
        $statement->execute([
            'id_menu' => $menu->getid_menu(),
            'nome' => $menu->getnome(),
            'valor' => $menu->getvalor(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto()
        ]);
    }

    public function Delete (int $id_menu): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Menu WHERE id_menu = :id_menu');
       
        $statement->execute([
            'id_menu' => $id_menu
        ]);
    }    
}
?>
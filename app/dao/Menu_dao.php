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
                foto,
                id_ementa
                From Menu;')
            ->fetchAll(\PDO::FETCH_ASSOC);
        return $menu;
    }

    public function Insert (Menu $menu): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Menu values(
            null,
            :nome,
            :valor,
            :descricao,
            :foto,
            :id_ementa
        );');
        $statement->execute([
            'nome' => $menu->getnome(),
            'valor' => $menu->getvalor(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto(),
            'id_ementa' => $menu->getid_ementa()
        ]);
    }

    public function Update (Menu $menu): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Menu set valor=:valor , nome=:nome , foto=:foto , descricao=:descricao and id_ementa=:id_ementa Where id_menu=:id_menu');
        $statement->execute([
            'id_menu' => $menu->getid_menu(),
            'nome' => $menu->getnome(),
            'valor' => $menu->getvalor(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto(),
            'id_ementa' => $menu->getid_ementa()
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
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
                descricao,
                foto,
                tipo,
                preco,
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
            :descricao,
            :foto,
            :tipo,
            :preco,
            :id_ementa
        );');
        $statement->execute([
            'nome' => $menu->getnome(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto(),
            'tipo' => $menu->gettipo(),
            'preco' => $menu->getpreco(),
            'id_ementa' => $menu->getid_ementa()
        ]);
    }

    public function Update (Menu $menu): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Menu set nome=:nome , descricao=:descricao , foto=:foto , tipo=:tipo ,  preco=:preco , id_ementa=:id_ementa Where id_menu=:id_menu');
        $statement->execute([
            'id_menu' => $menu->getid_menu(),
            'nome' => $menu->getnome(),
            'descricao' => $menu->getdescricao(),
            'foto' => $menu->getfoto(),
            'tipo' => $menu->gettipo(),
            'preco' => $menu->getpreco(),
            'id_ementa' => $menu->getid_ementa()
        ]);
    }

    public function Delete (Menu $menu): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Menu WHERE id_menu = :id_menu');
       
        $statement->execute([
            'id_menu' => $menu -> getid_menu()
        ]);
    }    
}
?>
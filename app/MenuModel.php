<?php

namespace App\Models;

require("app/controllers/Menu_controller.php");

final class Menu
{
     
    public int $numero_menu;
    public string $valormenu;
    public string $descricao;


    public function Menu()
{
    $this->numero_menu = $numero_menu;
    $this->valormenu = $valormenu;
    $this->descricao = $descricao;

}

    //get e set id
    public function getNumero_menu()
    {
        return $this->numero_menu;
    }
    public function setNumero_menu(int $numero_menu): Menu
    {
        $this->numero_menu = $numero_menu;
        return $this;
    }

   
    //get e set valor do menu
    public function getValormenu()
    {
        return $this->valormenu;
    }

    public function setValormenu(string $valormenu): Menu
    {
        $this->valormenu = $valormenu;
        return $this;
    }


    //get e set descricao
    public function getDescricao()
    {
        return $this->descricao;
    }
    public function setDescricao(string $descricao): Menu
    {
        $this->descricao = $descricao;
        return $this;
    }


}


?>
<?php

namespace App\Models;

    final class Menu
    {
        private int $id_menu;
        private string $valor;
        private string $descricao;

        public function Menu() {}

        //get e set id
        public function getid_menu()
        {
            return $this->id_menu;
        }
        public function setid_menu(int $id_menu): Menu
        {
            $this->id_menu = $id_menu;
            return $this;
        }
    
        //get e set valor do menu
        public function getValor()
        {
            return $this->valor;
        }
        public function setvalor(string $valor): Menu
        {
            $this->valor = $valor;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Menu
        {
            $this->descricao = $descricao;
            return $this;
        }
    }
?>
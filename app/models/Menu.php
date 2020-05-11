<?php

namespace App\Models;

    final class Menu
    {
        private int $numero_menu;
        private string $valormenu;
        private string $descricao;

        public function Menu() {}

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
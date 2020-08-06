<?php

namespace App\Models;

    final class Produto_menu
    {
        private int $id_produto_menu;
        private int $quantidade;
        private int $id_menu;
        private int $id_produto;

        public function Produto_menu(){ }

        public function get_id_produto_menu(){
            return $this->id_produto_menu;
        }

        public function set_id_produto_menu($id_produto_menu): Produto_menu{
            $this->id_produto_menu = $id_produto_menu;
            return $this;
        }

        public function get_quantidade(){
            return $this->quantidade;
        }

        public function set_quantidade($quantidade): Produto_menu{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function get_id_menu(){
            return $this->id_menu;
        }

        public function set_id_menu($id_menu): Produto_menu{
            $this->id_menu = $id_menu;
            return $this;
        }

        public function get_id_produto(){
            return $this->id_produto;
        }

        public function set_id_produto($id_produto): Produto_menu{
            $this->id_produto = $id_produto;
            return $this;
        }
    }
?>
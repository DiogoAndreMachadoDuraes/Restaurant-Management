<?php

namespace App\Models;

    final class Compra_menu
    {
        private int $id_compra_menu;
        private int $quantidade;
        private float $preco;

        public function Compra_menu(){ }

        public function get_id_compra_menu(){
            return $this->id_compra_menu;
        }

        public function set_id_compra_menu($id_compra_menu): Compra_menu{
            $this->id_compra_menu = $id_compra_menu;
            return $this;
        }

        public function get_quantidade(){
            return $this->quantidade;
        }

        public function set_quantidade($quantidade): Compra_menu{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function get_preco(){
            return $this->preco_menu;
        }

        public function set_preco($preco): Compra_menu{
            $this->preco = $preco;
            return $this;
        }
    }
?>
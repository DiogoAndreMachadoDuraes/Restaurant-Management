<?php

namespace App\Models;

    final class Compra_menu
    {
        private int $id_compra_menu;
        private int $quantidade;
        private float $preco;

        public function Compra_menu(){ }

        public function getId(){
            return $this->id_compra_menu;
        }

        public function setId($id_compra_menu): Compra_menu{
            $this->id_compra_menu = $id_compra_menu;
            return $this;
        }

        public function getQuantidade(){
            return $this->quantidade;
        }

        public function setQuantidade($quantidade): Compra_menu{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function getPreco(){
            return $this->preco_menu;
        }

        public function setPreco($preco): Compra_menu{
            $this->preco = $preco;
            return $this;
        }
    }
?>
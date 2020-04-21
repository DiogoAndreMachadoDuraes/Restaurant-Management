<?php

namespace App\Models;

    final class Compramenu
    {
        private int $id_compramenu;
        private int $quantidade;
        private float $preco_menu;

        public function Compramenu(){ }

        public function getId(){
            return $this->id_compramenu;
        }

        public function setId($id_compramenu): Compramenu{
            $this->id_compramenu = $id_compramenu;
            return $this;
        }

        public function getQuantidade(){
            return $this->quantidade;
        }

        public function setQuantidade($quantidade): Compramenu{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function getPreco(){
            return $this->preco_menu;
        }

        public function setPreco($preco_menu): Compramenu{
            $this->preco_menu = $preco_menu;
            return $this;
        }
    }
?>
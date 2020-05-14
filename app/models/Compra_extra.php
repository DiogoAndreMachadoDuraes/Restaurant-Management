<?php

namespace App\Models;

    final class Compra_extra
    {
        private int $id_compra_extra;
        private int $quantidade;
        private float $preco;

        public function Compra_extra(){ }

        public function getId(){
            return $this->id_compra_extra;
        }

        public function setId($id_compra_extra): Compra_extra{
            $this->id_compra_extra = $id_compra_extra;
            return $this;
        }

        public function getQuantidade(){
            return $this->quantidade;
        }

        public function setQuantidade($quantidade): Compra_extra{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function getPreco(){
            return $this->preco;
        }

        public function setPreco($preco): Compra_extra{
            $this->preco = $preco;
            return $this;
        }
    }
?>
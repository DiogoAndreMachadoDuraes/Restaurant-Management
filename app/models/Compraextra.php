<?php

namespace App\Models;

    final class Compraextra
    {
        private int $id_compraextra;
        private int $quantidade;
        private float $preco_extra;

        public function Compraextra(){ }

        public function getId(){
            return $this->id_compraextra;
        }

        public function setId($id_compraextra): Compraextra{
            $this->id_compraextra = $id_compraextra;
            return $this;
        }

        public function getQuantidade(){
            return $this->quantidade;
        }

        public function setQuantidade($quantidade): Compraextra{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function getPreco(){
            return $this->preco_extra;
        }

        public function setPreco($preco_extra): Compraextra{
            $this->preco_extra = $preco_extra;
            return $this;
        }
    }
?>
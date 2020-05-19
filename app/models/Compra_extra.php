<?php

namespace App\Models;

    final class Compra_extra
    {
        private int $id_compra_extra;
        private int $quantidade;
        private float $preco;

        public function Compra_extra(){ }

        public function get_id_compra_extra(){
            return $this->id_compra_extra;
        }

        public function set_id_compra_extra($id_compra_extra): Compra_extra{
            $this->id_compra_extra = $id_compra_extra;
            return $this;
        }

        public function get_quantidade(){
            return $this->quantidade;
        }

        public function set_quantidade($quantidade): Compra_extra{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function get_preco(){
            return $this->preco;
        }

        public function set_preco($preco): Compra_extra{
            $this->preco = $preco;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Compra_produto
    {
        private int $id_compra_produto;
        private float $preco;

        public function Compra_produto(){ }

        public function get_id_compra_produto(){
            return $this->id_compra_produto;
        }

        public function set_id_compra_produto($id_compra_produto): Compra_produto{
            $this->id_compra_produto = $id_compra_produto;
            return $this;
        }

        public function get_preco(){
            return $this->preco;
        }

        public function set_preco($preco): Compra_produto{
            $this->preco = $preco;
            return $this;
        }
    }
?>
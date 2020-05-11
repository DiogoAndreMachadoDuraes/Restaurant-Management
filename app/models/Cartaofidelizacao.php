<?php

namespace App\Models;

    final class Cartaofidelizacao
    {
        private int $id_cartao;
        private int $n_compras;
        private int $id_cliente;

        public function Cartaofidelizacao(){ }

        public function getId(){
            return $this->id_cartao;
        }
        
        public function setId($id_cartao): Cartaofidelizacao{
            $this->id_cartao = $id_cartao;
            return $this;
        }

        public function getN_compras(){
            return $this->n_compras;
        }

        public function setN_compras($n_compras): Cartaofidelizacao{
            $this->n_compras = $n_compras;
            return $this;
        }

        public function getId_cliente(){
            return $this->id_cliente;
        }
        
        public function setId_cliente($id_cliente): Cartaofidelizacao{
            $this->id_cliente = $id_cliente;
            return $this;
        }
    }
?>
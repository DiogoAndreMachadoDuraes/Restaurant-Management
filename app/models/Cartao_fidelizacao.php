<?php

namespace App\Models;

    final class Cartao_fidelizacao
    {
        private int $id_cartao_fidelizacao;
        private int $n_compras;
        private int $id_cliente;

        public function Cartao_fidelizacao(){ }

        public function getId_cartao_fidelizacao(){
            return $this->id_cartao_fidelizacao;
        }
        
        public function setId_cartao_fidelizacao($id_cartao_fidelizacao): Cartao_fidelizacao{
            $this->id_cartao_fidelizacao = $id_cartao_fidelizacao;
            return $this;
        }

        public function getN_compras(){
            return $this->n_compras;
        }

        public function setN_compras($n_compras): Cartao_fidelizacao{
            $this->n_compras = $n_compras;
            return $this;
        }

        public function getId_cliente(){
            return $this->id_cliente;
        }
        
        public function setId_cliente($id_cliente): Cartao_fidelizacao{
            $this->id_cliente = $id_cliente;
            return $this;
        }
    }
?>
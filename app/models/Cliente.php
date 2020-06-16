<?php

namespace App\Models;

    final class Cliente
    {
        private int $id_cliente;
        private int $numero_cartao;
        private int $n_compras;
        private int $id_utilizador;

        public function Cliente(){ }

        public function get_id_cliente(){
            return $this->id_cliente;
        }

        public function set_id_cliente(int $id_cliente): Cliente{
            $this->id_cliente = $id_cliente;
            return $this;
        }

        public function get_numero_cartao() : int
        {
            return $this->numero_cartao;
        }
        
        public function set_numero_cartao(int $numero_cartao): Cliente{
            $this->numero_cartao = $numero_cartao;
            return $this;
        }

        public function get_n_compras(){
            return $this->n_compras;
        }

        public function set_n_compras(int $n_compras): Cliente{
            $this->n_compras = $n_compras;
            return $this;
        }

        public function get_id_utilizador(){
            return $this->id_utilizador;
        }

        public function set_id_utilizador(int $id_utilizador): Cliente{
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Cliente
    {
        private int $id_cliente;
        private int $numero_cartao;
        private int $numero_compras;
        private int $id_utilizador;

        public function Cliente(){ }

        public function get_id_cliente(){
            return $this->id_cliente;
        }

        public function set_id_cliente($id_cliente): Cliente
        {
            if (!is_int($id_cliente)) {
                throw new \InvalidArgumentException("The id_cliente must be an integer", 401);
            }
            $this->id_cliente = $id_cliente;
            return $this;
        }

        public function get_numero_cartao() : int
        {
            return $this->numero_cartao;
        }
        
        public function set_numero_cartao(int $numero_cartao): Cliente{
            if (!$numero_cartao && !is_int($numero_cartao) && $numero_cartao==null) {
                throw new \InvalidArgumentException("É preciso o número do cartão", 400);
            }
            $this->numero_cartao = $numero_cartao;
            return $this;
        }

        public function get_numero_compras(){
            return $this->numero_compras;
        }

        public function set_numero_compras(int $numero_compras): Cliente{
            if (!$numero_compras) {
                throw new \InvalidArgumentException("É preciso o número de compras", $numero_compras);
            }
            if (!is_int($numero_compras)) {
                throw new \InvalidArgumentException("Introduziu um valor para o número de compras incorreto", $numero_compras);
            }
            $this->numero_compras = $numero_compras;
            return $this;
        }

        public function get_id_utilizador(){
            return $this->id_utilizador;
        }

        public function set_id_utilizador(int $id_utilizador): Cliente{
            if (is_null($id_utilizador)) {
                throw new \InvalidArgumentException("É preciso o id de utilizador correspondente", 400);
            }
            if (!is_int($id_utilizador)) {
                throw new \InvalidArgumentException("Introduziu um valor para o id utilizador incorreto", $id_utilizador);
            }
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
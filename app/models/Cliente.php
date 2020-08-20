<?php

namespace App\Models;

    final class Cliente
    {
        private int $id_cliente;
        private int $numero_cartao;
        private int $numero_compras;
        private int $id_utilizador;

        public function get_id_cliente(): int{
            return $this->id_cliente;
        }

        public function set_id_cliente(int $id_cliente): self{
            $this->id_cliente = $id_cliente;
            return $this;
        }

        public function get_numero_cartao() : int{
            return $this->numero_cartao;
        }
        
        public function set_numero_cartao(int $numero_cartao): self{
            $this->numero_cartao = $numero_cartao;
            return $this;
        }

        public function get_numero_compras(): int{
            return $this->numero_compras;
        }

        public function set_numero_compras(int $numero_compras): self{
            $this->numero_compras = $numero_compras;
            return $this;
        }

        public function get_id_utilizador(): int{
            return $this->id_utilizador;
        }

        public function set_id_utilizador(int $id_utilizador): self{
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
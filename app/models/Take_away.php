<?php

namespace App\Models;

    final class Take_away
    {
        private int $id_take_away;
        private string $tipo_entrega;
        private float $preco;
        private string $estado;
        private int $id_funcionario;
        private int $id_reserva;

        //get e set id
        public function getid_take_away(): int
        {
            return $this->id_take_away;
        }
        public function setid_take_away(int $id_take_away): self
        {
            $this->id_take_away = $id_take_away;
            return $this;
        }

        //get e set tipo da entrega
        public function gettipo_entrega(): string
        {
           return $this->tipo_entrega;
        }
        public function settipo_entrega(string $tipo_entrega): self
        {
             $this->tipo_entrega = $tipo_entrega;
             return $this;
        }        

        //get e set preco
        public function getpreco(): float
        {
            return $this->preco;
        }
        public function setpreco(float $preco): self
        {
            $this->preco = $preco;
            return $this;
        }

        //get e set do estado do take away
        public function getestado(): string
        {
            return $this->estado;
        }
        public function setestado(string $estado): self
        {
            $this->estado = $estado;
            return $this;
        }

        //get e set id_reserva
        public function getid_reserva(): int
        {
            return $this->id_reserva;
        }
        public function setid_reserva(int $id_reserva): self
        {
            $this->id_reserva = $id_reserva;
            return $this;
        }

         //get e set id_funcionario
         public function getid_funcionario(): int
         {
             return $this->id_funcionario;
         }
         public function setid_funcionario(int $id_funcionario): self
         {
             $this->id_funcionario = $id_funcionario;
             return $this;
         }
    }
?>
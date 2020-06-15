<?php

namespace App\Models;

    final class Take_away
    {
        private int $id_take_away;
        private float $preco;
        private string $data;
        private string $hora;
        private string $tipo_entrega;
        private int $id_reserva;
        private int $id_funcionario;

        public function take_away() {}

        //get e set id
        public function getid_take_away()
        {
            return $this->id_take_away;
        }
        public function setid_take_away(int $id_take_away): Take_away
        {
            $this->id_take_away = $id_take_away;
            return $this;
        }

        //get e set preco
        public function getpreco()
        {
            return $this->preco;
        }
        public function setpreco(float $preco): Take_away
        {
            $this->preco = $preco;
            return $this;
        }

        //get e set dia
        public function getdata()
        {
            return $this->data;
        }
        public function setdata(string $data): Take_away
        {
            $this->data = $data;
            return $this;
        }

        //get e set hora
        public function gethora()
        {
            return $this->hora;
        }
        public function sethora(string $hora): Take_away
        {
            $this->hora = $hora;
            return $this;
        }

        //get e set tipo da entrega
        public function gettipo_entrega()
        {
            return $this->tipo_entrega;
        }
        public function settipo_entrega(string $tipo_entrega): Take_away
        {
            $this->tipo_entrega = $tipo_entrega;
            return $this;
        }

         //get e set id_funcionario
         public function getid_funcionario()
         {
             return $this->id_funcionario;
         }
         public function setid_funcionario(int $id_funcionario): Take_away
         {
             $this->id_funcionario = $id_funcionario;
             return $this;
         }
 
         //get e set id_reserva
         public function getid_reserva()
         {
             return $this->id_reserva;
         }
         public function setid_reserva(int $id_reserva): Take_away
         {
             $this->id_reserva = $id_reserva;
             return $this;
         }
    }
?>
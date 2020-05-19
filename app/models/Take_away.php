<?php

namespace App\Models;

    final class Take_away
    {
        private int $id_take_away;
        private float $preco;
        private string $data;
        private string $hora;
        private string $tipo_entrega;

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
            return $this->dia;
        }
        public function setdata(string $dia): Take_away
        {
            $this->dia = $dia;
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
            return $this->tipodeentrega;
        }
        public function settipo_entrega(string $tipo_entrega): Take_away
        {
            $this->tipo_entrega = $tipo_entrega;
            return $this;
        }
    }
?>
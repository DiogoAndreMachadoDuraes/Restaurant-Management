<?php

namespace App\Models;

    final class Takeaway
    {
        private int $id_take;
        private float $preco;
        private string $dia;
        private string $hora;
        private string $tipodeentrega;

        public function Takeaway() {}

        //get e set id
        public function getId_take()
        {
            return $this->id_take;
        }
        public function setId_take(int $id_take): Takeaway
        {
            $this->id_take = $id_take;
            return $this;
        }

        //get e set preco
        public function getPreco()
        {
            return $this->preco;
        }
        public function setPreco(float $preco): Takeaway
        {
            $this->preco = $preco;
            return $this;
        }

        //get e set dia
        public function getDia()
        {
            return $this->dia;
        }
        public function setDia(string $dia): Takeaway
        {
            $this->dia = $dia;
            return $this;
        }

        //get e set hora
        public function getHora()
        {
            return $this->hora;
        }
        public function setHora(string $hora): Takeaway
        {
            $this->hora = $hora;
            return $this;
        }

        //get e set tipo da entrega
        public function getTipodeentrega()
        {
            return $this->tipodeentrega;
        }
        public function setTipodeentrega(string $tipodeentrega): Takeaway
        {
            $this->tipodeentrega = $tipodeentrega;
            return $this;
        }
    }
?>
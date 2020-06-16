<?php

namespace App\Models;

    final class Reserva
    {
        private int $id_reserva;
        private string $estado;
        private int $id_cliente;

        public function Reserva(){ }

        public function get_id_reserva(){
            return $this->id_reserva;
        }

        public function set_id_reserva($id_reserva): Reserva{
            $this->id_reserva = $id_reserva;
            return $this;
        }

        public function get_estado(){
            return $this->estado;
        }

        public function set_estado(string $estado): Reserva{
            $this->estado = $estado;
            return $this;
        }

        public function get_id_cliente(){
            return $this->id_cliente;
        }

        public function set_id_cliente($id_cliente): Reserva{
            $this->id_cliente = $id_cliente;
            return $this;
        }
    }
?>
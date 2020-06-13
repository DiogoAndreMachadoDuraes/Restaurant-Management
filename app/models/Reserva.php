<?php

namespace App\Models;

    final class Reserva
    {
        private int $id_reserva;
        private string $estado;

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

        public function set_estado($estado): Reserva{
            $this->estado = $estado;
            return $this;
        }
    }
?>
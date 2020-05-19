<?php

namespace App\Models;

    final class Reserva
    {
        private int $id_reserva;
        private bool $pagamento;

        public function Reserva(){ }

        public function get_id_reserva(){
            return $this->id_reserva;
        }

        public function set_id_reserva($id_reserva): Reserva{
            $this->id_reserva = $id_reserva;
            return $this;
        }

        public function get_pagamento(){
            return $this->pagamento;
        }

        public function set_pagamento($pagamento): Reserva{
            $this->pagamento = $pagamento;
            return $this;
        }
    }
?>
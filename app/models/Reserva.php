<?php

namespace App\Models;

    final class Reserva
    {
        private int $id_reserva;
        private bool $pagamento;

        public function Reserva(){ }

        public function getId(){
            return $this->id_reserva;
        }

        public function setId($id_reserva): Reserva{
            $this->id_reserva = $id_reserva;
            return $this;
        }

        public function getPagamento(){
            return $this->pagamento;
        }

        public function setPagamento($pagamento): Reserva{
            $this->pagamento = $pagamento;
            return $this;
        }
    }
?>
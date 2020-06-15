<?php

namespace App\Models;

    final class Fatura
    {
        private int $id_fatura;
        private float $iva;
        private string $taxa;
        private int $nif_cliente;
        private int $id_reserva;

        public function Fatura() {}

        //get e set id fatura
        public function getid_fatura()
        {
            return $this->id_fatura;
        }
        public function setid_fatura(int $id_fatura): Fatura
        {
            $this->id_fatura = $id_fatura;
            return $this;
        }

        //get e set iva
        public function gettaxa()
        {
            return $this->taxa;
        }
        public function settaxa(string $taxa): Fatura
        {
            $this->taxa = $taxa;
            return $this;
        }

        //get e set taxa
        public function getiva()
        {
            return $this->iva;
        }
        public function setiva(float $iva): Fatura
        {
            $this->iva = $iva;
            return $this;
        }

         //get e set nif_cliente
         public function getnif_cliente()
         {
             return $this->nif_cliente;
         }
         public function setnif_cliente(int $nif_cliente): Fatura
         {
             $this->nif_cliente = $nif_cliente;
             return $this;
         }

         //get e set id_reserva
         public function getid_reserva()
         {
             return $this->id_reserva;
         }
         public function setid_reserva(int $id_reserva): Fatura
         {
             $this->id_reserva = $id_reserva;
             return $this;
         }
    }
?>
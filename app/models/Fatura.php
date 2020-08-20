<?php

namespace App\Models;

    final class Fatura
    {
        private int $id_fatura;
        private float $iva;
        private string $taxa;
        private float $valor_total;
        private int $nif_cliente;
        private int $id_reserva;

        //get e set id fatura
        public function getid_fatura(): int
        {
            return $this->id_fatura;
        }
        public function setid_fatura(int $id_fatura): self
        {
            $this->id_fatura = $id_fatura;
            return $this;
        }

        //get e set iva
        public function getiva(): float
        {
            return $this->iva;
        }
        public function setiva(float $iva): self
        {
            $this->iva = $iva;
            return $this;
        }

        //get e set taxa
        public function gettaxa(): string
        {
            return $this->taxa;
        }
        public function settaxa(string $taxa): self
        {
            $this->taxa = $taxa;
            return $this;
        }

         //get e set valor no total
        public function getvalor_total(): float
        {
            return $this->valor_total;
        }
        public function setvalor_total(float $valor_total): self
        {
            $this->valor_total = $valor_total;
            return $this;
        }

        //get e set nif_cliente
        public function getnif_cliente(): int
        {
            return $this->nif_cliente;
        }
        public function setnif_cliente(int $nif_cliente): self
        {
            $this->nif_cliente = $nif_cliente;
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
    }
?>
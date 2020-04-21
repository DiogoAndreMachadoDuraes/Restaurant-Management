<?php

namespace App\Models;

final class Fatura
{
     
    private int $id_fatura;
    private float $iva;
    private string $taxa;

    public function Fatura() {}

    //get e set id
    public function getId_fatura()
    {
        return $this->id_fatura;
    }
    public function setId_fatura(int $id_fatura): Fatura
    {
        $this->id_fatura = $id_fatura;
        return $this;
    }

    //get e set iva
    public function getIva()
    {
        return $this->iva;
    }
    public function setIva(float $iva): Fatura
    {
        $this->iva = $iva;
        return $this;
    }

    //get e set taxa
    public function getTaxa()
    {
        return $this->taxa;
    }
    public function setTaxa(string $taxa): Fatura
    {
        $this->taxa = $taxa;
        return $this;
    }
}
?>
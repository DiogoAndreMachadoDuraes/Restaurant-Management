<?php

namespace App\Models;

require("app/controllers/Fatura_controller.php");

final class Fatura
{
     
    public int $id_fatura;
    public string $iva;
    public string $taxa;

public function Fatura()
{
    $this->id_fatura = $id_fatura;
    $this->iva = $iva;
    $this->taxa = $taxa;

}

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

    public function setIva(string $iva): Fatura
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
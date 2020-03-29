<?php

namespace App\Models;

require("app/controllers/Alergenio_controller.php");

final class Alergenio
{
     
    public int $id_alerge;
    public string $tipo;
    public string $descricao;

public function Alergenio()
{
    $this->id_alerge = $id_alerge;
    $this->tipo = $tipo;
    $this->descricao = $descricao;

}

    //get e set id
    public function getId_alerge()
    {
        return $this->id_alerge;
    }
    public function setId_alerge(int $id_alerge): Alergenio
    {
        $this->id_alerge = $id_alerge;
        return $this;
    }

   
    //get e set tipo
    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo(string $tipo): Alergenio
    {
        $this->tipo = $tipo;
        return $this;
    }


    //get e set descricao
    public function getDescricao()
    {
        return $this->descricao;
    }
    public function setDescricao(string $descricao): Alergenio
    {
        $this->descricao = $descricao;
        return $this;
    }



}


?>
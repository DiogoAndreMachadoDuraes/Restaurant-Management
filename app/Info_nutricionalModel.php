<?php

namespace App\Models;

require("app/controllers/Info_nutricional_controller.php");

final class Info_nutricional
{
     
    public int $id_nutri;
    public string $tipo;
    public string $quantidade_nutrientes;
    public string $descricao;

public function Info_nutricional()
{
    $this->id_nutri = $id_nutri;
    $this->tipo = $tipo;
    $this->quantidade_nutrientes = $quantidade_nutrientes;
    $this->descricao = $descricao;

}

    //get e set id
    public function getId_nutri()
    {
        return $this->id_nutri;
    }
    public function setId_nutri(int $id_nutri): Info_nutricional
    {
        $this->id_nutri = $id_nutri;
        return $this;
    }

   
    //get e set tipo
    public function getTipo()
    {
        return $this->tipo;
    }

    public function setTipo(string $tipo): Info_nutricional
    {
        $this->tipo = $tipo;
        return $this;
    }


    //get e set qtd nutrientes
    public function getQuantidade_nutrientes()
    {
        return $this->quantidade_nutrientes;
    }
    public function setQuantidade_nutrientes(string $quantidade_nutrientes): Info_nutricional
    {
        $this->quantidade_nutrientes = $quantidade_nutrientes;
        return $this;
    }



    //get e set descricao
    public function getDescricao()
    {
        return $this->descricao;
    }
    public function setDescricao(string $descricao): Info_nutricional
    {
        $this->descricao = $descricao;
        return $this;
    }


}


?>
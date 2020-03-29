<?php

namespace App\Models;

require("app/controllers/Takeaway_controller.php");

final class Takeaway
{
     
    public int $id_take;
    public string $preco;
    public string $data;
    public string $hora;
    public string $tipodeentrega;

public function Takeaway()
{
    $this->id_take = $id_take;
    $this->preco = $preco;
    $this->data = $data;
    $this->hora = $hora;
    $this->tipodeentrega = $tipodeentrega;

}

    //get e set id
    public function getId_take()
    {
        return $this->id_take;
    }
    public function setId_take(int $id_take): Takeaway
    {
        $this->id_take = $id_take;
        return $this;
    }

   
    //get e set preco
    public function getPreco()
    {
        return $this->preco;
    }

    public function setPreco(string $preco): Takeaway
    {
        $this->preco = $preco;
        return $this;
    }


    //get e set data
    public function getData()
    {
        return $this->Data;
    }
    public function setData(string $data): Takeaway
    {
        $this->data = $data;
        return $this;
    }



    //get e set hora
    public function getHora()
    {
        return $this->hora;
    }
    public function setHora(string $hora): Takeaway
    {
        $this->hora = $hora;
        return $this;
    }


    //get e set tipo da entrega
    public function getTipodeentrega()
    {
        return $this->tipodeentrega;
    }
    public function setTipodeentrega(string $tipodeentrega): Takeaway
    {
        $this->tipodeentrega = $tipodeentrega;
        return $this;
    }


}


?>
<?php

namespace App\Models;

require("app/controllers/Gestor_controller.php");

final class Gestor
{
     
    public int $id_gestor;
    public string $nome;
    public string $telefone;
    public string $email;

public function Gestor()
{
    $this->id_gestor = $id_gestor;
    $this->nome = $nome;
    $this->telefone = $telefone;
    $this->email = $email;

}

    //get e set id
    public function getId_gestor()
    {
        return $this->id_gestor;
    }
    public function setId_gestor(int $id_gestor): Gestor
    {
        $this->id_gestor = $id_gestor;
        return $this;
    }

   
    //get e set nome
    public function getNome()
    {
        return $this->nome;
    }

    public function setNome(string $nome): Gestor
    {
        $this->nome = $nome;
        return $this;
    }


    //get e set telefone
    public function getTelefone()
    {
        return $this->telefone;
    }
    public function setTelefone(string $telefone): Gestor
    {
        $this->telefone = $telefone;
        return $this;
    }



    //get e set email
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $email): Gestor
    {
        $this->email = $email;
        return $this;
    }


}


?>
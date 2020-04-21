<?php

namespace App\Models;

final class Gestor
{
     
    private int $nif_gestor;
    private string $nome;
    private string $telefone;
    private string $email;

    public function Gestor() {}

    //get e set nif
    public function getNif_gestor()
    {
        return $this->nif_gestor;
    }
    public function setNif_gestor(int $nif_gestor): Gestor
    {
        $this->nif_gestor = $nif_gestor;
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
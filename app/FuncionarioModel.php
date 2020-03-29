<?php

namespace App\Models;

require("app/controllers/Funcionario_controller.php");

final class Funcionario
{
     
    public int $id_funcionario;
    public string $nome;
    public string $telefone;
    public string $email;

public function Funcionario()
{
    $this->id_funcionario = $id_funcionario;
    $this->nome = $nome;
    $this->telefone = $telefone;
    $this->email = $email;

}

    //get e set id
    public function getId_funcionario()
    {
        return $this->id_funcionario;
    }
    public function setId_funcionario(int $id_funcionario): Funcionario
    {
        $this->id_funcionario = $id_funcionario;
        return $this;
    }

   
    //get e set nome
    public function getNome()
    {
        return $this->nome;
    }

    public function setNome(string $nome): Funcionario
    {
        $this->nome = $nome;
        return $this;
    }


    //get e set telefone
    public function getTelefone()
    {
        return $this->telefone;
    }
    public function setTelefone(string $telefone): Funcionario
    {
        $this->telefone = $telefone;
        return $this;
    }



    //get e set email
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $email): Funcionario
    {
        $this->email = $email;
        return $this;
    }


}


?>
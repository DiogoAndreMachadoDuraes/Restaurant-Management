<?php

namespace App\Models;

final class Usuario
{
    private int $id_usuario;
    private string $nome;
    private string $email;
    private string $password;

    public function Usuario() {}

    //get e set id_usuario
    public function getId_usuario()
    {
        return $this->id_usuario;
    }
    public function setId_usuario(int $id_usuario): Usuario
    {
        $this->id_usuario = $id_usuario;
        return $this;
    }

    //get e set nome
    public function getNome()
    {
        return $this->nome;
    }
    public function setNome(string $nome): Usuario
    {
        $this->nome = $nome;
        return $this;
    }

    //get e set email
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $email): Usuario
    {
        $this->email = $email;
        return $this;
    }

    //get e set password
    public function getPassword()
    {
        return $this->password;
    }
    public function setPassword(string $password): Usuario
    {
        $this->password = $password;
        return $this;
    }
}
?>
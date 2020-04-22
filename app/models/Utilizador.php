<?php

namespace App\Models;

final class Utilizador
{
    private int $id_utilizador;
    private string $nome;
    private string $email;
    private string $password;

    public function Utilizador() {}

    //get e set id_utilizador
    public function getId_utilizador()
    {
        return $this->id_utilizador;
    }
    public function setId_utilizador(int $id_utilizador): Utilizador
    {
        $this->id_utilizador = $id_utilizador;
        return $this;
    }

    //get e set nome
    public function getNome()
    {
        return $this->nome;
    }
    public function setNome(string $nome): Utilizador
    {
        $this->nome = $nome;
        return $this;
    }

    //get e set email
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $email): Utilizador
    {
        $this->email = $email;
        return $this;
    }

    //get e set password
    public function getPassword()
    {
        return $this->password;
    }
    public function setPassword(string $password): Utilizador
    {
        $this->password = $password;
        return $this;
    }
}
?>
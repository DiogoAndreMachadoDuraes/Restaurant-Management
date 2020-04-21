<?php

namespace App\Models;

final class Restaurante
{
     
    private int $id_restaurante;
    private string $nome;
    private string $localizacao;
    private string $telefone;
    private string $email;

    public function Restaurante() {}

    //get e set id
    public function getId_restaurante()
    {
        return $this->id_restaurante;
    }
    public function setId_restaurante(int $id_restaurante): Restaurante
    {
        $this->id_restaurante = $id_restaurante;
        return $this;
    }

   
    //get e set nome
    public function getNome()
    {
        return $this->nome;
    }
    public function setNome(string $nome): Restaurante
    {
        $this->nome = $nome;
        return $this;
    }


    //get e set localizacao
    public function getLocalizacao()
    {
      return $this->localizacao;
    }
    public function setLocalizacao(string $localizacao): Restaurante
    {
      $this->localizacao = $localizacao;
      return $this;
    }

    
    //get e set telefone
    public function getTelefone()
    {
        return $this->telefone;
    }
    public function setTelefone(string $telefone): Restaurante
    {
        $this->telefone = $telefone;
        return $this;
    }

    //get e set email
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail(string $email): Restaurante
    {
        $this->email = $email;
        return $this;
    }
}
?>
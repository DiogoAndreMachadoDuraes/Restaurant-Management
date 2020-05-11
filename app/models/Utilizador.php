<?php

namespace App\Models;

    final class Utilizador
    {
        private int $id_utilizador;
        private string $nome;
        private string $telefone;
        private string $email;
        private string $morada;
        private string $password;
        private string $tipo;

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

        //get e set telefone
        public function getTelefone()
        {
            return $this->telefone;
        }
        public function setTelefone(string $telefone): Utilizador
        {
            $this->telefone = $telefone;
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

        //get e set morada
        public function getMorada()
        {
            return $this->morada;
        }
        public function setMorada(string $morada): Utilizador
        {
            $this->morada = $morada;
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

        //get e set tipo
        public function getTipo()
        {
            return $this->tipo;
        }
        public function setTipo(string $tipo): Utilizador
        {
            $this->tipo = $tipo;
            return $this;
        }
    }
?>
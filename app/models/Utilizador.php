<?php

namespace App\Models;

    abstract class Utilizador
    {
        private int $id_utilizador;
        private string $nome;
        private string $telefone;
        private string $email;
        private string $morada;
        private string $password;
        private string $tipo;
        private string $foto;
        private int $nif;

        public function Utilizador() {}

        //get e set id_utilizador
        public function getid_utilizador()
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): Utilizador
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }

        //get e set nome
        public function getnome()
        {
            return $this->nome;
        }
        public function setnome(string $nome): Utilizador
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set telefone
        public function gettelefone()
        {
            return $this->telefone;
        }
        public function settelefone(string $telefone): Utilizador
        {
            $this->telefone = $telefone;
            return $this;
        }

        //get e set email
        public function getemail()
        {
            return $this->email;
        }
        public function setemail(string $email): Utilizador
        {
            $this->email = $email;
            return $this;
        }

        //get e set morada
        public function getmorada()
        {
            return $this->morada;
        }
        public function setmorada(string $morada): Utilizador
        {
            $this->morada = $morada;
            return $this;
        }

        //get e set password
        public function getpassword()
        {
            return $this->password;
        }
        public function setpassword(string $password): Utilizador
        {
            $this->password = $password;
            return $this;
        }

        //get e set tipo
        public function gettipo()
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): Utilizador
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set foto
        public function getfoto()
        {
            return $this->foto;
        }
        public function setfoto(string $foto): Utilizador
        {
            $this->foto = $foto;
            return $this;
        }

        //get e set nif_utilizador
        public function getnif()
        {
            return $this->nif;
        }
        public function setnif(int $nif): Utilizador
        {
            $this->nif = $nif;
            return $this;
        }
    }
?>
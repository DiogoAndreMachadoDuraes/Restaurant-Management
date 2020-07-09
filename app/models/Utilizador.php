<?php

namespace App\Models;

    final class Utilizador
    {
        private int $id_utilizador;
        private int $nif;
        private string $nome;
        private string $data_nascimento;
        private string $sexo;
        private string $telefone;
        private string $morada;
        private string $foto;
        private string $email;
        private string $password;
        private string $tipo;
        

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

        //get e set data de nascimento
        public function getdata_nascimento()
        {
            return $this->data_nascimento;
        }
        public function setdata_nascimento(string $data_nascimento): Utilizador
        {
            $this->data_nascimento = $data_nascimento;
            return $this;
        }

        //get e set sexo do utilizador
        public function getsexo()
        {
            return $this->sexo;
        }
        public function setsexo(string $sexo): Utilizador
        {
            $this->sexo = $sexo;
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

    }
?>
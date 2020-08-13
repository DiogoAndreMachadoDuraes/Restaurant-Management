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
        private string $rua;
        private string $codigo_postal;
        private string $localizacao;
        private string $foto;
        private string $email;
        private string $password;
        private string $tipo;

        //get e set id_utilizador
        public function getid_utilizador(): int
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): self
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }

        //get e set nif_utilizador
        public function getnif(): int
        {
            return $this->nif;
        }
        public function setnif(int $nif): self
        {
            $this->nif = $nif;
            return $this;
        }

        //get e set nome
        public function getnome(): string
        {
            return $this->nome;
        }
        public function setnome(string $nome): self
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set data de nascimento
        public function getdata_nascimento(): string
        {
            return $this->data_nascimento;
        }
        public function setdata_nascimento(string $data_nascimento): self
        {
            $this->data_nascimento = $data_nascimento;
            return $this;
        }

        //get e set sexo do utilizador
        public function getsexo(): string
        {
            return $this->sexo;
        }
        public function setsexo(string $sexo): self
        {
            $this->sexo = $sexo;
            return $this;
        }

        //get e set telefone
        public function gettelefone(): string
        {
            return $this->telefone;
        }
        public function settelefone(string $telefone): self
        {
            $this->telefone = $telefone;
            return $this;
        }

        //get e set rua
        public function getrua(): string
        {
            return $this->rua;
        }
        public function setrua(string $rua): self
        {
            $this->rua = $rua;
            return $this;
        }

        //get e set codigo_postal
        public function getcodigo_postal(): string
        {
            return $this->codigo_postal;
        }
        public function setcodigo_postal(string $codigo_postal): self
        {
            $this->codigo_postal = $codigo_postal;
            return $this;
        }

        //get e set localizacao
        public function getlocalizacao(): string
        {
            return $this->localizacao;
        }
        public function setlocalizacao(string $localizacao): self
        {
            $this->localizacao = $localizacao;
            return $this;
        }

        //get e set foto
        public function getfoto(): string
        {
            return $this->foto;
        }
        public function setfoto(string $foto): self
        {
            $this->foto = $foto;
            return $this;
        }

        //get e set email
        public function getemail(): string
        {
            return $this->email;
        }
        public function setemail(string $email): self
        {
            $this->email = $email;
            return $this;
        }

        //get e set password
        public function getpassword(): string
        {
            return $this->password;
        }
        public function setpassword(string $password): self
        {
            $this->password = $password;
            return $this;
        }

        //get e set tipo
        public function gettipo(): string
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): self
        {
            $this->tipo = $tipo;
            return $this;
        }
    }
?>
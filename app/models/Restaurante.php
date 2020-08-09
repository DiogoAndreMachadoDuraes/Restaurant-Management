<?php

namespace App\Models;

    final class Restaurante
    {
        private int $id_restaurante;
        private string $nome;
        private string $rua;
        private string $codigo_postal;
        private string $localizacao;
        private string $telefone;
        private string $email;
        private string $foto;

        //get e set id
        public function getid_restaurante(): int
        {
            return $this->id_restaurante;
        }
        public function setid_restaurante(int $id_restaurante): self
        {
            $this->id_restaurante = $id_restaurante;
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

        //get e set codigo-postal
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
    }
?>
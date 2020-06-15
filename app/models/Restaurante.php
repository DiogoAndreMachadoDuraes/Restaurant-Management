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
        private string $fotografia;

        public function Restaurante() {}

        //get e set id
        public function getid_restaurante()
        {
            return $this->id_restaurante;
        }
        public function setid_restaurante(int $id_restaurante): Restaurante
        {
            $this->id_restaurante = $id_restaurante;
            return $this;
        }
    
        //get e set nome
        public function getnome()
        {
            return $this->nome;
        }
        public function setnome(string $nome): Restaurante
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set rua
        public function getrua()
        {
            return $this->rua;
        }
        public function setrua(string $rua): Restaurante
        {
            $this->rua = $rua;
            return $this;
        }

        //get e set codigo-postal
        public function getcodigo_postal()
        {
            return $this->codigo_postal;
        }
        public function setcodigo_postal(string $codigo_postal): Restaurante
        {
            $this->codigo_postal = $codigo_postal;
            return $this;
        }

        //get e set localizacao
        public function getlocalizacao()
        {
        return $this->localizacao;
        }
        public function setlocalizacao(string $localizacao): Restaurante
        {
        $this->localizacao = $localizacao;
        return $this;
        }

        //get e set telefone
        public function gettelefone()
        {
            return $this->telefone;
        }
        public function settelefone(string $telefone): Restaurante
        {
            $this->telefone = $telefone;
            return $this;
        }

        //get e set email
        public function getemail()
        {
            return $this->email;
        }
        public function setemail(string $email): Restaurante
        {
            $this->email = $email;
            return $this;
        }

        //get e set foto
        public function getfotografia()
        {
            return $this->fotografia;
        }
        public function setfotografia(string $fotografia): Restaurante
        {
            $this->fotografia = $fotografia;
            return $this;
        }
    }
?>
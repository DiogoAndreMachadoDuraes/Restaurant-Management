<?php

namespace App\Models;

    final class Cliente
    {
        private int $nif_cliente;
        private string $nome;
        private string $telefone;
        private string $email;
        private string $morada;

        public function Cliente(){ }

        public function getNif(){
            return $this->nif_cliente;
        }

        public function setNif($nif_cliente): Cliente{
            $this->nif = $nif_cliente;
            return $this;
        }

        public function getNome(){
            return $this->nome;
        }

        public function setNome($nome): Cliente{
            $this->nome = $nome;
            return $this;
        }

        public function getTelefone(){
            return $this->telefone;
        }

        public function setTelefone($telefone): Cliente{
            $this->telefone = $telefone;
            return $this;
        }

        public function getEmail(){
            return $this->email;
        }

        public function setEmail($email): Cliente{
            $this->email = $email;
            return $this;
        }

        public function getMorada(){
            return $this->morada;
        }

        public function setMorada($morada): Cliente{
            $this->morada = $morada;
            return $this;
        }
    }
?>
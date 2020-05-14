<?php

namespace App\Models;

    final class Funcionario
    {
        private int $id_funcionario;
        private int $nif_func;
        private string $nome;
        private string $telefone;
        private string $email;

        public function Funcionario() {}

        //get e set id funcionario
        public function getId_funcionario()
        {
            return $this->id_func;
        }
        public function setId_funcionario(int $id_funcionario): Funcionario
        {
            $this->id_funcionario = $id_funcionario;
            return $this;
        }

        //get e set nif
        public function getNif_func()
        {
            return $this->nif_func;
        }
        public function setNif_func(int $nif_func): Funcionario
        {
            $this->nif_func = $nif_func;
            return $this;
        }
    
        //get e set nome
        public function getNome()
        {
            return $this->nome;
        }
        public function setNome(string $nome): Funcionario
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set telefone
        public function getTelefone()
        {
            return $this->telefone;
        }
        public function setTelefone(string $telefone): Funcionario
        {
            $this->telefone = $telefone;
            return $this;
        }

        //get e set email
        public function getEmail()
        {
            return $this->email;
        }
        public function setEmail(string $email): Funcionario
        {
            $this->email = $email;
            return $this;
        }
    }
?>
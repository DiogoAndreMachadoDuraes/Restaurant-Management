<?php

namespace App\Models;

    final class Funcionario
    {
        private int $id_funcionario;
        private int $id_restaurante;
        private int $id_utilizador;
        
        //get e set id funcionario
        public function getid_funcionario(): int
        {
            return $this->id_funcionario;
        }
        public function setid_funcionario(int $id_funcionario): self
        {
            $this->id_funcionario = $id_funcionario;
            return $this;
        }

        //get e set id restaurante
        public function getid_restaurante(): int
        {
            return $this->id_restaurante;
        }
        public function setid_restaurante(int $id_restaurante): self
        {
            $this->id_restaurante = $id_restaurante;
            return $this;
        }

        //get e set id funcionario
        public function getid_utilizador(): int
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): self
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
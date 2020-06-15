<?php

namespace App\Models;

    final class Funcionario extends Utilizador
    {
        private int $id_funcionario;
        private int $id_restaurante;
        private int $id_utilizador;


        public function Funcionario() {}

        //get e set id funcionario
        public function getid_funcionario()
        {
            return $this->id_funcionario;
        }
        public function setid_funcionario(int $id_funcionario): Funcionario
        {
            $this->id_funcionario = $id_funcionario;
            return $this;
        }

        //get e set id restaurante
        public function getid_restaurante()
        {
            return $this->id_restaurante;
        }
        public function setid_restaurante(int $id_restaurante): Funcionario
        {
            $this->id_restaurante = $id_restaurante;
            return $this;
        }

        //get e set id funcionario
        public function getid_utilizador()
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): Funcionario
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
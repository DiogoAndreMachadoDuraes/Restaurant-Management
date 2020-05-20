<?php

namespace App\Models;

    final class Funcionario extends Utilizador
    {
        private int $id_funcionario;

        public function Funcionario() {}

        //get e set id funcionario
        public function getid_funcionario()
        {
            return $this->id_func;
        }
        public function setid_funcionario(int $id_funcionario): Funcionario
        {
            $this->id_funcionario = $id_funcionario;
            return $this;
        }
    }
?>
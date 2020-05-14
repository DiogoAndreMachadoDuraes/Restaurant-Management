<?php

namespace App\Models;

    final class Extra
    {
        private int $id_extra;
        private string $nome;
        private string $tipo;

        public function Extra(){ }

        public function getId_extra(){
            return $this->id_extra;
        }

        public function setId_extra($id_extra): Extra{
            $this->id_extra = $id_extra;
            return $this;
        }

        public function getNome(){
            return $this->nome;
        }

        public function setNome($nome): Extra{
            $this->nome = $nome;
            return $this;
        }

        public function getTipo(){
            return $this->tipo;
        }

        public function setTipo($tipo): Extra{
            $this->tipo = $tipo;
            return $this;
        }
    }
?>
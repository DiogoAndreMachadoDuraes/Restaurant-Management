<?php

namespace App\Models;

    final class Extra
    {
        private int $id_extra;
        private string $nome_extra;
        private string $tipo;

        public function Extra(){ }

        public function getId(){
            return $this->id_extra;
        }

        public function setId($id_extra): Extra{
            $this->id_extra = $id_extra;
            return $this;
        }

        public function getNome(){
            return $this->nome_extra;
        }

        public function setNome($nome_extra): Extra{
            $this->nome_extra = $nome_extra;
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
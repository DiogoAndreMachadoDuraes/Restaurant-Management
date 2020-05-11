<?php

namespace App\Models;

    final class Alergenio
    {
        private int $id_alerge;
        private string $tipo;
        private string $descricao;

        public function Alergenio(){}

        //get e set id
        public function getId_alerge()
        {
            return $this->id_alerge;
        }
        public function setId_alerge(int $id_alerge): Alergenio
        {
            $this->id_alerge = $id_alerge;
            return $this;
        }

        //get e set tipo
        public function getTipo()
        {
            return $this->tipo;
        }
        public function setTipo(string $tipo): Alergenio
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set descricao
        public function getDescricao()
        {
            return $this->descricao;
        }
        public function setDescricao(string $descricao): Alergenio
        {
            $this->descricao = $descricao;
            return $this;
        }
    }
?>
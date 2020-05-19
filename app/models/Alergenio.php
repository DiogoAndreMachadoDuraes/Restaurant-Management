<?php

namespace App\Models;

    final class Alergenio
    {
        private int $id_alergenio;
        private string $tipo;
        private string $descricao;

        public function Alergenio(){}

        //get e set id
        public function getid_alergenio()
        {
            return $this->id_alergenio;
        }
        public function setid_alergenio(int $id_alergenio): Alergenio
        {
            $this->id_alergenio = $id_alergenio;
            return $this;
        }

        //get e set tipo
        public function gettipo()
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): Alergenio
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Alergenio
        {
            $this->descricao = $descricao;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Alergenio
    {
        private int $id_alergenio;
        private string $tipo;
        private string $descricao;
        private int $id_extra;
        private int $id_produto;

        public function Alergenio(){}

        //get e set id alergenio
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

        //get e set id_extra
        public function getid_extra()
        {
            return $this->id_extra;
        }
        public function setid_extra(int $id_extra): Alergenio
        {
            $this->id_extra = $id_extra;
            return $this;
        }

        //get e set id_produto
        public function getid_produto()
        {
            return $this->id_produto;
        }
        public function setid_produto(int $id_produto): Alergenio
        {
            $this->id_produto = $id_produto;
            return $this;
        }
    }
?>
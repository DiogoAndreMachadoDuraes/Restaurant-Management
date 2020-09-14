<?php

namespace App\Models;

    final class Alergenio
    {
        private int $id_alergenio;
        private string $tipo;
        private string $descricao;
        private string $foto;
        private $id_extra;
        private $id_produto;

        //get e set id alergenio
        public function getid_alergenio() :int
        {
            return $this->id_alergenio;
        }
        public function setid_alergenio(int $id_alergenio): self
        {
            $this->id_alergenio = $id_alergenio;
            return $this;
        }

        //get e set tipo
        public function gettipo(): string
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): self
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set descricao
        public function getdescricao(): string
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): self
        {
            $this->descricao = $descricao;
            return $this;
        }

        //get e set foto
        public function getfoto(): string
        {
            return $this->foto;
        }
        public function setfoto(string $foto): self
        {
            $this->foto = $foto;
            return $this;
        }

        //get e set id_extra
        public function getid_extra()
        {
            return $this->id_extra;
        }
        public function setid_extra($id_extra): self
        {
            $this->id_extra = $id_extra;
            return $this;
        }

        //get e set id_produto
        public function getid_produto()
        {
            return $this->id_produto;
        }
        public function setid_produto($id_produto): self
        {
            $this->id_produto = $id_produto;
            return $this;
        }
    }
?>
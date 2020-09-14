<?php

namespace App\Models;

    final class Info_nutricional
    {
        private int $id_info_nutricional;
        private string $tipo;
        private int $quantidade_nutrientes;
        private $id_produto;
        private $id_extra;

        //get e set id da info
        public function getid_info_nutricional(): int
        {
            return $this->id_info_nutricional;
        }
        public function setid_info_nutricional(int $id_info_nutricional): self
        {
            $this->id_info_nutricional = $id_info_nutricional;
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

        //get e set qtd nutrientes
        public function getquantidade_nutrientes(): int
        {
            return $this->quantidade_nutrientes;
        }
        public function setquantidade_nutrientes(int $quantidade_nutrientes): self
        {
            $this->quantidade_nutrientes = $quantidade_nutrientes;
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
    }
?>
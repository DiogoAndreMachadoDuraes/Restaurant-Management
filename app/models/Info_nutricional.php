<?php

namespace App\Models;

    final class Info_nutricional
    {
        private int $id_info_nutricional;
        private string $tipo;
        private int $quantidade_nutrientes;
        private string $descricao;
        private int $id_produto;
        private int $id_extra;

        public function Info_nutricional() {}

        //get e set id da info
        public function getid_info_nutricional()
        {
            return $this->id_info_nutricional;
        }
        public function setid_info_nutricional(int $id_info_nutricional): Info_nutricional
        {
            $this->id_info_nutricional = $id_info_nutricional;
            return $this;
        }

        //get e set tipo
        public function gettipo()
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): Info_nutricional
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set qtd nutrientes
        public function getquantidade_nutrientes()
        {
            return $this->quantidade_nutrientes;
        }
        public function setquantidade_nutrientes(int $quantidade_nutrientes): Info_nutricional
        {
            $this->quantidade_nutrientes = $quantidade_nutrientes;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Info_nutricional
        {
            $this->descricao = $descricao;
            return $this;
        }

        //get e set id_produto
        public function getid_produto()
        {
            return $this->id_produto;
        }
        public function setid_produto(int $id_produto): Info_nutricional
        {
            $this->id_produto = $id_produto;
            return $this;
        }

        //get e set id_extra
        public function getid_extra()
        {
            return $this->id_extra;
        }
        public function setid_extra(int $id_extra): Info_nutricional
        {
            $this->id_extra = $id_extra;
            return $this;
        }
    }
?>
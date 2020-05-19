<?php

namespace App\Models;

    final class Info_nutricional
    {
        private int $id_info_nutricional;
        private string $tipo;
        private string $quantidade_nutrientes;
        private string $descricao;

        public function Info_nutricional() {}

        //get e set id
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
        public function setquantidade_nutrientes(string $quantidade_nutrientes): Info_nutricional
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
    }
?>
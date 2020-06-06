<?php

namespace App\Models;

    final class Extra
    {
        private int $id_extra;
        private string $nome;
        private string $tipo;
        private float $preco;

        public function Extra(){ }

        public function get_id_extra(){
            return $this->id_extra;
        }

        public function set_id_extra($id_extra): Extra{
            $this->id_extra = $id_extra;
            return $this;
        }

        public function get_nome(){
            return $this->nome;
        }

        public function set_nome($nome): Extra{
            $this->nome = $nome;
            return $this;
        }

        public function get_tipo(){
            return $this->tipo;
        }

        public function set_tipo($tipo): Extra{
            $this->tipo = $tipo;
            return $this;
        }

        public function get_preco(){
            return $this->preco;
        }

        public function set_preco($preco): Extra{
            $this->preco = $preco;
            return $this;
        }
    }
?>
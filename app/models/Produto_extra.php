<?php

namespace App\Models;

    final class Produto_extra
    {
        private int $id_produto_extra;
        private int $quantidade;

        public function Produto_extra(){ }

        public function get_id_produto_extra(){
            return $this->id_produto_extra;
        }

        public function set_id_produto_extra($id_produto_extra): Produto_extra{
            $this->id_produto_extra = $id_produto_extra;
            return $this;
        }

        public function get_quantidade(){
            return $this->quantidade;
        }

        public function set_quantidade($quantidade): Produto_extra{
            $this->quantidade = $quantidade;
            return $this;
        }
    }
?>
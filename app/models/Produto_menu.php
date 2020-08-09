<?php

namespace App\Models;

    final class Produto_menu
    {
        private int $id_produto_menu;
        private int $quantidade;
        private int $id_menu;
        private int $id_produto;

        //get e set id_produto_menu
        public function get_id_produto_menu(): int
        {
            return $this->id_produto_menu;
        }
        public function set_id_produto_menu(int $id_produto_menu): self
        {
            $this->id_produto_menu = $id_produto_menu;
            return $this;
        }

        //get e set quantidade
        public function get_quantidade(): int
        {
            return $this->quantidade;
        }
        public function set_quantidade(int $quantidade): self
        {
            $this->quantidade = $quantidade;
            return $this;
        }

        //get e set id_menu
        public function get_id_menu(): int
        {
            return $this->id_menu;
        }
        public function set_id_menu(int $id_menu): self
        {
            $this->id_menu = $id_menu;
            return $this;
        }

        //get e set id_produto
        public function get_id_produto(): int
        {
            return $this->id_produto;
        }
        public function set_id_produto(int $id_produto): self
        {
            $this->id_produto = $id_produto;
            return $this;
        }
    }
?>
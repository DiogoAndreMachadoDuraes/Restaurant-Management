<?php

namespace App\Models;

    final class Produto_extra
    {
        private int $id_produto_extra;
        private int $quantidade;
        private int $id_extra;
        private int $id_produto;

        public function get_id_produto_extra(): int{
            return $this->id_produto_extra;
        }

        public function set_id_produto_extra(int $id_produto_extra): self{
            $this->id_produto_extra = $id_produto_extra;
            return $this;
        }

        public function get_quantidade(): int{
            return $this->quantidade;
        }

        public function set_quantidade(int $quantidade): self{
            $this->quantidade = $quantidade;
            return $this;
        }

        public function get_id_extra(): int{
            return $this->id_extra;
        }

        public function set_id_extra(int $id_extra): self{
            $this->id_extra = $id_extra;
            return $this;
        }

        public function get_id_produto(): int{
            return $this->id_produto;
        }

        public function set_id_produto(int $id_produto): self{
            $this->id_produto = $id_produto;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Produto
    {
        private int $id_produto;
        private string $nome;
        private int $quantidade;
        private string $descricao;
        private float $preco;

        public function Produto() {}

        //get e set id
        public function getid_produto()
        {
            return $this->id_produto;
        }
        public function setid_produto(int $id_produto): Produto
        {
            $this->id_produto = $id_produto;
            return $this;
        }
    
        //get e set nome do prato
        public function getnome()
        {
            return $this->nome;
        }
        public function setnome(string $nome): Produto
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set quantidade
        public function getquantidade()
        {
            return $this->quantidade;
        }
        public function setquantidade(int $quantidade): Produto
        {
            $this->quantidade = $quantidade;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Produto
        {
            $this->descricao = $descricao;
            return $this;
        }

        //get e set preco
        public function getpreco()
        {
            return $this->preco;
        }
        public function setpreco(float $preco): Produto
        {
            $this->preco = $preco;
            return $this;
        }
    }
?>
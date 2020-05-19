<?php

namespace App\Models;

    final class Prato
    {
        private int $id_prato;
        private string $nome;
        private int $quantidade;
        private string $descricao;
        private float $preco;

        public function Prato() {}

        //get e set id
        public function getid_prato()
        {
            return $this->id_prato;
        }
        public function setid_prato(int $id_prato): Prato
        {
            $this->id_prato = $id_prato;
            return $this;
        }
    
        //get e set nome do prato
        public function getnome()
        {
            return $this->nome;
        }
        public function setnome(string $nome): Prato
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set quantidade
        public function getquantidade()
        {
            return $this->quantidade;
        }
        public function setquantidade(int $quantidade): Prato
        {
            $this->quantidade = $quantidade;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Prato
        {
            $this->descricao = $descricao;
            return $this;
        }

        //get e set preco
        public function getpreco()
        {
            return $this->preco;
        }
        public function setpreco(float $preco): Prato
        {
            $this->preco = $preco;
            return $this;
        }
    }
?>
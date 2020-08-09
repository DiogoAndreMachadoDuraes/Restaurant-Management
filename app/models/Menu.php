<?php

namespace App\Models;

    final class Menu
    {
        private int $id_menu;
        private string $nome;
        private string $descricao;
        private string $tipo;
        private string $foto;
        private float $preco;
        private int $id_ementa;

        //get e set id
        public function getid_menu(): int
        {
            return $this->id_menu;
        }
        public function setid_menu(int $id_menu): self
        {
            $this->id_menu = $id_menu;
            return $this;
        }
    
        //get e set nome
        public function getnome(): string
        {
            return $this->nome;
        }
        public function setnome(string $nome): self
        {
            $this->nome = $nome;
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

        //get e set preço do menu
        public function getpreco(): float
        {
            return $this->preco;
        }
        public function setpreco(float $preco): self
        {
            $this->preco = $preco;
            return $this;
        }

        //get e set id ementa
        public function getid_ementa(): int
        {
            return $this->id_ementa;
        }
        public function setid_ementa(int $id_ementa): self
        {
            $this->id_ementa = $id_ementa;
            return $this;
        }
    }
?>
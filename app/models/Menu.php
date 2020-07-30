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

        public function Menu() {}

        //get e set id
        public function getid_menu()
        {
            return $this->id_menu;
        }
        public function setid_menu(int $id_menu): Menu
        {
            $this->id_menu = $id_menu;
            return $this;
        }
    
        //get e set nome
        public function getnome()
        {
            return $this->nome;
        }
        public function setnome(string $nome): Menu
        {
            $this->nome = $nome;
            return $this;
        }

        //get e set descricao
        public function getdescricao()
        {
            return $this->descricao;
        }
        public function setdescricao(string $descricao): Menu
        {
            $this->descricao = $descricao;
            return $this;
        }

        //get e set tipo
        public function gettipo()
        {
            return $this->tipo;
        }
        public function settipo(string $tipo): Menu
        {
            $this->tipo = $tipo;
            return $this;
        }

        //get e set foto
        public function getfoto()
        {
            return $this->foto;
        }
        public function setfoto(string $foto): Menu
        {
            $this->foto = $foto;
            return $this;
        }

        //get e set preço do menu
        public function getpreco()
        {
            return $this->preco;
        }
        public function setpreco(float $preco): Menu
        {
            $this->preco = $preco;
            return $this;
        }

        //get e set id ementa
        public function getid_ementa()
        {
            return $this->id_ementa;
        }
        public function setid_ementa(int $id_ementa): Menu
        {
            $this->id_ementa = $id_ementa;
            return $this;
        }
    }
?>
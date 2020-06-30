<?php

namespace App\Models;

    final class Ementa
    {
        private int $id_ementa;
        private string $nome;
        private string $descricao;
        private string $tipo;
        private string $foto;
        private float $preco;

        public function Ementa(){ }

        public function get_id_ementa(): int
        {
            return $this->id_ementa;
        }
        
        public function set_id_ementa(int $id_ementa): Ementa
        {
            $this->id_ementa = $id_ementa;
            return $this;
        }

        public function get_nome() : string
        {
            return $this->nome;
        }

        public function set_nome(string $nome): Ementa
        {
            $this->nome = $nome;
            return $this;
        }

        public function get_descricao() : string
        {
            return $this->descricao;
        }

        public function set_descricao(string $descricao): Ementa{
            $this->descricao = $descricao;
            return $this;
        }

        public function get_tipo() : string
        {
            return $this->tipo;
        }

        public function set_tipo(string $tipo): Ementa{
            $this->tipo = $tipo;
            return $this;
        }

        public function get_foto() : string
        {
            return $this->foto;
        }

        public function set_foto(string $foto): Ementa{
            $this->foto = $foto;
            return $this;
        }

        public function get_preco() : float
        {
            return $this->preco;
        }

        public function set_preco(float $preco): Ementa{
            $this->preco = $preco;
            return $this;
        }
    }
?>
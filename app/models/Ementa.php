<?php

namespace App\Models;

    final class Ementa
    {
        private int $id_ementa;
        private string $nome;
        private string $descricao;

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
    }
?>
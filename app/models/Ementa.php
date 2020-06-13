<?php

namespace App\Models;

    final class Ementa
    {
        private int $id_ementa;
        private string $nome;
        private string $descricao;

        public function Ementa(){ }

        public function get_id_ementa(){
            return $this->id_ementa;
        }
        
        public function set_id_ementa($id_ementa): Ementa{
            $this->id_ementa = $id_ementa;
            return $this;
        }

        public function get_nome()
        {
            return $this->nome;
        }

        public function set_nome($nome): Ementa{
            $this->nome = $nome;
            return $this;
        }

        public function get_descricao(){
            return $this->descricao;
        }

        public function set_descricao($descricao): Ementa{
            $this->descricao = $descricao;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Ementa
    {
        private int $id_ementa;
        private string $descricao;

        public function Ementa(){ }

        public function getId_ementa(){
            return $this->id_ementa;
        }
        
        public function setId_ementa($id_ementa): Ementa{
            $this->id_ementa = $id_ementa;
            return $this;
        }

        public function getDescricao(){
            return $this->descricao;
        }

        public function setDescricao($descricao): Ementa{
            $this->descricao = $descricao;
            return $this;
        }
    }
?>
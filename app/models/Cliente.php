<?php

namespace App\Models;

    final class Cliente
    {
        private int $id_cliente;
        private int $nif;

        public function Cliente(){ }

        public function getId_cliente(){
            return $this->id_cliente;
        }

        public function setId_cliente($id_cliente): Cliente{
            $this->id_cliente = $id_cliente;
            return $this;
        }

        public function getNif(){
            return $this->nif;
        }

        public function setNif($nif): Cliente{
            $this->nif = $nif;
            return $this;
        }
    }
?>
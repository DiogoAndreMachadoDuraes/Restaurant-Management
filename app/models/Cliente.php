<?php

namespace App\Models;

    final class Cliente
    {
        private int $id_cliente;
        private int $nif_cliente;

        public function Cliente(){ }

        public function getId_cliente(){
            return $this->id_cliente;
        }

        public function setId_cliente($id_cliente): Cliente{
            $this->id_cliente = $id_cliente;
            return $this;
        }

        public function getNif_cliente(){
            return $this->nif_cliente;
        }

        public function setNif_cliente($nif_cliente): Cliente{
            $this->nif = $nif_cliente;
            return $this;
        }
    }
?>
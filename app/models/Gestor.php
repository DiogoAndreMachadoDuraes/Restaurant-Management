<?php

namespace App\Models;

    final class Gestor
    {
        private int $id_gestor;
        private int $nif_gestor;
        
        public function Gestor() {}

        //get e set nif
        public function getNif_gestor()
        {
            return $this->nif_gestor;
        }
        public function setNif_gestor(int $nif_gestor): Gestor
        {
            $this->nif_gestor = $nif_gestor;
            return $this;
        }

        //get e set nome
        public function getId_gestor()
        {
            return $this->id_gestor;
        }
        public function setId_gestor(string $id_gestor): Gestor
        {
            $this->id_gestor = $id_gestor;
            return $this;
        }
    }
?>
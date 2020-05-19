<?php

namespace App\Models;

    final class Administrador
    {
        private int $id_administrador;
        
        public function Administrador() {}


        //get e set nome
        public function getid_administrador()
        {
            return $this->id_administrador;
        }
        public function setid_administrador(string $id_administrador): Administrador
        {
            $this->id_administrador = $id_administrador;
            return $this;
        }
    }
?>
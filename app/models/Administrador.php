<?php

namespace App\Models;

    final class Administrador extends Utilizador
    {
        private int $id_administrador;
        
        public function Administrador() {}


        //get e set nome
        public function getid_administrador()
        {
            return $this->id_administrador;
        }
        public function setid_administrador(int $id_administrador): Administrador
        {
            $this->id_administrador = $id_administrador;
            return $this;
        }
    }
?>
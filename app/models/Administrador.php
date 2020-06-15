<?php

namespace App\Models;

    final class Administrador extends Utilizador
    {
        private int $id_administrador;
        private int $id_utilizador;
        
        public function Administrador() {}


        //get e set id admin
        public function getid_administrador()
        {
            return $this->id_administrador;
        }
        public function setid_administrador(int $id_administrador): Administrador
        {
            $this->id_administrador = $id_administrador;
            return $this;
        }

        //get e set id utilizador
        public function getid_utilizador()
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): Administrador
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Administrador
    {
        private int $id_administrador;
        private int $id_utilizador;

        //get e set id admin
        public function getid_administrador(): int
        {
            return $this->id_administrador;
        }
        public function setid_administrador(int $id_administrador): self
        {
            $this->id_administrador = $id_administrador;
            return $this;
        }

        //get e set id utilizador
        public function getid_utilizador(): int
        {
            return $this->id_utilizador;
        }
        public function setid_utilizador(int $id_utilizador): self
        {
            $this->id_utilizador = $id_utilizador;
            return $this;
        }
    }
?>
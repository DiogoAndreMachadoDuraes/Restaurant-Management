<?php

namespace App\Models;
    
    final class RefeicaoSemanal
    {
        private int $id_semana;
        private string $dia;
        private string $hora;

        public function RefeicaoSemanal(){ }

        public function getId(){
            return $this->id_semana;
        }

        public function setId($id_semana): RefeicaoSemanal{
            $this->id_semana = $id_semana;
            return $this;
        }

        public function getDia(){
            return $this->dia;
        }

        public function setDia($dia): RefeicaoSemanal{
            $this->dia = $dia;
            return $this;
        }

        public function getHora(){
            return $this->hora;
        }

        public function setHora($hora): RefeicaoSemanal{
            $this->hora = $hora;
            return $this;
        }
    }
?>
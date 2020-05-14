<?php

namespace App\Models;
    
    final class Refeicao_Semanal
    {
        private int $id_refeicao_semanal;
        private string $dia;
        private string $hora;

        public function Refeicao_semanal(){ }

        public function getId_refeicao_semanal(){
            return $this->id_refeicao_semanal;
        }

        public function setId_refeicao_semanal($id_refeicao_semanal): Refeicao_semanal{
            $this->id_refeicao_semanal = $id_refeicao_semanal;
            return $this;
        }

        public function getDia(){
            return $this->dia;
        }

        public function setDia($dia): Refeicao_semanal{
            $this->dia = $dia;
            return $this;
        }

        public function getHora(){
            return $this->hora;
        }

        public function setHora($hora): Refeicao_semanal{
            $this->hora = $hora;
            return $this;
        }
    }
?>
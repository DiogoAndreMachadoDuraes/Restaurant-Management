<?php

namespace App\Models;
    
    final class Refeicao_semanal
    {
        private int $id_refeicao_semanal;
        private string $dia_semana;
        private string $data;
        private string $hora;
        private int $id_restaurante;
        private int $id_ementa;

        public function Refeicao_semanal(){ }

        public function get_id_refeicao_semanal(){
            return $this->id_refeicao_semanal;
        }

        public function set_id_refeicao_semanal($id_refeicao_semanal): Refeicao_semanal{
            $this->id_refeicao_semanal = $id_refeicao_semanal;
            return $this;
        }

        public function get_dia_semana(){
            return $this->dia_semana;
        }

        public function set_dia_semana($dia_semana): Refeicao_semanal{
            $this->dia_semana = $dia_semana;
            return $this;
        }

        public function get_data(){
            return $this->data;
        }

        public function set_data($data): Refeicao_semanal{
            $this->data = $data;
            return $this;
        }

        public function get_hora(){
            return $this->hora;
        }

        public function set_hora($hora): Refeicao_semanal{
            $this->hora = $hora;
            return $this;
        } 

        public function get_id_restaurante(){
            return $this->id_restaurante;
        }

        public function set_id_restaurante($id_restaurante): Refeicao_semanal{
            $this->id_restaurante = $id_restaurante;
            return $this;
        }

        public function get_id_ementa(){
            return $this->id_ementa;
        }

        public function set_id_ementa($id_ementa): Refeicao_semanal{
            $this->id_ementa = $id_ementa;
            return $this;
        }
    }
?>
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

        public function get_id_refeicao_semanal(): int{
            return $this->id_refeicao_semanal;
        }

        public function set_id_refeicao_semanal(int $id_refeicao_semanal): self{
            $this->id_refeicao_semanal = $id_refeicao_semanal;
            return $this;
        }

        public function get_dia_semana(): string{
            return $this->dia_semana;
        }

        public function set_dia_semana(string $dia_semana): self{
            $this->dia_semana = $dia_semana;
            return $this;
        }

        public function get_data(): string{
            return $this->data;
        }

        public function set_data(string $data): self{
            $this->data = $data;
            return $this;
        }

        public function get_hora(): string{
            return $this->hora;
        }

        public function set_hora(string $hora): self{
            $this->hora = $hora;
            return $this;
        } 

        public function get_id_restaurante(): int{
            return $this->id_restaurante;
        }

        public function set_id_restaurante(int $id_restaurante): self{
            $this->id_restaurante = $id_restaurante;
            return $this;
        }

        public function get_id_ementa(): int{
            return $this->id_ementa;
        }

        public function set_id_ementa(int $id_ementa): self{
            $this->id_ementa = $id_ementa;
            return $this;
        }
    }
?>
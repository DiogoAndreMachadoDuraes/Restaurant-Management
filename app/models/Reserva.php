<?php

namespace App\Models;

    final class Reserva
    {
        private int $id_reserva;
        private string $data;
        private string $hora;
        private int $quantidade_pessoas;
        private string $data_marcada;
        private string $hora_marcada;
        private string $estado;
        private int $id_cliente;

        public function get_id_reserva(): int{
            return $this->id_reserva;
        }

        public function set_id_reserva(int $id_reserva): self{
            $this->id_reserva = $id_reserva;
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

        public function get_quantidade_pessoas(): int{
            return $this->quantidade_pessoas;
        }

        public function set_quantidade_pessoas(int $quantidade_pessoas): self{
            $this->quantidade_pessoas = $quantidade_pessoas;
            return $this;
        }

        public function get_data_marcada(): string{
            return $this->data_marcada;
        }

        public function set_data_marcada(string $data_marcada): self{
            $this->data_marcada = $data_marcada;
            return $this;
        }

        public function get_hora_marcada(): string{
            return $this->hora_marcada;
        }

        public function set_hora_marcada(string $hora_marcada): self{
            $this->hora_marcada = $hora_marcada;
            return $this;
        }

        public function get_estado(): string{
            return $this->estado;
        }

        public function set_estado(string $estado): self{
            $this->estado = $estado;
            return $this;
        }

        public function get_id_cliente(): int{
            return $this->id_cliente;
        }

        public function set_id_cliente(int $id_cliente): self{
            $this->id_cliente = $id_cliente;
            return $this;
        }
    }
?>
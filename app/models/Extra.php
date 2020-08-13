<?php

namespace App\Models;

    final class Extra
    {
        private int $id_extra;
        private string $nome;
        private string $tipo;
        private string $foto;
        private float $preco;

        public function get_id_extra(): int{
            return $this->id_extra;
        }

        public function set_id_extra(int $id_extra): self{
            $this->id_extra = $id_extra;
            return $this;
        }

        public function get_nome(): string{
            return $this->nome;
        }

        public function set_nome(string $nome): self{
            $this->nome = $nome;
            return $this;
        }

        public function get_tipo(): string{
            return $this->tipo;
        }

        public function set_tipo(string $tipo): self{
            $this->tipo = $tipo;
            return $this;
        }

        public function get_foto(): string{
            return $this->foto;
        }

        public function set_foto(string $foto): self{
            $this->foto = $foto;
            return $this;
        }

        public function get_preco(): float{
            return $this->preco;
        }

        public function set_preco(float $preco): self{
            $this->preco = $preco;
            return $this;
        }
    }
?>
<?php

namespace App\Models;

    final class Token
    {
        private int $id_token;
        private string $token;
        private string $refresh_token;
        private string $expired_date;
        private int $id_utilizador;
        private bool $active;

        public function get_id_Token(): int{
            return $this->id_token;
        }

        public function set_id_Token($id_token): self{
            $this->id_token = $id_token;
            return $this;
        }

        public function get_token(): string{
            return $this->token;
        }

        public function set_token($token): self{
            $this->token = $token;
            return $this;
        }

        public function get_refresh_token(): string{
            return $this->refresh_token;
        }

        public function set_refresh_token($refresh_token): self{
            $this->refresh_token = $refresh_token;
            return $this;
        }

        public function get_expired_date(): string{
            return $this->expired_date;
        }

        public function set_expired_date($expired_date): self{
            $this->expired_date = $expired_date;
            return $this;
        }

        public function get_id_utilizador(): int{
            return $this->id_utilizador;
        }

        public function set_id_utilizador($id_utilizador): self{
            $this->id_utilizador = $id_utilizador;
            return $this;
        }

        public function get_active(): int{
            return $this->active;
        }

        public function set_active($active): self{
            $this->active = $active;
            return $this;
        }
    }
?>
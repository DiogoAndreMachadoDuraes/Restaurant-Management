<?php

namespace App\Models;

    final class Token
    {
        private int $id_token;
        private string $token;
        private string $refreshToken;
        private string $expiredDate;
        private int $id_utilizador;
        private bool $active;

        public function getId_Token(): int{
            return $this->id_token;
        }

        public function setId_Token($id_token): self{
            $this->id_token = $id_token;
            return $this;
        }

        public function getToken(): string{
            return $this->token;
        }

        public function setToken($token): self{
            $this->token = $token;
            return $this;
        }

        public function getRefreshToken(): string{
            return $this->refreshToken;
        }

        public function setRefreshToken($refreshToken): self{
            $this->refreshToken = $refreshToken;
            return $this;
        }

        public function getExpiredDate(): string{
            return $this->expiredDate;
        }

        public function setExpiredDate($expiredDate): self{
            $this->expiredDate = $expiredDate;
            return $this;
        }

        public function getId_Utilizador(): int{
            return $this->id_utilizador;
        }

        public function setId_Utilizador($id_utilizador): self{
            $this->id_utilizador = $id_utilizador;
            return $this;
        }

        public function getActive(): int{
            return $this->active;
        }

        public function setActive($active): self{
            $this->active = $active;
            return $this;
        }
    }
?>
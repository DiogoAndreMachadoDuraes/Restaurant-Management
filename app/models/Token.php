<?php

namespace App\Models;

    final class Token
    {
        private int $id_token;
        private string $token;
        private string $refreshToken;
        private string $expiredDate;
        private int $id_usuario;
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

        public function getId_Usuario(): int{
            return $this->id_usuario;
        }

        public function setId_Usuario($id_usuario): self{
            $this->id_usuario = $id_usuario;
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
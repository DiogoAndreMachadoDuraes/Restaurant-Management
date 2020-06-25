<?php

namespace App\DAO;

use App\Models\Token;

    class Token_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Token $token): void
        {
            $statement=$this->pdo
                ->prepare('INSERT INTO Token VALUES (
                    null, 
                    :token, 
                    :refresh_token, 
                    :expired_date, 
                    :id_utilizador,
                    :active
                    );');
            $statement->execute([
                'token' => $token->get_token(),
                'refresh_token' => $token->get_refresh_token(),
                'expired_date' => $token->get_expired_date(),
                'id_utilizador' => $token->get_id_Utilizador(),
                'active' => $token->get_active()
            ]);
        }

        public function Select(): array
        {
            $token = $this->pdo
                ->query ('SELECT * From Token;')
                -> fetchAll(\PDO::FETCH_ASSOC);
            return $token;
        }

        public function Update_active(Token $token): void
        {
            $statement=$this->pdo
                ->prepare('UPDATE Token set active=:active Where refresh_token=:refresh_token');
            $statement->execute([
                'refresh_token' => $token->get_refresh_token(),
                'active' => $token->get_active()
            ]);
        }

        public function Delete(Token $token): void
        {
            $statement=$this->pdo
                ->prepare('DELETE FROM Token WHERE id_token = :id_token');
            $statement->execute([
                'id_token' => $token->get_id_token(),
            ]);
        }

        public function Verify_refresh_token(string $refresh_token): bool
        {
            $statement=$this->pdo
                ->prepare('SELECT id_token From Token WHERE refresh_token = :refresh_token AND active = 1;');
            $statement->bindParam('refresh_token', $refresh_token);
            $statement->execute();
            $token=$statement->fetchAll(\PDO::FETCH_ASSOC);
            return count($token)===0 ? false:true ;
        }
    }
?>
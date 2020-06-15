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
                ->prepare('Insert INTO Token (token, refresh_token, expired_date, id_utilizador) VALUES (:token, :refreseh_token, :expired_date, :id_utilizador);');
            $statement->execute([
                'token' => $token->get_token(),
                'refresh_token' => $token->get_refresh_token(),
                'expired_date' => $token->get_expired_date(),
                'id_utilizador' => $token->get_id_Utilizador(),
                'active' => $token->get_active()
            ]);
        }

        public function verifyRefreshToken(string $refresh_token): bool
        {
            $statement=$this->pdo
                ->prepare('Select id_token From Token WHERE refresh_token = :refreseh_token AND active = 1;');
            $statement->bindParam('refresh_token', $refresh_token);
            $statement->execute();
            $token=$statement->fetchAll(\PDO::FETCH_ASSOC);
            return count($token)==0 ? false:true ;
        }
    }
?>
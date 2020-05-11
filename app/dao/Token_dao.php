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
                ->prepare('Insert INTO token (token, refreshToken, expiredDate, id_utilizador) VALUES (:token, :refresehToken, :expiredDate, :id_utilizador);');
            $statement->execute([
                'token' => $token->getToken(),
                'refreshToken' => $token->getRefreshToken(),
                'expiredDate' => $token->getExpiredDate(),
                'id_utilizador' => $token->getId_Utilizador(),
                'active' => $token->getActive()
            ]);
        }

        public function verifyRefreshToken(string $refreshToken): bool
        {
            $statement=$this->pdo
                ->prepare('Select id From Token WHERE refreshToken = :refresehToken AND active = 1;');
            $statement->bindParam('refreshToken', $refreshToken);
            $statement->execute();
            $token=$statement->fetchAll(\PDO::FETCH_ASSOC);
            return count($token)==0 ? false:true ;
        }
    }
?>
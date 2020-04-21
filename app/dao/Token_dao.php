<?php

namespace App\DAO;

use App\Models\Token;
use ConnectionDB;

    class Token_dao extends ConnectionDB
    {
        public function __construct(){
            parent::__construct();
        }

        public function Insert(Token $token): void
        {
            $statement=$this->pdo
                ->prepare('Insert INTO token (token, refreshToken, expiredDate, id_usuario) VALUES (:token, :refresehToken, :expiredDate, :id_usuario);');
            $statement->execute([
                'token' => $token->getToken(),
                'refreshToken' => $token->getRefreshToken(),
                'expiredDate' => $token->getExpiredDate(),
                'id_usuario' => $token->getId_Usuario(),
                'active' => $token->getActive()
            ]);
        }

        public function verifyRefreshToken(string $refreshToken): bool
        {
            $statement=$this->pdo
                ->prepare('Select id From Token WHERE refreshToken = :refresehToken AND active = 1;');
            $statement->bindParam('refreshToken', $refreshToken);
            $statement->execute();
            $token=$statement->fecthAll(\PDO::FETCH_ASSOC);
            return count($token)==0 ? false:true ;
        }
    }
?>
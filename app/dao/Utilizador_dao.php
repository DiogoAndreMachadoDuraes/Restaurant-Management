<?php

namespace App\DAO;
use App\Models\Utilizador;

class Utilizador_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $utilizador = $this->pdo
        ->query ('SELECT
            id_utilizador,
            nome,
            telefone,
            email,
            morada,
            password,
            tipo
        From utilizador;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $utilizador;
    }

    public function Insert (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO utilizador values(
            :id_utilizador,
            :nome,
            :telefone,
            :email,
            :morada,
            :password,
            :tipo
        );');
        $statement->execute([
            'id_utilizador' => $utilizador->getId_utilizador(),
            'nome' => $utilizador->getNome(),
            'telefone' => $utilizador->getTelefone(),
            'email' => $utilizador->getEmail(),
            'morada' => $utilizador->getMorada(),
            'password' => $utilizador->getPassword(),
            'tipo' => $utilizador->getTipo()
        ]);
    }

    public function Update (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO utilizador values(
            :id_utilizador,
            :nome,
            :telefone,
            :email,
            :morada,
            :password,
            :tipo
        );');
        $statement->execute([
            'id_utilizador' => $utilizador->getId_utilizador(),
            'nome' => $utilizador->getNome(),
            'telefone' => $utilizador->getTelefone(),
            'email' => $utilizador->getEmail(),
            'morada' => $utilizador->getMorada(),
            'password' => $utilizador->getPassword(),
            'tipo' => $utilizador->getTipo()
        ]);
    }

    public function Delete (int $id_utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM utilizador WHERE id_utilizador = :id_utilizador');
       
        $statement->execute([
            'id_utilizador' => $id_utilizador
            ]);
    } 
    
    public function SelectByEmail (string $email): ?Utilizador
    {
        $statement = $this->pdo
            ->prepare ('SELECT
                    id_utilizador,
                    nome,
                    telefone,
                    email,
                    morada,
                    password,
                    tipo
                From utilizador
                where email=:email');
        $statement->bindParam('email', $email);
        $statement->execute();
        $utilizador=$statement->fetchAll(\PDO::FETCH_ASSOC);
        $utilizador= new Utilizador();
        if(count($utilizador)==0){
            $utilizador->setId_utilizador($utilizador[0]['id_utilizador'])
                ->setNome($utilizador[0]['nome'])
                ->setTelefone($utilizador[0]['telefone'])
                ->setEmail($utilizador[0]['email'])
                ->setMorada($utilizador[0]['morada'])
                ->setPassword($utilizador[0]['password'])
                ->setTipo($utilizador[0]['tipo']);
            return $utilizador;
        }
        return null;
    }
}
?>
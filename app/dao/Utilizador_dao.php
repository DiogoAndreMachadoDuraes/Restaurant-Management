<?php

namespace App\DAO;
use App\Models\Utilizador;
use ConnectionDB;

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
        nif_utilizador,
        nome,
        email,
        password
    From utilizador;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $utilizador;
    }

    public function Insert (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO utilizador values(
            :nif_utilizador,
            :nome,
            :email,
            :password
        );');
        $statement->execute([
            'nif_utilizador' => $utilizador->getNif_utilizador(),
            'nome' => $utilizador->getNome(),
            'email' => $utilizador->getEmail(),
            'password' => $utilizador->getPassword()
        ]);
    }

    public function Update (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO utilizador values(
            :nif_utilizador,
            :nome,
            :email,
            :password
        );');
        $statement->execute([
            'nif_utilizador' => $utilizador->getNif_utilizador(),
            'nome' => $utilizador->getNome(),
            'email' => $utilizador->getEmail(),
            'password' => $utilizador->getPassword()
        ]);
    }

    public function Delete (int $nif_utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM utilizador WHERE nif_utilizador = :nif_utilizador');
       
        $statement->execute([
            'nif_utilizador' => $nif_utilizador
            ]);
    }   
}
?>
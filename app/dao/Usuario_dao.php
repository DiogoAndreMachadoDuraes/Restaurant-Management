<?php

namespace App\DAO;
use App\Models\Usuario;
use ConnectionDB;

class Usuario_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $usuario = $this->pdo
        ->query ('SELECT
        nif_usuario,
        nome,
        email,
        password
    From usuario;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $usuario;
    }

    public function Insert (Usuario $usuario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO usuario values(
            :nif_usuario,
            :nome,
            :email,
            :password
        );');
        $statement->execute([
            'nif_usuario' => $usuario->getNif_usuario(),
            'nome' => $usuario->getNome(),
            'email' => $usuario->getEmail(),
            'password' => $usuario->getPassword()
        ]);
    }

    public function Update (Usuario $usuario): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO usuario values(
            :nif_usuario,
            :nome,
            :email,
            :password
        );');
        $statement->execute([
            'nif_usuario' => $usuario->getNif_usuario(),
            'nome' => $usuario->getNome(),
            'email' => $usuario->getEmail(),
            'password' => $usuario->getPassword()
        ]);
    }

    public function Delete (int $nif_usuario): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM usuario WHERE nif_usuario = :nif_usuario');
       
        $statement->execute([
            'nif_usuario' => $nif_usuario
            ]);
    }   
}
?>
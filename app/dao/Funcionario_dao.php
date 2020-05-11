<?php

namespace App\DAO;
use App\Models\Funcionario;

class Funcionario_dao extends ConnectionDB
{
    public function __construct()
    {
        parent::__construct();
    }

    public function Select (): array
    {
        $funcionario = $this->pdo
            ->query ('SELECT
                id_func,
                nif_func,
                nome,
                telefone,
                email
                From funcionaio;')
            ->fetchAll(\PDO::FETCH_ASSOC);

        return $funcionario;
    }

    public function Insert (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO funcionario values(
            :id_fun,
            :nif_func,
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_func' => $funcionario->getId_func(),
            'nif_func' => $funcionario->getNif_func(),
            'nome' => $funcionario->getNome(),
            'telefone' => $funcionario->getTelefone(),
            'email' => $funcionario->getEmail()
        ]);
    }

    public function Update (Funcionario $funcionario): void
    {
        $statement = $this->pdo
        ->prepare ('UPDATE INTO funcionario values(
            :id_func,
            :nif_func
            :nome,
            :telefone,
            :email
        );');
        $statement->execute([
            'id_func' => $funcionario->getId_func(),
            'nif_func' => $funcionario->getNif_func(),
            'nome' => $funcionario->getNome(),
            'telefone' => $funcionario->getTelefone(),
            'email' => $funcionario->getEmail()
        ]);
    }

    public function Delete (int $id_func): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM funcionario WHERE id_func = :id_func');
       
        $statement->execute([
            'id_func' => $id_func()
        ]);
    }       
}
?>
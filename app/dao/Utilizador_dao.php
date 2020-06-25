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
            tipo,
            foto,
            nif
        From Utilizador;')
        -> fetchAll(\PDO::FETCH_ASSOC);

        return $utilizador;
    }

    public function Insert (Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('INSERT INTO Utilizador values(
            null,
            :nome,
            :telefone,
            :email,
            :morada,
            :password,
            :tipo,
            :foto,
            :nif
        );');
        $statement->execute([
            'nome' => $utilizador->getnome(),
            'telefone' => $utilizador->gettelefone(),
            'email' => $utilizador->getemail(),
            'morada' => $utilizador->getmorada(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo(),
            'foto' => $utilizador->getfoto(),
            'nif' => $utilizador->getnif()
        ]);
    }

    public function Update (Utilizador $utilizador): void
    {
        $statement = $this->pdo
            ->prepare('UPDATE Utilizador set nome=:nome , telefone=:telefone , email=:email , morada=:morada , password=:password , tipo=:tipo , foto=:foto , nif=:nif Where id_utilizador=:id_utilizador');
        $statement->execute([
            'id_utilizador' => $utilizador->getid_utilizador(),
            'nome' => $utilizador->getnome(),
            'telefone' => $utilizador->gettelefone(),
            'email' => $utilizador->getemail(),
            'morada' => $utilizador->getmorada(),
            'password' => $utilizador->getpassword(),
            'tipo' => $utilizador->gettipo(),
            'foto' => $utilizador->getfoto(),
            'nif' => $utilizador->getnif()
            ]);
    }

    public function Delete ( Utilizador $utilizador): void
    {
        $statement = $this->pdo
        ->prepare ('DELETE FROM Utilizador WHERE id_utilizador = :id_utilizador');
       
        $statement->execute([
            'id_utilizador' => $utilizador -> getid_utilizador()
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
                    tipo,
                    foto,
                    nif
                From Utilizador
                where email=:email');
        $statement->bindParam('email', $email);
        $statement->execute();
        $utilizadores=$statement->fetchAll(\PDO::FETCH_ASSOC);
        if(count($utilizadores)!==0)
            $utilizador= new Utilizador();
            $utilizador->setid_utilizador($utilizadores[0]['id_utilizador'])
            ->setnome($utilizadores[0]['nome'])
            ->settelefone($utilizadores[0]['telefone'])
            ->setemail($utilizadores[0]['email'])
            ->setmorada($utilizadores[0]['morada'])
            ->setpassword($utilizadores[0]['password'])
            ->settipo($utilizadores[0]['tipo'])
            ->setfoto($utilizadores[0]['foto'])
            ->setnif($utilizadores[0]['nif']);
            return $utilizador;
        return null;
    }
}
?>
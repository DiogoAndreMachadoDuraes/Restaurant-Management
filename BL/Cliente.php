<?php

    include_once 'DAL/Cliente_DAL.php';

    class Cliente
    {
        public int $nif;
        public string $nome;
        public string $telefone;
        public string $email;
        public string $morada;

        public function Cliente()
        {
            $this->nif = $Nif;
            $this->nome = $Nome;
            $this->telefone = $Telefone;
            $this->email = $Email;
            $this->morada = $Morada;
        }

        public function CreateTable()
        {
            Cliente_DAL::CreateTable();
        }

        public function Insert($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            Cliente_DAL::Insert($Nif, $Nome, $Telefone, $Email, $Morada);
        }

        public function Select()
        {
            Cliente_DAL::Select();
        }

        public function Update($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            Cliente_DAL::Update($Nif, $Nome, $Telefone, $Email, $Morada);
        }

        public function Delete($Nif, $Nome, $Telefone, $Email, $Morada)
        {
            Cliente_DAL::Delete($Nif, $Nome, $Telefone, $Email, $Morada);
        }

    }

?>
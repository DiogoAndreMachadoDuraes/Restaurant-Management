<?php

namespace App\DAO;

   use PDOException;

   abstract class ConnectionDB
   {
      protected $pdo;

      public function __construct()
      {
         /*$host=getenv('ementarestauracao_HOST=');
         $user=getenv('ementarestauracao_USER=');
         $pass=getenv('ementarestauracao_PASSWORD=');
         $dbname=getenv('ementarestauracao_DBNAME=');
         $port=getenv('ementarestauracao_PORT=');*/

         $host='178.62.212.71';
         $user='rh_user';
         $pass='rFrH2016';
         $dbname='ementarestauracao';
         $port='3306';
         
         try{
            $dsn="mysql:host={$host};dbname={$dbname};port={$port}";
            $this->pdo= new \PDO($dsn, $user, $pass, array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->pdo->setAttribute(
               \PDO::ATTR_ERRMODE,
               \PDO::ERRMODE_EXCEPTION
            );
            $dsn = null;
         } catch (PDOException $e){
            echo "<h2>Erro na conexão à base de dados</h2> <br>", "Código: ", $e->getCode(), "<br>", "Mensagem para o administrador: ", $e->getMessage(), "<br>", 
            "Mensagem para o utilizador: ";
            die("Por favor contacte o administrador!");
         }
      }
   }
?>
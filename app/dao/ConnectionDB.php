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
         $port=getenv('ementarestauracao_PORT=');
         
         $dsn="mysql:host={$host};dbname={$dbname};port={$port}";*/
         try{
            $dsn="mysql:host=178.62.212.71;dbname=ementarestauracao;port=3306";
            $this->pdo= new \PDO($dsn, 'rh_user', 'rFrH2016', array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $this->pdo->setAttribute(
               \PDO::ATTR_ERRMODE,
               \PDO::ERRMODE_EXCEPTION
            );
         } catch (PDOException $e){
            die("Não foi possível a conexão com a base de dados... Contacte o administrador!");
         }
      }
   }
?>
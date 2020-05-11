<?php

   namespace App\DAO;
   
   abstract class ConnectionDB
   {
      protected $pdo;

      public function __construct()
      {
         /*$host=getenv('ementasrestauracao_HOST=');
         $user=getenv('ementasrestauracao_USER=');
         $pass=getenv('ementasrestauracao_PASSWORD=');
         $dbname=getenv('ementasrestauracao_DBNAME=');
         $port=getenv('ementasrestauracao_PORT=');
         
         $dsn="mysql:host={$host};dbname={$dbname};port={$port}";*/
         $dsn="mysql:host=178.62.212.71;dbname=ementasrestauracao;port=3306";

         $this->pdo= new \PDO($dsn, 'rh_user', 'rFrH2016');
         $this->pdo->setAttribute(
            \PDO::ATTR_ERRMODE,
            \PDO::ERRMODE_EXCEPTION
         );
      }
   }
?>
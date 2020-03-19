<?php

   class ConectionDB
   {
      public function ConectionDB(){ }

      public static function Connect()
      {
         $con = mysqli_connect("localhost", "root", "", "ementas_de_restauracao");

         if ($con->connect_error) { // Verificar conexão
            die("Falha na conexao: " . $con->connect_error);
         }
         else{
            echo "Conexao valida", "<br>";
         }
         return $con;
      }
   }
?>
<?php

//criaçao da classe menu

class menu
{                                
  public int $numero_menu;
  public double $valormenu;
  public string $descricao;

   public function alergenio()
   {
     $this->numero_menu = $numero_menu;
     $this->valormenu = $valormenu;
     $this->descricao = $descricao;
   }

   public function CreatTable()
   {
    $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

    $sql = "CREATE TABLE Menu ( numero_menu  INT(50), valormenu VARCHAR(50), descricao VARCHAR(50), PRIMARY KEY (numero_menu))";
    if ($con->query($sql) === TRUE){
        echo "tabela menu criada";
    } else{
        echo "Erro a criar a tabela: " . $con->error;
      }
      mysqli_close($con);
   }
    
   //Select
    
     public function Select ()
     {
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     $sql = "SELECT * FROM menu";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
     }
     echo "<br>";
     while ($arr=mysqli_fetch_array($result)){
         echo "
         <table>
         <tr>
           <th>".$arr['numero_menu']."</th>
           <th>".$arr['valormenu']."</th> 
           <th>".$arr['descricao']."</th>
         </tr>
         </table> ";
         //echo $arr["numero_menu"] . ' - ' . $arr["valormenu"] . ' - ' . $arr["descricao"] . ' <br>';
       }
     mysqli_close($con);
     }
 
     //Update
 
   public function Update ($numero_menu, $valormenu, $descricao)
     {
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     $sql = "UPDATE menu SET valormenu=@valormenu, descricao=@descricao  WHERE numero_menu=@numero_menu ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
     mysqli_close($con);
     }
 
     //Insert
 
     public function Insert ($numero_menu, $valormenu, $descricao)
     {

      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

     if(!$con) { trigger_error(mysqli_connect_error());}
 
     $sql = "INSERT INTO menu (numero_menu, valormenu, descricao) VALUES (@numero_menu, @valormenu, @descricao) ";
     $result = mysqli_query($con, $sql);
     if(!$result){
         die('Could not query:'.mysqli_error($con));
       }
       mysqli_close($con);
     }
 
       //Delete
 
       public function Delete ($numero_menu, $valormenu, $descricao)
     {  
      $con=new mysqli("localhost","root", "","ementasderestaurante") or die("Falha na conexao:");

       if(!$con) { trigger_error(mysqli_connect_error());}
 
       $sql = "DELETE FROM menu WHERE numero_menu=@numero_menu AND valormenu=@valormenu AND descricao=@descricao";
       $result = mysqli_query($con, $sql);
       if(!$result){
           die('Could not query:'.mysqli_error($con));
       }
         mysqli_close($con);
     }
} 
?>

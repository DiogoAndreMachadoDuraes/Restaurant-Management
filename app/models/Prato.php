<?php

namespace App\Models;

final class Prato
{
    private int $id_prato;
    private string $nomeprato;
    private int $quantidade;
    private string $descricao;
    private float $preco;

    public function Prato() {}

    //get e set id
    public function getId_prato()
    {
        return $this->id_prato;
    }
    public function setId_prato(int $id_prato): Prato
    {
        $this->id_prato = $id_prato;
        return $this;
    }
   
    //get e set nome do prato
    public function getNomeprato()
    {
        return $this->nomeprato;
    }
    public function setNomeprato(string $nomeprato): Prato
    {
        $this->nomeprato = $nomeprato;
        return $this;
    }

    //get e set quantidade
    public function getQuantidade()
    {
        return $this->quantidade;
    }
    public function setQuantidade(int $quantidade): Prato
    {
        $this->quantidade = $quantidade;
        return $this;
    }

    //get e set descricao
    public function getDescricao()
    {
        return $this->descricao;
    }
    public function setDescricao(string $descricao): Prato
    {
        $this->descricao = $descricao;
        return $this;
    }

    //get e set preco
    public function getPreco()
    {
        return $this->preco;
    }
    public function setPreco(float $preco): Prato
    {
        $this->preco = $preco;
        return $this;
    }
}
?>
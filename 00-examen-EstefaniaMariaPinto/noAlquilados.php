<?php
$confirm = $_REQUEST["confirm"];

$datos = '[
{
  "codigo": "2",
  "marca": "BMW"
},
{
  "codigo": "4",
  "marca": "Hyundai"
},
{
  "codigo": "6",
  "marca": "Jaguar"
},
{
  "codigo": "7",
  "marca": "Kia"
},
{
  "codigo": "8",
  "marca": "Nissan"
},
{
  "codigo": "9",
  "marca": "Renault"
},
{
  "codigo": "10",
  "marca": "Volswagen"
}
]
';

if ($confirm == "CONFIRMADO") {
	echo $datos;
} else {
	echo "";
}

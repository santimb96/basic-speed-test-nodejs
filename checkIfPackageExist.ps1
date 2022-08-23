
$npmValue = npm list --global speed-test;
$startTest = npm start

$checkIfEmpty = $npmValue[1].indexOf("(empty)");

if ($checkIfEmpty -eq -1){
  $startTest
} else {
  npm install --global speed-test
  $startTest
}

Read-Host -Prompt "Presiona Enter para salir"
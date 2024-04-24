// La fonction de calcul complexe
function toUpperCasef(a) {
  console.log(a)
    // const sum = a + b
    postMessage(a.toUpperCase());
}
  
  // Attendez un message du code principal
onmessage = function(messageEvent) {
    console.log(messageEvent?.data?.message)
    // Appelez la fonction de calcul avec les données reçues
    toUpperCasef(messageEvent?.data?.message);
};
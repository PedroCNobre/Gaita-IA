//Mensagem de espera
let label = "Carregando...";

// Modelo
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/VODyHPTiV/';

function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  classifyAudio();
}
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(1);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Emoji para as notas
  let emoji;
  let displayLabel = label; 
  
  switch (label) {
    case "1 Soprando - DO":
      emoji = "🚂";
      break;
    case "2 Soprando - MI":
      emoji = "🚂";
      break;
    case "3 Soprando - SOL":
      emoji = "🚂";
      break;
    case "4 Soprando - DO":
      emoji = "🚂";
      break;
    case "5 Soprando - MI":
      emoji = "🚂";
      break;
    case "6 Soprando - SOL":
      emoji = "🚂";
      break;
    case "7 Soprando - DO":
      emoji = "🚂";
      break;
    case "8 Soprando - MI":
      emoji = "🚂";
      break;
    case "9 Soprando - SOL":
      emoji = "🚂";
      break;
    case "10 Soprando - DO":
      emoji = "🚂";
      break;
    case "1 Puxando - RE":
      emoji = "💨";
      break;
    case "2 Puxando - SOL":
      emoji = "💨";
      break;
    case "3 Puxando - SI":
      emoji = "💨";
      break;
    case "4 Puxando - RE":
      emoji = "💨";
      break;
    case "5 Puxando - FA":
      emoji = "💨";
      break;
    case "6 Puxando - LA":
      emoji = "💨";
      break;
    case "7 Puxando - SI":
      emoji = "💨";
      break;
    case "8 Puxando - RE":
      emoji = "💨";
      break;
    case "9 Puxando - FA":
      emoji = "💨";
      break;
    case "10 Puxando - LA":
      emoji = "💨";
      break;
    default:
      emoji = "🎧";   
      break;
  }

  // Desenhar os emojis
  textSize(256);
  text(emoji, width / 2, height / 2);

  // Barulhos de fundo
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(displayLabel, width / 2, height - 16);

}
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  //Pegar a nota tocada
  label = results[0].label.trim();

}

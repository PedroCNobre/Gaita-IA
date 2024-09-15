// Mensagem de espera
let label = "Carregando...";

// Modelo
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/VODyHPTiV/';

// Imagens das notas
let images = {};

// Caminhos para as imagens (substitua pelos caminhos reais das suas imagens)
let imagePaths = {
  "1 Soprando - DO": '/source/1 sopra.png',
  "2 Soprando - MI": '/source/2 sopra.png',
  "3 Soprando - SOL": '/source/3 sopra.png',
  "4 Soprando - DO": '/source/4 sopra.png',
  "5 Soprando - MI": '/source/5 sopra.png',
  "6 Soprando - SOL": '/source/6 sopra.png',
  "7 Soprando - DO": '/source/7 sopra.png',
  "8 Soprando - MI": '/source/8 sopra.png',
  "9 Soprando - SOL": '/source/9 sopra.png',
  "10 Soprando - DO": '/source/10 sopra.png',
  "1 Puxando - RE": '/source/1 aspira.png',
  "2 Puxando - SOL": '/source/2 aspira.png',
  "3 Puxando - SI": '/source/3 aspira.png',
  "4 Puxando - RE": '/source/4 aspira.png',
  "5 Puxando - FA": '/source/5 aspira.png',
  "6 Puxando - LA": '/source/6 aspira.png',
  "7 Puxando - SI": '/source/7 aspira.png',
  "8 Puxando - RE": '/source/8 aspira.png',
  "9 Puxando - FA": '/source/9 aspira.png',
  "10 Puxando - LA": '/source/10 aspira.png'
};

function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
  
  // Carregar imagens
  for (let key in imagePaths) {
    images[key] = loadImage(imagePaths[key]);
  }
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

  // Desenhar a imagem correspondente à nota
  let imageToShow = images[label];
  
  if (imageToShow) {
    imageMode(CENTER);
    image(imageToShow, width / 2, height / 2);
  }
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // Pegar a nota tocada
  label = results[0].label.trim();
}

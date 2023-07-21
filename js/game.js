setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
var gambar = {
  logo: "Logo.png",
  startBtn: "tombolStart.png",
  cover: "Cover.png",
  playBtn: "btn-play.png",
  maxBtn: "maxBtn.png",
  minBtn: "minBtn.png",
  help: "Help.png",
  aboutBtn: "About.png",
  back: "btnBack.png",
  home: "Setting.png",
  exit: "Exit.png",
  resume: "Resume.png",
  idle: "Idle.png",
  run: "Run.png",
  jump: "Jump.png",
  fall: "Fall.png",
  hit: "Hit.png",
  tileset: "Terrain.png",
  bg: "Background.png",
  item1: "Apple.png",
  item2: "Bananas.png",
  musuh1Idle: "enemy1Idle.png",
  musuh1Run: "enemy1Run.png",
  musuh1Hit: "enemy1Hit.png",
  musuh2Hit: "enemy2Hit.png",
  musuh2Idle: "enemy2Idle.png",
  musuh2In: "enemy2In.png",
  musuh2Out: "enemy2Out.png",
  musuh2Run: "enemy2Run.png",
  musuh3Hit: "enemy3Hit.png",
  musuh3Idle: "enemy3Idle.png",
  musuh3Run: "enemy3Run.png",
  bendera: "Flag.png",
};
//file suara yang dipakai dalam game
var suara = {};

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen() {
  hapusLayar("#99627a");
  tampilkanGambar(dataGambar.logo, 600, 250);
  var startBtn = tombol(dataGambar.startBtn, 600, 350);

  if (tekan(startBtn)) {
    jalankan(halamanCover);
  }
}

function halamanCover() {
  hapusLayar("#99627a");
  gambarFull(dataGambar.cover);
  var playBtn = tombol(dataGambar.playBtn, 1100, 500);
  var howtoPlay = tombol(dataGambar.help, 100, 550);
  var about = tombol(dataGambar.aboutBtn, 50, 50);
  if (tekan(playBtn) || game.spasi) {
    if (game.aktif) {
      //mulai game dengan menambahkan transisi
      game.status = "mulai";
      game.level = "1";
      game.score = 0;
      game.warnaTransisi = "#116d6e";
      transisi("out", setAwal);
    }
  }
  // Tombol (How to Play)
  if (tekan(howtoPlay)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", setHow);
  }
  // Tombol (About)
  if (tekan(about)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", setAbout);
  }
  resizeBtn(1150, 50);
  efekTransisi();
}

// Transisi ke halaman (How to play)
function setHow() {
  transisi("in");
  jalankan(HowtoPlay);
}

// Transisi ke halaman (About)
function setAbout() {
  transisi("in");
  jalankan(about);
}

// Transisi kembali ke halaman cover
function backHome() {
  transisi("in");
  jalankan(halamanCover);
}

// Halaman (How to play)
function HowtoPlay() {
  hapusLayar("#99627a");
  teks("How to Play", 320, 100, "Cursive-bold-30pt-left-black");
  teks("Right Arrow : Go to Right", 270, 180, "Cursive-bold-20pt-left-black");
  teks("Left Arrow : Go to Left", 270, 230, "Cursive-bold-20pt-left-black");
  teks("Up Arrow : Jump", 270, 280, "Cursive-bold-20pt-left-black");
  teks("Cara Bermain", 720, 100, "Cursive-bold-30pt-left-black");
  teks(
    "Arah Kanan : Bergerak ke Kanan",
    670,
    180,
    "Cursive-bold-20pt-left-black"
  );
  teks(
    "Arah Kiri : Bergerak ke Kiri",
    670,
    230,
    "Cursive-bold-20pt-left-black"
  );
  teks("Arah Atas : Lompat", 670, 280, "Cursive-bold-20pt-left-black");
  teks("Enjoy Playing 👾", 450, 500, "Cursive-bold-32pt-left-black");
  var btnBack = tombol(dataGambar.back, 80, 80);
  if (tekan(btnBack)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", backHome);
  }
  efekTransisi();
}

// Halaman About
function about() {
  hapusLayar("#99627a");
  teks("About", 550, 100, "Cursive-bold-30pt-left-black");
  teks(
    "This game tell us about a guy named 'Craig', who has to get out of a place full of traps and various kind",
    100,
    180,
    "Cursive-bold-14pt-left-black"
  );
  teks(
    "of monsters. Craig is just and ordinary guy, but his always wear a pink clothes and his eyes look like crazy",
    100,
    205,
    "Cursive-bold-14pt-left-black"
  );
  teks(
    "people. Because of that his known as Crazy Pink Guy, or as we call it 'Craig'.",
    100,
    230,
    "Cursive-bold-14pt-left-black"
  );
  teks("Tentang", 520, 350, "Cursive-bold-30pt-left-black");
  teks(
    "Game ini bercerita tentang seseorang yang bernama 'Craig', yang harus keluar dari tempat yang penuh dengan",
    100,
    430,
    "Cursive-bold-14pt-left-black"
  );
  teks(
    "jebakan dan berbagai jenis monster. Craig hanyalah seseorang yang biasa saja, tapi dia selalu memakai pakaian",
    100,
    455,
    "Cursive-bold-14pt-left-black"
  );
  teks(
    "pink dan matanya terlihat seperti orang gila. Karena itu dia dikenal sebagai Crazy Pink Guy, atau kita menyebutnya",
    100,
    480,
    "Cursive-bold-14pt-left-black"
  );
  teks("'Craig'.", 100, 505, "Cursive-bold-14pt-left-black");
  var btnBack = tombol(dataGambar.back, 80, 80);
  if (tekan(btnBack)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", backHome);
  }
  efekTransisi();
}

function setAwal() {
  game.aktif = true;
  game.hero = setSprite(dataGambar.idle, 32, 32);
  game.hero.animDiam = dataGambar.idle;
  game.hero.animJalan = dataGambar.run;
  game.hero.animLompat = dataGambar.jump;
  game.hero.animJatuh = dataGambar.fall;
  game.hero.animMati = dataGambar.hit;
  game.skalaSprite = 2;
  //setPlatform(map_1, dataGambar.tileset, 32, game.hero);
  setPlatform(this["map_" + game.level], dataGambar.tileset, 32, game.hero);
  game.gameOver = ulangiPermainan;
  //set item
  setPlatformItem(1, dataGambar.item1);
  setPlatformItem(2, dataGambar.item2);
  //set enemy
  var musuh1 = {};
  musuh1.animDiam = dataGambar.musuh1Idle;
  musuh1.animJalan = dataGambar.musuh1Run;
  musuh1.animMati = dataGambar.musuh1Hit;
  // setPlatformEnemy(1, musuh1);
  var musuh2 = {};
  musuh2.animDiam = dataGambar.musuh1Idle;
  musuh2.animJalan = dataGambar.musuh1Run;
  musuh2.animMati = dataGambar.musuhHit;
  setPlatformEnemy(2, musuh2);
  var musuh3 = {};
  musuh3.animDiam = dataGambar.musuh3Idle;
  musuh3.animJalan = dataGambar.musuh3Run;
  musuh3.animMati = dataGambar.musuh3Hit;
  setPlatformEnemy(1, musuh3);
  //set trigger
  setPlatformTrigger(1, dataGambar.bendera);
  if (game.status == "mulai") {
    game.status = "main";
    mulaiPermainan();
  }
}

function mulaiPermainan() {
  jalankan(gameLoop);
  transisi("in");
}

function ulangiPermainan() {
  setAwal();
  game.aktif = true;
  game.score = 0;
  jalankan(gameLoop);
}

function gameLoop() {
  hapusLayar("#9c9695");
  if (game.kanan) {
    gerakLevel(game.hero, 3, 0);
  } else if (game.kiri) {
    gerakLevel(game.hero, -3, 0);
  }
  if (game.atas) {
    gerakLevel(game.hero, 0, -10);
  }

  latar(dataGambar.bg, 0, 0.5);
  buatLevel();
  cekItem();
  teks(game.score, 550, 60, "Monaco-bold-30pt-left-ungu");
  teks("Level " + game.level, 50, 60, "Monaco-bold-30pt-left-ungu");
  // Tombol setting dalam game
  const home = tombol(dataGambar.home, 1150, 50);
  if (tekan(home)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", setHome);
  }
  efekTransisi();
}

// Transisi ke halaman Setting
function setHome() {
  transisi("in");
  jalankan(pilihanHome);
}

// Halaman Setting
function pilihanHome() {
  hapusLayar("#99627a");
  teks("Do you want to Exit?", 400, 100, "Cursive-bold-30pt-left-black");
  var btnBack = tombol(dataGambar.back, 80, 80);
  var exit = tombol(dataGambar.exit, 470, 250);
  var resume = tombol(dataGambar.resume, 750, 250);
  if (tekan(btnBack)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", mulaiPermainan);
  }
  if (tekan(exit)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", backHome);
  }
  if (tekan(resume)) {
    game.warnaTransisi = "#116d6e";
    transisi("out", mulaiPermainan);
  }
  efekTransisi();
}

function cekItem() {
  if (game.itemID > 0) {
    tambahScore(10 * game.itemID);
    game.itemID = 0;
  }
  if (game.musuhID != 0) {
    tambahScore(25);
    game.musuhID = 0;
  }
  if (game.triggerID == 1) {
    game.triggerID = 0;
    game.aktif = false;
    transisi("out", naikLevel);
  }
}

function naikLevel() {
  game.level++;
  if (game.level >= 3) {
    transisi("in");
    jalankan(halamanCover);
  } else {
    game.status = "mulai";
    setAwal();
  }
}

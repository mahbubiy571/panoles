const exteriorURL = "assets/exterior.jpg";
const interiorURL = "assets/interior.jpg";

const panoramaExterior = new PANOLENS.ImagePanorama(exteriorURL);
const panoramaInterior = new PANOLENS.ImagePanorama(interiorURL);

const viewer = new PANOLENS.Viewer({
  output: "console",
  autoRotate: true,
  autoRotateSpeed: 0.5,
  controlBar: true,
});

const spotEnter = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);

spotEnter.position.set(4000, 100, -1500);
spotEnter.addHoverText("Enter House");

spotEnter.addEventListener("click", function () {
  viewer.setPanorama(panoramaInterior);
});

panoramaExterior.add(spotEnter);

const spotExit = new PANOLENS.Infospot(500, PANOLENS.DataImage.Arrow);

spotExit.position.set(4000, 0, -1000);
spotExit.addHoverText("Go Outside");

spotExit.addEventListener("click", function () {
  viewer.setPanorama(panoramaExterior);
});

panoramaInterior.add(spotExit);

viewer.add(panoramaExterior);
viewer.add(panoramaInterior);

viewer.setPanorama(panoramaExterior);

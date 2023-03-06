import "./App.css";
import Hero from "./components/Hero";
import React from "react";
import SceneInit from "./lib/SceneInit";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
function App() {
  // React.useEffect(() => {
  //   const test = new SceneInit("myThreeJsCanvas");
  //   test.initialize();
  //   test.animate();
  //   const gltfLoader = new GLTFLoader();
  //   gltfLoader.load("./assets/shiba/scene.gltf", (gltfScene) => {
  //     test.scene.add(gltfScene.scene);
  //   });
  // }, []);
  return (
    <div className="App">
      {/* <canvas id="myThreeJsCanvas"></canvas> */}
      <Hero />
    </div>
  );
}

export default App;

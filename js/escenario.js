const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const gltfLoader = new THREE.GLTFLoader();
// scene.background = new THREE.Color(0xfffff)

var loader = new THREE.TextureLoader();
loader.load("./img/fondo2.png", function(texture){
	scene.background = texture;
} );

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 40; 
camera.position.y = 30 ;
camera.position.x = 5;

//light
const light = new THREE.AmbientLight(0xfffffff, 2)
scene.add(light)

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//figura 3d
 gltfLoader.load("./Alex/scene.gltf",
 (gltf)=>{ 	
	var loaderObjeto = gltf.scene;
	loaderObjeto.scale.set(20,20,10);
	loaderObjeto.position.x = 10;
	const dControls1 = new THREE.DragControls([loaderObjeto], camera, renderer.domElement);
 	console.log('carga completa');
 	scene.add(loaderObjeto);
 }, ()=>{
 	console.log('cargando');
}, ()=>{
 	console.log('error');
}); 

gltfLoader.load("./dino/scene.gltf",
 (gltf)=>{ 	
	var loaderObjeto_dino = gltf.scene;
	loaderObjeto_dino.scale.set(35,35,15);
	loaderObjeto_dino.position.x = -32;       ;
	loaderObjeto_dino.position.z = -10;
	loaderObjeto_dino.rotation.x = 6;
	loaderObjeto_dino.rotation.y = 15;
	const dControls2 = new THREE.DragControls([loaderObjeto_dino], camera, renderer.domElement);
 	console.log('carga completa');
 	scene.add(loaderObjeto_dino);
 }, ()=>{
 	console.log('cargando');
}, ()=>{
 	console.log('error');
}); 
/* 
 gltfLoader.load("./villano/scene.gltf",
 (gltf)=>{ 	
	var loaderObjetoVillano = gltf.scene;
	loaderObjetoVillano.scale.set(2,2,1);
	loaderObjetoVillano.position.x = 30;
	loaderObjetoVillano.position.y = 33;
	const dControls3 = new THREE.DragControls([loaderObjetoVillano], camera, renderer.domElement);
	console.log('carga completa');
	scene.add(loaderObjetoVillano);
 }, ()=>{
 	console.log('cargando');
}, ()=>{
 	console.log('error');
});   */

 gltfLoader.load("./prueba/scene.gltf",
 (gltf)=>{ 	
	var loaderObjeto_prueba = gltf.scene;
	loaderObjeto_prueba.scale.set(190 , 190 ,40);
	loaderObjeto_prueba.position.x = 30;       
	loaderObjeto_prueba.position.y = 30;
	loaderObjeto_prueba.rotation.y = 75;
	const dControls4 = new THREE.DragControls([loaderObjeto_prueba], camera, renderer.domElement);
 	console.log('carga completa');
 	scene.add(loaderObjeto_prueba);
 }, ()=>{
 	console.log('cargando');
}, ()=>{
 	console.log('error');
});  

function animate() {
	requestAnimationFrame( animate );
	/* loaderObjeto_dino.rotation.y += 0.1; */
	renderer.render (scene, camera);
 }
 animate();


const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById('bg3d').appendChild(renderer.domElement);

const geo=new THREE.TorusKnotGeometry(1,0.3,100,16);
const mat=new THREE.MeshBasicMaterial({wireframe:true,color:0x00ff9f});
const mesh=new THREE.Mesh(geo,mat);
scene.add(mesh);
camera.position.z=4;

function animate(){
requestAnimationFrame(animate);
mesh.rotation.x+=0.01;
mesh.rotation.y+=0.01;
renderer.render(scene,camera);
}
animate();

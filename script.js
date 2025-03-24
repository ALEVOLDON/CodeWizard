// Code Rain Effect
const rainCanvas = document.getElementById('code-rain');
const rainCtx = rainCanvas.getContext('2d');
rainCanvas.width = window.innerWidth;
rainCanvas.height = window.innerHeight;

const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 14;
const columns = rainCanvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawRain() {
    rainCtx.fillStyle = 'rgba(10, 10, 15, 0.05)';
    rainCtx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);
    rainCtx.fillStyle = '#00ffcc';
    rainCtx.font = `${fontSize}px 'IBM Plex Mono'`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        rainCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > rainCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawRain, 50);

// Hero Lines Animation
const linesCanvas = document.getElementById('hero-lines');
const linesCtx = linesCanvas.getContext('2d');
linesCanvas.width = window.innerWidth;
linesCanvas.height = window.innerHeight;

class Line {
    constructor() {
        this.x = Math.random() * linesCanvas.width;
        this.y = Math.random() * linesCanvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.length = Math.random() * 50 + 20;
        this.angle = Math.random() * Math.PI * 2;
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += (Math.random() - 0.5) * 0.1;

        if (this.x < 0 || this.x > linesCanvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > linesCanvas.height) this.vy *= -1;
    }

    draw() {
        linesCtx.beginPath();
        linesCtx.moveTo(this.x, this.y);
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;
        linesCtx.lineTo(endX, endY);
        linesCtx.strokeStyle = this.color;
        linesCtx.lineWidth = 1;
        linesCtx.stroke();
    }
}

const lines = Array(20).fill().map(() => new Line());

function drawLines() {
    linesCtx.fillStyle = 'rgba(10, 10, 15, 0.1)';
    linesCtx.fillRect(0, 0, linesCanvas.width, linesCanvas.height);

    lines.forEach(line => {
        line.update();
        line.draw();
    });

    requestAnimationFrame(drawLines);
}

drawLines();

// Smooth Scroll for CTA
document.querySelector('.cta').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
});

// 3D Cube Function
function createCube(containerId, color, size = 60) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const container = document.getElementById(containerId);

    renderer.setSize(size, size);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: color, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.8 
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    return { renderer, scene, camera };
}

// About Cube
createCube('cube-container', 0x00ffcc, 250);

// Social Cubes
createCube('twitter-cube', 0x00ffcc);
createCube('github-cube', 0xb388ff);
createCube('email-cube', 0xff007a);

// Audio Control
const audio = document.getElementById('ambient-bg');
const audioControl = document.getElementById('audio-control');
audio.volume = 0.3;
audio.play().catch(() => {
    audioControl.textContent = 'Unmute';
});

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioControl.textContent = 'Mute';
    } else {
        audio.pause();
        audioControl.textContent = 'Unmute';
    }
});

// Resize handling
window.addEventListener('resize', () => {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
    linesCanvas.width = window.innerWidth;
    linesCanvas.height = window.innerHeight;
});

// Observer for section animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-in-out forwards';
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
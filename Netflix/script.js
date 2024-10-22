// Wait for the DOM content to load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Selecting the elements from the DOM
    const startCreatingButton = document.querySelector('.btn-red');
    const createNetflixInput = document.querySelector('input[type="text"]');
    const languageButton = document.querySelector('.btn');
    const faqItems = document.querySelectorAll('.faqbox');
    
    // Event listener for the "Start creating" button
    startCreatingButton.addEventListener('click', () => {
        const userName = createNetflixInput.value.trim();
        
        if (userName === '') {
            alert('Please enter a name to create Netflix.');
        } else {
            alert(`Welcome, ${userName}! Your custom Netflix has been created.`);
            // Add additional redirection or logic here if necessary
        }
    });

    // Event listener for the "English" language button
    languageButton.addEventListener('click', () => {
        alert('Switching to English page.');
        // Add the redirection logic to another language page if required
    });

    // FAQ expand/collapse logic
    faqItems.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('expanded');
            const isExpanded = faq.classList.contains('expanded');
            
            if (isExpanded) {
                faq.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                faq.querySelector('img').src = 'https://cdn.hugeicons.com/icons/minus-02-stroke-rounded.svg'; // Change icon to minus when expanded
            } else {
                faq.style.backgroundColor = 'rgba(86, 84, 84, 0.602)';
                faq.querySelector('img').src = 'https://cdn.hugeicons.com/icons/add-02-stroke-rounded.svg'; // Change icon back to plus when collapsed
            }
        });
    });



    


    // Optional: Rotating circle animation on hover in the footer
    const rotatingCircle = document.querySelector('.circle');
    rotatingCircle.addEventListener('mouseover', () => {
        rotatingCircle.style.animationDuration = '0.5s';
    });

    rotatingCircle.addEventListener('mouseleave', () => {
        rotatingCircle.style.animationDuration = '1s';
    });

    rotatingCircle.addEventListener('click', () => {
        rotatingCircle.style.animationDuration = '5s';
    });

    rotatingCircle.addEventListener('dblclick', () => {
        rotatingCircle.style.animationDuration = '';
    });
});



//3js code

document.addEventListener('DOMContentLoaded', () => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Set the size of the renderer and append to the body
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Move the camera away so we can see the text
    camera.position.z = 5;

    // Load a font to create the "Netflix" text
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

        // Create the text geometry
        const textGeometry = new THREE.TextGeometry('Netflix.com', {
            font: font, 
            size: 1,      // Size of the text
            height: 0.1,  // Depth of the text
            curveSegments: 18,
        });

        // Create a red material for the text (Netflix color)
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

        // Create a mesh for the text
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // Center the text on the screen
        textGeometry.center();

        // Add the text to the scene
        scene.add(textMesh);

        // Animation function to rotate the text
        function animate() {
            requestAnimationFrame(animate);

            // Rotate the text along x, y, and z axes
            textMesh.rotation.x += 0.03;
            textMesh.rotation.y += 0.08;
            textMesh.rotation.z += 0.01;

            // Render the scene with the updated camera view
            renderer.render(scene, camera);
        }

        // Start the animation
        animate();
    });
});



const navImage = document.querySelector('nav img');

navImage.addEventListener('click', () => {
    navImage.style.transform = 'rotate(180deg)';
});

navImage.addEventListener('mouseenter', () => {
    navImage.style.transform = 'scale(2)';
});

navImage.addEventListener('mousedown', () => {
    navImage.style.transform = '';
});

navImage.addEventListener('mouseleave', () => {
    navImage.style.transform = 'scale(1)';
});

navImage.addEventListener('dblclick', () => {
    navImage.src = 'https://example.com/new-image.png';
});

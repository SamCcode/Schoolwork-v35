const validPaths = '/home.html';

    const checkURLPath = () => {
        const currentPath = window.location.pathname;
        if (!validPaths.includes(currentPath)) {
            redirectToErrorPage();
        }
    };

    const redirectToErrorPage = () => {
        window.location.href = "error.html";
    };

    window.onload = checkURLPath;
    const imageContainer = document.getElementById("imageContainer");
    // Load JSON data using fetch
    fetch('dogImg.json')
    .then(response => response.json())
    .then(jsonData => {
        // Loop through the JSON data and create <img> elements for each image
        jsonData.forEach(imageData => {
            let el = document.createElement("article");
            el.innerHTML = (`
            <img src="${imageData.img}" class="">
                <h3>${imageData.name}</h3>
    
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            `);
          
          imageContainer.appendChild(el);
        });
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
    

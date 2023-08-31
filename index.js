

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

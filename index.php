<!DOCTYPE html>
<html>
<head>
    <title>My Tech Portfolio</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>My Tech Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Hi! I'm a tech enthusiast and I love to build things. I have experience in web development and programming. Check out my projects to see what I've been working on.</p>
        </section>

        <section id="projects">
            <h2>My Projects</h2>
            <ul>
                <li><a href="#">Project 1</a></li>
                <li><a href="#">Project 2</a></li>
                <li><a href="#">Project 3</a></li>
            </ul>
        </section>

        <section id="contact">
            <h2>Get in Touch</h2>
            <form action="submit.php" method="post">
                <input type="text" name="name" placeholder="Name">
                <input type="email" name="email" placeholder="Email">
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>Copyright © 2023 My Tech Portfolio</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

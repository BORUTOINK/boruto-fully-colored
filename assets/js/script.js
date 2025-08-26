/* style.css */
/* Reset basic styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  text-align: center;
  line-height: 1.6;
}

/* Logo */
#logo {
  display: block;
  margin: 20px auto;
  max-width: 400px;
  height: auto;
}

/* Videos */
.video-section {
  margin: 20px auto;
}
.video-section iframe {
  width: 90%;
  max-width: 800px;
  border: 3px solid #fff;
  border-radius: 10px;
}

/* Chapters */
main {
  margin: 30px auto;
  max-width: 900px;
}
main h2 {
  margin-bottom: 15px;
  font-size: 28px;
  color: #FFD700; /* Gold title for style */
}
main ul {
  list-style: none;
}
main ul li {
  margin: 15px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
main ul li img {
  width: 80px;
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #fff;
}

/* Footer */
footer {
  margin: 40px 0 20px;
  font-size: 16px;
}
footer a {
  color: #1DA1F2; /* Twitter blue */
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
    }

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: Arial, sans-serif;
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
  color: #FFD700; /* Gold title */
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
  width: 100px;
  height: auto;
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #fff;
}

/* Comments */
.comments {
  margin: 40px auto;
  max-width: 600px;
}
.comments h2 {
  margin-bottom: 10px;
  color: #FFD700;
}
.comments textarea {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 2px solid #fff;
  padding: 10px;
  font-size: 16px;
}
.comments button {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #FFD700;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}
.comments button:hover {
  background: #e6c200;
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

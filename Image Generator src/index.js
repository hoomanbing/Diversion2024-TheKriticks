import { Ai } from "@cloudflare/ai";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generate Image from Text</title>
<style>
html {
  font-family: 'Roboto Mono', monospace;
  line-height: 1.5;
  & * {
    font-size: 16px;
  }
}

body {
  /* Remove the nested body selector */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/minorproject-b38ff.appspot.com/o/CSS%20BG.png?alt=media&token=f0572730-e540-4d5c-ba9e-3949ecde7e64');
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.3;
  }
}


div#header {
  width: 100%;
  align-items: center;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #db9edb;
  padding: 0.75rem 0;
  border-radius: 0 0 10px 10px;

  & h1 {
    padding-left: 3rem;
    font-size: 1rem;
  }
  & h2 {
    padding-right: 40rem;
    font-size: 1rem;
  }

  & p {
    padding-right: 3rem;
    font-size: 1rem;
  }
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

img {
  max-width: 100vw; /* Ensure image width does not exceed viewport width */
  max-height: 60vh; /* Ensure image height does not exceed viewport height */
  width: auto; /* Maintain aspect ratio */
  height: auto; /* Maintain aspect ratio */
  display: block;
  margin: 0 auto; /* Center align the image */
}

/* Center the loading message */
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Adjust as needed */
}
</style>
</head>
<body>
<div id="header">
  <h1>The Kriticks</h1>
  <h2>Your AI Image Generator</h2>
</div>
<form id="imageForm">
  <label for="prompt">Enter Prompt:</label>
  <input type="text" id="prompt" name="prompt" placeholder="Enter text prompt...">
  <button type="submit">Generate Image</button>
</form>

<div class="result" id="imageResult"></div>

<script>
document.getElementById("imageForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  // Display "Loading..." message with animation
  const loadingMessage = document.getElementById("imageResult");
  loadingMessage.innerHTML = "Loading";
  const dotsInterval = setInterval(() => {
    loadingMessage.innerHTML += ".";
    if (loadingMessage.innerHTML.length > 12) {
      loadingMessage.innerHTML = "Loading";
    }
  }, 500);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    clearInterval(dotsInterval); // Stop the animation

    // Remove "Loading..." message
    loadingMessage.innerHTML = "";

    const data = await response.blob();
    const imageUrl = URL.createObjectURL(data);
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Generated Image";
    document.getElementById("imageResult").appendChild(img);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    loadingMessage.innerHTML = "Error loading image.";
  }
});
</script>
</body>
</html>

`));

app.post("/", async (c) => {
  const ai = new Ai(c.env.AI);

  const body = await c.req.json();
  const prompt = body.prompt || "cyberpunk cat";

  try {
    const response = await ai.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", {
      prompt,
    });

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    return new Response("Error generating image.", { status: 500 });
  }
});

app.onError((err, c) => {
  return c.text(err);
});

export default app;

# Diversion2024 - TheKriticks: Transcending Towards Education 4.0
Generative AI Service Palette. The Kriticks: Education 4.0 pinnacle. Seamlessly integrates 7 Cloudflare AI services for enhanced learning and Augmented Reality Service. 
Main project link: https://kd-homepage.vercel.app/
![Main page](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/76dbb514-a583-4821-a245-d07646986b49)

1. Encoder-Decoder Translator
This service employs state-of-the-art natural language processing algorithms to swiftly and accurately translate text across multiple languages. With this tool, users can effortlessly transcend language barriers, accessing educational content in their preferred language and fostering a more inclusive learning environment.

Model used - m2m100-1.2b : Multilingual encoder-decoder (seq-to-seq) model trained for Many-to-Many multilingual translation languages: english, chinese, french, spanish, arabic, russian, german, japanese, portuguese, hindi!

To use: https://krittika-ai-translator.krittika-das-cse-2021.workers.dev/
![Screenshot 2024-02-05 183044](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/e6255210-a6a0-42c3-9b6b-417212b853ce)

2. NLP Virtual Assistant
Experience personalized and dynamic learning with our innovative educational NLP Virtual Bot! Our service generates insightful microblogs tailored to your prompts, fostering a unique and engaging way to enhance your educational journey. Empower your learning experience with our cutting-edge technology, delivering concise and relevant content at your fingertips.

Model used - meta/llama-2-7b-chat-int8 : Quantized (int8) generative text model with 7 billion parameters from Meta3

To use: https://krittika-chatbot.krittika-das-cse-2021.workers.dev/
![Chatbot](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/9e952dec-9b93-4c60-8a42-284c45bb30ee)

3. Text to Image Generator AI
Unleash your creativity with our cutting-edge Text-to-Image Generator AI! Transform textual ideas into vibrant visual compositions effortlessly, bridging the gap between imagination and reality. Elevate your content creation experience, generating stunning images tailored to your words with unprecedented ease and precision.

Model used - stabilityai/stable-diffusion-xl-base: Diffusion-based text-to-image generative model by Stability AI. Generates and modify images based on text prompts.

To use: https://krittika-image-generator.krittika-das-cse-2021.workers.dev/
![text to image](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/0a509f9c-b76f-48eb-83dd-903aed0f8f69)

4. AI Image Classifier, Text Generator and Translator
Embark on a seamless visual journey with our Image Classifier, effortlessly categorizing and understanding images for enhanced comprehension. Immerse yourself in the realm of creativity as our Text Generator crafts engaging narratives from your prompts, bringing ideas to life. Break language barriers with our Translator, fostering global communication by swiftly converting text across diverse languages.

Model used - microsoft/resnet-50 : 50 layers deep image classification CNN trained on more than 1M images from ImageNet

Model used - meta/llama-2-7b-chat-int8 : Quantized (int8) generative text model with 7 billion parameters from Meta3

Model used - m2m100-1.2b : Multilingual encoder-decoder (seq-to-seq) model trained for Many-to-Many multilingual translation languages: english, chinese, french, spanish, arabic, russian, german, japanese, portuguese, hindi!
To use: https://image-text.krittika-das-cse-2021.workers.dev/
![image-classifier](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/b23db4c9-20e1-4f68-b525-30d4c4bdcdd8)

5. Speech Recognition and Translation
Experience seamless audio translation services tailored to your language preferences. Our advanced technology ensures accurate and efficient translation of audio files into your chosen language. Unlock a world of communication possibilities with our intuitive and reliable translation service.

Model used - openai/whisper: Automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data.

Model used - m2m100-1.2b : Multilingual encoder-decoder (seq-to-seq) model trained for Many-to-Many multilingual translation languages: english, chinese, french, spanish, arabic, russian, german, japanese, portuguese, hindi!

To use: https://krittika-chatbot.pratickgupta56.workers.dev/
![speech recog](https://github.com/hoomanbing/Diversion2024-TheKriticks/assets/91937177/98347df6-e464-47d9-961f-f67bb45fe913)

6. AR Service
Immerse yourself in a groundbreaking AR service where traditional books come to life! Our innovative solution transforms ordinary texts into interactive Augmented Reality experiences, complete with clickable links to relevant study materials. Navigate seamlessly through a multidimensional learning environment, unlocking a new era of engaging and enriched educational content.

Download the AR app here: https://drive.google.com/file/d/1LflgYj-NoG4gebUeo-c9ysP3jgEZLYfr/view 

### Note: Provide access to your Cloudflare Workers AI API before running the files.

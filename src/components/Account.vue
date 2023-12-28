<template>
  <div>
    <h2>Ścieżka do zostania programistą Java</h2>
    <ol>
      <li>Zacznij od nauki podstaw programowania.</li>
      <li>Zapoznaj się z podstawami języka Java.</li>
      <li>Zdobądź praktyczne doświadczenie poprzez pisanie prostych programów w Javie.</li>
      <li>Przejdź do bardziej zaawansowanych tematów, takich jak programowanie obiektowe, kolekcje, wyjątki, wątki itp.</li>
      <li>Przeczytaj książki lub uczestnicz w kursach online, które pomogą ci pogłębić swoją wiedzę na temat Javy.</li>
      <li>Praktykuj rozwijanie projektów Java w celu zwiększenia swojego portfolio.</li>
      <li>Aktualizuj się na bieżąco, śledząc nowe trendy i technologie związane z Javą.</li>
    </ol>

    <h2>Podstawowe kursy z serwisu YouTube</h2>
    <div class="youtube-videos">
      <div v-for="videoLink in videoLinks" :key="videoLink">
        <iframe
          width="560"
          height="315"
          :src="embedYouTubeVideo(videoLink)"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <h2>Ścieżka i potrzebna wiedza, aby zostać pragramistą Java</h2>
    <img :src="MyImage" alt="Moje zdjęcie" class ="zdj"/>
  </div>
</template>

<script>
import MyImage from '@/assets/images/road.png';
export default {
  name: 'Account',
  data() {
    return {
      videoLinks: [
        'https://www.youtube.com/watch?v=eIrMbAQSU34',
        'https://www.youtube.com/watch?v=OvY0f-IWlos',
        'https://www.youtube.com/watch?v=xk4_1vDrzzo',
      ],
      MyImage: MyImage,
    };
  },
  methods: {
    embedYouTubeVideo(link) {
      const videoId = link.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped>
.youtube-videos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
  grid-gap: 20px;
}
.zdj{
  display: block;
  margin: 0 auto;
}
</style>
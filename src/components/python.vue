<template>
    <div>
      <h2>Ścieżka do zostania programistą Python</h2>
      <ol>
      <li>Zdobądź podstawową wiedzę: Zacznij od nauki podstawowych koncepcji programowania, takich jak zmienne, pętle, warunki, funkcje itp. Możesz zacząć od podręczników online, kursów wideo lub podręczników do nauki Pythona.</li>
      <li>Wybierz odpowiedni kurs: Znajdź kurs lub samouczek Pythona, który pasuje do Twojego poziomu doświadczenia i celów. Możesz skorzystać z platform edukacyjnych, takich jak Coursera, Udemy, Codecademy, SoloLearn, które oferują różnorodne kursy Pythona.</li>
      <li>Ćwicz codziennie: Nie wystarczy tylko czytać lub oglądać materiały. Regularne ćwiczenia programowania są niezwykle ważne. Wykorzystaj platformy do ćwiczeń programowania, takie jak HackerRank lub Codewars, aby rozwiązywać codzienne wyzwania.</li>
      <li>Twórz własne projekty: Rozpocznij tworzenie własnych projektów, aby w praktyce stosować zdobytą wiedzę. Możesz zacząć od prostych programów, takich jak kalkulator, a następnie stopniowo przechodzić do bardziej zaawansowanych projektów.</li>
      <li>Przeczytaj dokumentację: Python ma dobrze udokumentowaną bibliotekę standardową oraz wiele modułów i narzędzi. Przeczytaj dokumentację, aby lepiej zrozumieć dostępne funkcje i możliwości języka Python</li>
      <li>Zbadaj zaawansowane tematy: Po opanowaniu podstaw Pythona, rozważ zgłębienie się w bardziej zaawansowane tematy, takie jak frameworki webowe (np. Django lub Flask), przetwarzanie danych (np. biblioteka pandas), uczenie maszynowe (np. biblioteka scikit-learn) itp.</li>
      <li>Praktykuj i nie poddawaj się: Programowanie to umiejętność, która wymaga czasu, praktyki i cierpliwości. Nie zrażaj się trudnościami na drodze i trzymaj się swojego celu. Im więcej będziesz ćwiczyć i tworzyć, tym lepszy programista Pythona staniesz się.</li>
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
      <h2>Ścieżka i potrzebna wiedza, aby zostać pragramistą Python</h2>
      <img :src="MyImage" alt="Moje zdjęcie" class ="zdj"/>
    </div>
  </template>
  
  <script>
  import MyImage from '@/assets/images/road1.png';
  export default {
    name: 'Account',
    data() {
      return {
        videoLinks: [
          'https://www.youtube.com/watch?v=4sJjPswo4kM',
          'https://www.youtube.com/watch?v=B9nFMZIYQl0',
          'https://www.youtube.com/watch?v=eWRfhZUzrAc',
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
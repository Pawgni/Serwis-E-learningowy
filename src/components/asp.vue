<template>
    <div>
      <h2>Ścieżka do zostania programistą ASP.NET Core Developer</h2>
      <ol>
        <li>Poznaj podstawy programowania: Zanim zaczniesz uczyć się ASP.NET Core, ważne jest, abyś miał solidne podstawy programowania. Warto zapoznać się z językami takimi jak C# (który jest powszechnie stosowany w ASP.NET Core), JavaScript, HTML i CSS.</li>
        <li>Zdobądź wiedzę na temat ASP.NET Core: ASP.NET Core to framework do budowania aplikacji internetowych. Znajomość jego podstawowych elementów jest niezbędna. Dobrym punktem wyjścia może być oficjalna dokumentacja Microsoft, która zawiera wiele przykładów i samouczków.</li>
        <li>Ucz się przez praktykę: Najlepszym sposobem na naukę ASP.NET Core jest tworzenie praktycznych projektów. Zacznij od prostych aplikacji, takich jak blog lub strona kontaktowa, a następnie stopniowo zwiększaj trudność i skomplikowanie projektów.</li>
        <li>Znajdź źródła nauki: W internecie jest wiele darmowych i płatnych zasobów, które mogą Ci pomóc w nauce ASP.NET Core. Możesz korzystać z kursów online, tutoriali, blogów, podręczników, a także dołączyć do społeczności programistów ASP.NET Core, gdzie możesz zadawać pytania i dzielić się wiedzą.</li>
        <li>Zdobądź wiedzę na temat ASP.NET Core: ASP.NET Core to framework do budowania aplikacji internetowych. Znajomość jego podstawowych elementów jest niezbędna. Dobrym punktem wyjścia może być oficjalna dokumentacja Microsoft, która zawiera wiele przykładów i samouczków.</li>
        <li>Twórz portfolio: Przygotuj portfolio, w którym będziesz prezentować projekty, które stworzyłeś. To pomoże Ci w zdobywaniu pracy lub kontraktów.</li>
        <li>Bądź na bieżąco: Świat programowania stale się zmienia, więc ważne jest, aby być na bieżąco z najnowszymi trendami i aktualizacjami dotyczącymi ASP.NET Core. Śledź oficjalne źródła informacji, takie jak blogi i fora programistyczne.</li>
        <li>Ucz się od innych: Współpraca z innymi programistami może być bardzo wartościowa. Dołącz do społeczności programistów, uczestnicz w spotkaniach i konferencjach, a także ucz się od bardziej doświadczonych programistów.</li>
        <li>Praktyka i cierpliwość: Programowanie to umiejętność, która wymaga czasu i praktyki. Bądź cierpliwy i nie zrażaj się trudnościami. Im więcej będziesz ćwiczyć, tym lepszy programista się staniesz.</li>
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
      <h2>Ścieżka i potrzebna wiedza, aby zostać pragramistą ASP.NET Core Developer</h2>
      <img :src="MyImage" alt="Moje zdjęcie" class ="zdj"/>
      <img :src="MyImage1" alt="Moje zdjęcie" class ="zdj"/>
    </div>
  </template>
  
  <script>
  import MyImage from '@/assets/images/road2.png';
  import MyImage1 from '@/assets/images/road4.png';
  export default {
    name: 'Account',
    data() {
      return {
        videoLinks: [
          'https://www.youtube.com/watch?v=bKCzoR01lpE',
          'https://www.youtube.com/watch?v=q2AcJmB03Io&list=PL82C6-O4XrHde_urqhKJHH-HTUfTK6siO',
          'https://www.youtube.com/watch?v=AopeJjkcRvU',
        ],
        MyImage: MyImage,
        MyImage1: MyImage1,
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
---
title: "Vue vs React: który framework wybrać na początek? Porównanie."
description: W tym artykule porównamy sobie dwa najpopularniejsze frameworki frontendowe. Sprawdzimy, który z nich najlepiej nadaje się na początek przygody z programowaniem, a także zobaczymy sobie podobieństwa i różnice między nimi.
date: 2023-10-17
author: Krzysztof Ciemny
images:
  [
    "/images/blog/post3/post3_img1.webp",
    "/images/blog/post3/post3_img2.webp",
    "/images/blog/post3/post3_img3.webp",
  ]
alt: image with vue vs react logos
---

**Wybór pierwszego frameworka może być ciężki. Jest wiele czynników, którymi kierujemy się w naszym wyborze, a najczęstsze z nich to zapewne próg wejścia i ilość ofert pracy w danej technologii (to chyba najważniejszy czynnik co? ;) ).**

**Moim pierwszym wyborem był React, jednak szybko przerzuciłem się na Vue gdy trafiła mi się oferta pracy. Przez to, że działają one podobnie i w gruncie rzeczy mają to samo zadanie, wejście w Vue było łatwiejsze dzięki poznaniu podstaw Reacta. W każdym razie chciałbym, aby ten artykuł pomógł wam w podjęciu tej trudnej decyzji.**

## Czym w ogóle są frameworki?

**Framework jest to struktura lub zestaw bibliotek i narzędzi do języka programowania, który pozwala na tworzenie aplikacji w szybszy, bardziej efektywny, wydajniejszy i bezpieczniejszy sposób.** Frameworki bardzo ułatwiają pisanie kodu i czynią pracę przyjemną, a do tego są to potężne narzędzia umożliwiające tworzenie dużych aplikacji i skomplikowanych rozwiązań.

W tym artykule skupiamy się na dwóch z trzech (trzeci to Angular, w którym nigdy nie pisałem i dlatego nie jest tu uzględniony) najbardziej popularnych frameworkaó frontendowych opartych na JavaScript.

## Popularność

<img src="/images/blog/post3/postImages/imageOfMostPopularFrontendFrameworks.png" alt="Image of most popular frontend frameworks" loading="lazy" style="border-radius: 0.5rem;"/>

Zacznijmy od tego, który framework jest bardziej popularny. Myślę, że jest to jedna z ważniejszych rzeczy dla początkującego programisty.

Od kilku lat, tak jak widać na pięknej grafice na górze, **najbardziej popularnym frameworkiem jest React**. Oznacza to, że ma on największą społeczność, która dba o jego rozwój, a także to, że znajdziemy najwięcej ofert pracy na frontend developera właśnie z Reactem. Dzięki tej popularności jest też do niego dostępnych więcej materiałów do nauki niż do innych frameworków.

Jeżeli chodzi o **Vue to plasuję się on pod względem popularności na trzecim miejscu za Reactem i Angularem**. Osobiście uważam, że mniejsza popularność nie koniecznie jest tutaj minusem. Ofert pracy w Vue jest mniej, ale jest też mniejsza konkurencja, więc jest większa szansa na dostanie pracy. Jeżeli chodzi o materiały do nauki to w dzisiejszych czasach nie braknie tych materiałów chyba do niczego, także o to bym się nie martwił.

**Poniżej możecie jeszcze zobaczyć wykres przedstawiający wskaźnik wykorzystywania frameworków frontendowych.**

<img src="/images/blog/post3/postImages/imageOfMostUsedFrontendFrameworksChart.png" alt="Image of most used frontend frameworks" loading="lazy" style="border-radius: 0.5rem;"/>

Jak widać czołówka trzyma się stabilnie od kilku lat (znalazłem wykres tylko do 2022, ale jestem przekonany że wielę się nie zmieniło), więc nie ma się co martwić że któraś z omawianych technologii straci na popularności.

## Poziom trudności

Ogólnie to nie jest tak, że jeden z tych frameworków jest jakoś mocno trudniejszy od drugiego. Są one do siebie podobne i w gruncie rzeczy służą do tego samego. Jeżeli jednak wrócę do momentu, w którym stawiałem pierwsze kroki z Reactem i Vue to **dla mnie osobiście niższy próg wejścia ma Vue.**

Składnia Vue przypomina bardziej tradycyjne podejście do tworzenia aplikacji, więc gdy przechodzisz z podstawowego stacku HTML, CSS i JS to łatwiej jest odnaleźć się w nowym środowisku. Składnia Reacta natomiast odbiega od podziału na HTML i JS, który znamy i opiera się na tworzeniu komponentów, które zwracają nam kod wyglądający jak Html, ale będący pod spodem JavaScriptem, czyli **JSX**.

Spójrzcie na prosty counter napisany w obydwu frameworkach:

```vue
// Vue

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
};
</script>
```

```javascript
// React

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

Jak widzicie, ich składnia się trochę różni. Sami wybierzcie, która jest dla was bardziej czytelna.

Kolejną rzeczą jest struktura projektu. React oferuje dużą swobodę i elastyczność w tworzeniu struktury, za to Vue jest w tym aspekcie bardziej sztywne i wyznacza nam trochę drogę, co może być korzystne dla początkującego programisty.

Podsumowując, uważam, że nie ma znaczącej różnicy w poziomie trudności, więc nie kierowałbym się akurat tym aspektem. Wszystko jest do ogarnięcia ;)

## Podobieństwa i różnice

<img src="/images/blog/post3/postImages/imageOfSimilarityOfReactAndVue.png" alt="Image of similarity of React and Vue" loading="lazy" style="border-radius: 0.5rem;"/>

Obydwa narzędzia mają to samo zadanie, czyli budowanie interfejsu użytkownika przy użyciu komponentów. Są one więc z natury do siebie podobne. Mają podobne podejście do obsługi stanu i zarówno Vue jak i React korzystają z Virtual DOM do renderowania zmian w UI.

Różni je, chociażby wspomniana wyżej składnia jak i podejście do struktury projektu. Różnią się również podejściem do reaktywności, ale nie chcę się tutaj zagłębiać w tematy, którę dopiero będziecie poznawać ucząc się frameworków.

## Podsumowanie

No więc moim zdaniem nie ma jednej słusznej odpowiedzi na pytanie "który framework wybrać na start?". Jest wiele czynników, które mogą definiować twój wybór. Polecam napisać sobie coś prostego w jednym i drugim, żeby mieć realny wgląd w kod. Polecam też nie zastanawiać się za długo nad wyborem, bo tak naprawdę gdy już nauczysz się jednego frameworka to nauka drugiego przyjdzie dużo łatwiej, więc będzie można zawsze przeskoczyć na ten drugi.

**Na koniec jeszcze dodam że jeżeli miałbym na nowo podejmować tę decyzję to prawdopodobnie wybrałbym Reacta ze względu na większą ilość ofert pracy. Nie uważam, jednak że jest to jedyny słuszny wybór.**

Dla tych, co chcieliby jeszcze posłuchać na ten temat, dorzucam [**film Hello Romana o tej samej tematyce**](https://www.youtube.com/watch?v=uRB5gOt0DhQ&ab_channel=helloroman), a do tego linki do dokumentacji [**Vue**](https://vuejs.org/) i [**Reacta**](https://react.dev/) i polecam od tego zacząć naukę ;D

Powodzenia w podejmowaniu decyzji i do zobaczenia!

---
title: Jak używać gita? Czym jest i do czego służy?
description: W tym artykule dowiesz się o tym czym jest i do czego służy git. Dowiesz się również jak go używać i nauczysz się podstawowych komend gita. Dzięki poznaniu podstaw gita twoja codzienna praca z kodem będzie dużo wydajniejsza.
date: 2023-10-14
author: Krzysztof Ciemny
images:
  [
    "/images/blog/post2/post2_img1.webp",
    "/images/blog/post2/post2_img2.webp",
    "/images/blog/post2/post2_img3.webp",
  ]
alt: git logo
---

**Gdy zaczynałem uczyć się programowania myślałem o gicie jak o jakiejś niepotrzebnej rzeczy wymagającej poświęcenia czasu, który mógłbym wykorzystać chociażby na szlifowanie JSa. Myślałem sobie, że muszę się nauczyć jak używać gita tylko dlatego, ponieważ wymagają tego podczas rekrutacji. Teraz już wiem, że miałem złe podejście do tego narzędzia i chcę abyś Ty spojrzał na tą technologię inaczej niż ja patrzyłem.**

## Czym jest Git?

Git to **rozproszony system kontroli wersji**, który pozwala na śledzenie zmian w plikach, zarządzanie historią projektu oraz przywracanie wcześniejszych wersji kodu. Dzięki gitowi nad jednym projektem może pracować cały zespół programistów bez wchodzenia sobie w drogę.

### Rozproszony system kontroli wersji

Brzmi strasznie, ale jest to całkiem proste. W skrócie, oznacza to, że oprócz **zdalnej kopii kodu, która jest umieszczona na serwerze** każdy z programistów pracujących przy projekcie **posiada na swoim komputerze lokalną kopię kodu,** którą może w dowolnym momencie aktualizować, zaciągając najnowsze zmiany ze zdalnego repozytorium. Dzięki takiemu podejściu kod źródłowy jest dobrze zabezpieczony, ponieważ istnieje wiele jego kopii.

## Do czego służy Git?

Głównym zadaniem gita jest zapisywanie zmian poczynionych w plikach w trakcie tworzenia aplikacji. Dzięki temu narzędziu jesteśmy w stanie stworzyć historie zmian i możemy w każdej chwili wrócić do kodu sprzed jakiejś zmiany, gdy tylko zajdzie taka potrzeba.

Ogromną zaletą gita jest również duże ułatwienie pracy przy jednym projekcie wielu programistom. Wystarczy, że każdy sklonuje na swój lokalny komputer zdalne repozytorium i już można zaczynać pracę. Do tego, dzięki tworzeniu gałęzi oraz częstemu wysyłaniu i pobieraniu zmian unikniemy konfliktów i nie będziemy wchodzić sobie w drogę.

## Serwery Gita

Serwery Gita służą do przechowywania repozytoriów. **Ich główne funkcje to przechowywanie kodu źródłowego i zapewnianie programistom dostępu do niego**. Aktualnie jest dostępnych kilka serwerów gita, ale ja używałem dwóch. Są to **Github i Gitlab**, z czego Github jest zdecydowanie najbardziej popularny i właśnie jego polecam na start.

**Szczególnie dla ludzi, którzy aspirują do zostania junior developerem, polecam traktowanie Githuba jak takiego Facebooka dla naszego kodu. Dobrze zrobiony profil, kilka fajnych projektów i ładna historia commitów napewno przybliżą do uzyskania pierwszej pracy.**

## Jak zacząć używać gita?

No dobra, gdy już wiemy czym jest i do czego służy, możemy zająć się pracą z gitem.

### Instalacja

Na początek musimy **zainstalować gita globalnie** na naszym komputerze. Instalacja może się różnić w zależnosci od systemu, którego używamy, dlatego nie będę tutaj o tym pisał, tylko odsyłam was do [poradnika prosto z Githuba](https://github.com/git-guides/install-git).

### Konfiguracja

Gdy mamy już zainstalowanego gita, musimy go skonfigurować podając mu nasze dane użytkownika, takie jak imię i e-mail. Robimy to wpisując w teriminalu takie polecenia:

```bash
git config --global user.name "Twoje Imię i Nazwisko"
git config --global user.email "twoj@email.com"
```

### Tworzenie pierwszego repozytorium

Aby stworzyć nasze pierwsze repozytorium musimy przejść do projektu, w którym chcemy zacząć używać gita. Może być to nowy projekt lub taki, w którym już coś pisaliśmy. W terminalu wpisujemy:

```bash
git init
```

Od teraz możemy zacząć używać gita w naszym projekcie! Juhuu!

## Podstawy pracy z gitem

Zacznijmy od tego że git posiada trzy stany, w których będą znajdować się pliki. Są to:

- **Working Directory**: jest to stan, w którym pracujemy z plikami, wprowadzamy zmiany i modyfikujemy je.
- **Staging Area**: używając komendy **git add** wprowadzamy zmodyfikowane pliki do tzw. poczekalni. W tym miejscu pliki oczekują na dodanie ich do repozytorium.
- **Local Repository**: w tym miejscu zapisywane są wszystkie zmienione pliki, które wybraliśmy. Robimy to za pomocą komendy **git commit**, która tworzy nam commit z naszymi zmianami i ich opisem.

No dobra, przejdźmy w końcu do praktyki.

Po zrobieniu zmiany w pliku, napiszmy w terminalu komendę

```bash
git add .
```

sprawi ona że wszystkie zmiany jakie zrobiliśmy trafią do poczekalni. Następnie piszemy:

```bash
git commit -m "mój pierwszy commit"
```

Teraz wszystkie zmienione pliki trafiły do naszego repozytorium w postaci **commita** opisanego jako 'mój pierwszy commit'. Wyjaśnijmy sobie jeszcze czym dokładnie jest commit.

**Commit jest operacją, która pozwala na zapisanie stanu projektu w określonym momencie**, aby można było do niego wrócić w przyszłości. Podczas tworzenia commita wybieramy jakie zmiany zostaną zapisane i opisujemy je. Myśle, że **można to porównać do zapisów w grach**. Tam też zapisujemy stan gry, aby móc wrócić do tego momentu w razie gdy coś się zepsuje.

Teraz zajrzyjmy do historii naszych commitów wpisując w terminalu komendę:

```bash
git log
```

Wynik tego polecenia będzie zawierał informacje o commitach (w naszym przypadku będzie to jeden commit), takie jak unikalne id, informacje o autorze, data czy opis dokonanych zmian.

### Tworzenie brancha

Branch czyli gałąź, **jest to odgałęzienie od głównego nurtu projektu**. Tworząc brancha mamy dostęp do wszystkich zmian poczynionych przed jego stworzeniem, ale wszystko co zostanie dodane już na tym branchu nie znajdzie się w głównym nurcie. Dopiero gdy będziemy pewni, że zmiany dodane na branchu są gotowe, będziemy mogli umieścić je z powrotem w głównym nurcie projektu.

**Zalety korzystania z gałęzi**:

- **Współpraca**: Możesz pracować nad swoimi zmianami niezależnie od innych członków zespołu.
- **Eksperymenty**: Tworzenie gałęzi pozwala na eksperymentowanie z nowymi funkcjami lub poprawkami bez wprowadzania zmian w stabilnej wersji projektu.
- **Izolacja**: Problemy w kodzie na gałęzi nie wpływają na pozostałe części projektu, dzięki czemu główna gałąź może pozostać stabilna.

Spróbujmy zrobić sobie pierwszego brancha. Do stworzenia nowej gałęzi używamy komendy:

```bash
git branch nazwa_brancha
```

Następnie przechodzimy na tą gałąź za pomocą komendy:

```bash
git checkout nazwa_brancha
```

W tym momencie jesteśmy na naszym nowym branchu i wszystkie zmiany jakie tutaj zrobimy **nie zostaną dodane do głównego nurtu projektu** czyli do **gałęzi main**.

Załóżmy teraz, że zrobiliśmy na branchu to co chcieliśmy i wszystko działa. W tym momencie chcielibyśmy dołączyć gałąź z powrotem do głównego nurtu. Aby tego dokonać będziemy musieli zrobić tak zwany **merge**. Przechodzimy z powrotem na główną gałąź:

```bash
git checkout main
```

Gdy jesteśmy już na branchu main, używamy komendy **merge** do połączenia nowego brancha z głównym nurtem:

```bash
git merge nazwa_brancha
```

Po wykonaniu tej komendy, zmiany z nowego brancha **zostaną scalone z głównym nurtem projektu** czyli branchem main.

## Dodawanie zmian do zdalnego repozytorium

Aby stworzyć zdalne repozytorium potrzebujemy mieć konto na jednym z serwerów gita. Polecam stworzyć konto w serwisie [Github](https://github.com/). Gdy już się zalogujemy, wchodzimy w zakładkę **Repositories**, następnie klikamy **new** i pokaże nam się coś takiego

<img src="/images/blog/post2/postImages/imageOfCreateNewRepositoryPageOnGithub.png" alt="Image of Create a new repository page on github" loading="lazy" style="border-radius: 0.5rem;"/>

Wpisujemy tylko nazwę repozytorium i klikamy **Create repository**. Wyświetli nam się instrukcja dodania lokalnego repozytorium do tego zdalnego.

<img src="/images/blog/post2/postImages/imageOfHowToAddRemoteRepo.png" alt="Image of How to add remote repo on github" loading="lazy" style="border-radius: 0.5rem;"/>

Jako, że my już mamy stworzone lokalne repo, interesować nas będzie druga instrukcja. W terminalu wpisujemy:

```bash
git remote add origin https://github.com/TwojaNazwaUżytkownika/TwojaNazwaRepo
git branch -M main
git push -u origin main
```

Po wpisaniu tych komend powinniśmy mieć stworzone zdalne repozytorium, które jest połączone z naszym lokalnym. Teraz każdy commit możemy od razu wysyłać do zdalnego repo przy użyciu komendy:

```bash
git push
```

## Dobre praktyki pracy z gitem

Na koniec jeszcze podsunę wam kilka dobrych praktyk pracy z gitem:

- **Korzystaj z gałęzi**: twórz i używaj gałęzi do prac nad nowymi funkcjami lub rozwiązywania problemów. To pozwoli uniknąć konfliktów i umożliwi równoczesną pracę wielu programistom.
- **Regularnie commituj zmiany**: Często dokonuj commitów swoich zmian z opisami, które jasno opisują, co zostało zmienione. Dzięki temu łatwiej będzie śledzić historię projektu.
- **Opisuj zmiany w komitach**: Staraj się pisać zwięzłe i zrozumiałe opisy zmian w każdym komicie. To ułatwi zrozumienie, co zmieniłeś w danym etapie projektu.
- **Zachowaj jednolitość**: Trzymaj się konwencji nazewnictwa gałęzi, komitów i ogólnych konwencji projektu. To ułatwia zrozumienie projektu i utrzymanie go.
- **Unikaj dużych komitów**: Staraj się nie dodawać zbyt wielu zmian do jednego komitu. Wartość komitów polega na tym, że mogą być łatwo analizowane, testowane i cofane.

Jest ich pewnie więcej, ale myśle że tyle wystarczy na początek.

## Podsumowanie

Poznane komendy:

- **git add**: dodaje zmienione pliki do poczekalni.
- **git commit**: zapisuje pliki z poczekalni w lokalnym repozytorium jako commit z opisem co zostało zmienione.
- **git log**: wyświetla informacje o commitach.
- **git branch nazwa_brancha**: tworzy nową gałąź.
- **git checkout nazwa_brancha**: przechodzi na podanego brancha.
- **git push**: wysyła zmiany z lokalnego do zdalnego repozytorium.
- **git merge nazwa_brancha**: łączy podaną gałąź z tą, na której aktualnie przebywamy.

Jak widzisz, git jest bardzo przydatnym i potężnym narzędziem, z którego warto korzystać. Do tego nie jest to takie trudne do zrozumienia i opanowania jak mogłoby się wydawać. Polecam Ci pobawić się przez godzinkę samemu z gitem, aby utrwalić poznaną wiedzę.

Powodzenia i do zobaczenia!

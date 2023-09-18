---
title: Tworzenie bloga z użyciem Next.js i plików Markdown
description: Kiedyś usłyszałem że każdy programista powinien mieć własnego bloga. Nie wiem czy się z tym zgadzam, ale wiem że jeden więcej projekt do CV i kolejna poznana technologia na pewno nie zaszkodzą. Dzisiaj stworzymy własnego bloga przy użyciu potężnej technologii jaką jest Next.js.
date: 2023-08-30
author: Krzysztof Ciemny
images:
  [
    "/images/blog/post1/post1_img1.webp",
    "/images/blog/post1/post1_img2.webp",
    "/images/blog/post1/post1_img3.webp",
  ]
alt: laptop on purple background
---

**Kiedyś usłyszałem że każdy programista powinien mieć własnego bloga. Nie wiem czy się z tym zgadzam, ale wiem że jeden projekt więcej do CV i kolejna poznana technologia na pewno nie zaszkodzą. Dzisiaj stworzymy własnego bloga przy użyciu potężnej technologii jaką jest Next.js.**

## Co to takiego ten Next.js?

Next.js to Reactowy framework, który umożliwia nam tworzenie nowoczesnych aplikacji webowych w trzech podejściach do ich renderowania.

- Static Site Generation (SSG)
- Client-Side Rendering (CSR)
- Server-Side Rendering (SSR)

Jako że blog to w większości statyczna treść, będziemy w tym projekcie korzystać głównie z SSG, ale też CSR (tak, można te podejścia mieszać!). O podejściach do renderowania aplikacji planuje zrobić osobny artykuł, jednak jeżeli już teraz chcesz się więcej o tym dowiedzieć to odsyłam do [dokumentacji Nexta](https://nextjs.org/docs/pages/building-your-application/rendering).

## Dlaczego akurat Next.js?

No dobra, ale dlaczego Next, a nie na przykład Gatsby.js, w którym również można łatwo i przyjemnie zrobić bloga przy użyciu SSG? Ja widzę dwa powody. Po pierwsze, Next daje nam duże możliwości rozwijania naszej aplikacji w przyszłości, na przykład poprzez dodanie do niej SSR, jeżeli byśmy tego potrzebowali. Po drugie, na rynku pracy jednak Next.js jest bardziej rozchwytywaną technologią niż Gatsby, a to, moim zdaniem, ma dosyć duże znaczenie.

## Tworzenie projektu

Po tym przydługim wstępie możemy w końcu przejść do tego po co tutaj przyszliście.

Zaczynamy od stworzenia nowego projektu. W terminalu wpisujemy:

dla npm

```bash
npx create-next-app@latest
```

dla yarn

```bash
yarn create next-app
```

Zostaniemy zapytani o kilka rzeczy, odpowiadamy wedle uznania, jednak na pewno Next rekomenduje użycie App Router i my właśnie tak zrobimy.

Gdy już odpowiemy na wszystkie pytania i nasz projekt zostanie stworzony, możemy otworzyć go w edytorze. Po otwarciu struktura plików powinna wyglądać tak

<img src="/images/blog/post1/postImages/image-of-folder-structure-in-nextjs.png" alt="Image of folder structure for Next.js application" loading="lazy" style="border-radius: 0.5rem;"/>

## Tworzymy strukturę bloga

Zacznijmy od postów na naszym blogu. Posty będziemy trzymali lokalnie, w naszym projekcie, jako pliki markdown przez co będziemy musieli odczytywać dane z systemu plików. Na początek, w root directory, stwórzmy folder o nazwie **posts**, a w nim stwórzmy dwa pliki z rozszerzeniem **.md**. Przykładowy plik markdown wygląda tak

```markdown
---
title: "My first post"
date: "20 sierpnia 2023"
---

Content of my first post
```

Jak widzisz, na samej górze pliku mamy sekcje z metadanymi, która zawiera **title** i **date**. Nazywa się to **Front Matter** i aby móc wyświetlić te dane będziemy potrzebowali biblioteki o nazwie [**gray-matter**](https://github.com/jonschlinkert/gray-matter). Instalujemy więc ją

```bash
npm i gray-matter
```

### Funkcja do odczytywania danych z systemu plików

Stwórzmy sobie nowy folder w root directory o nazwie **utils**, a w nim plik o nazwie **getPostMetadata.js** (oczywiście możecie nazwać folder i plik jak chcecie, ja poprostu nazwałem tak swój). Teraz w tym pliku stworzymy naszą funkcję. Poniżej wklejam całość, którą możecie sobie skopiować, a następnie wyjaśnię o co chodzi.

**_Notatka:_** Na ogół operacje pobierania danych powinno się wykonywać **asynchronicznie**, jednak przez to, że nasza aplikacja jest statycznie generowana i będzie pobierać te dane tylko raz, w trakcie buildu, to nie jest to dla nas aż tak znaczące. Nasz funkcja będzię odczytywać dane **synchronicznie**.

```javascript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "posts/";
  const fileNames = fs.readdirSync(folder);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default getPostMetadata;
```

Zacznijmy od importów **fs** i **path**. Obydwa są modułami Node.js, **fs** pozwala nam na czytanie plików z systemu, a **path** na manipulacje ścieżkami plików. Dalej mamy **matter**, które pozwala nam na parsowanie metadanych z każdego pliku markdown.

Przejdźmy do samej funkcji

```javascript
const folder = "posts/";
const fileNames = fs.readdirSync(folder);
const allPostsData = fileNames.map((fileName) => {
  ...
});
```

W tym miejscu tworzymy stałą **folder** ze ścieżką do naszych postów, następnie za pomocą metody **fs.readdirSync** pobieramy nazwy naszych plików i dalej mapujemy po nich.

```javascript
const allPostsData = fileNames.map((fileName) => {
  const fullPath = path.join(folder, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date,
    slug: fileName.replace(".md", ""),
  };
});
```

Następnie w stałej **fullPath** tworzymy pełną ścieżkę do pliku, a następnie w stałej **fileContents** odczytujemy zawartość pliku i kodujemy dane jako tekst w formacie UTF-8.

W **const matterResult** przekształcamy zawartość pliku przy użyciu funkcji **matter**, która zwraca obiekt zawierający metadane z naszego posta.

Na końcu zwracamy obiekt zawierający metadane. W tym miejscu pojawiła się nowa wartość jaką jest slug. Będzie on nam służył jako adres URL dla naszego posta, a tworzymy go z nazwy naszego pliku, usuwająć z niej rozszerzenie.

Polecam nazywać nasze pliki markdown w takiej konwencji: **my-first-blog-post.md**, dzięki temu nasz slug będzie wyglądał tak: **my-first-blog-post**

```javascript
return allPostsData.sort((a, b) => {
  if (a.date < b.date) {
    return 1;
  } else {
    return -1;
  }
});
```

Na samym końcu naszej funkcji **getPostMetadata** zwracamy posortowane metadane. Teraz możemy wyświetlić posty na stronie głównej.

### Wyświetlanie metadanych postów

<img src="/images/blog/post1/postImages/image-of-react-code.png" alt="Image of react code" loading="lazy" style="border-radius: 0.5rem;"/>

Importujemy **getPostMetadata** w naszym homePage, a nastęnie do stałej **postsMetadata** przypisujemy zwracaną przez naszą funkcję wartość (czyli metadane postów). Dalej wyświetlamy na ekranie nasze posty za pomocą metody map.

Jeżeli wszystko poszło dobrze to powinniśmy zobaczyć nasze posty.

<img src="/images/blog/post1/postImages/image-of-posts-displayed-on-the-screen.png" alt="Image of posts displayed on the screen" loading="lazy" style="border-radius: 0.5rem;"/>

## Tworzymy podstronę z naszym postem

No dobra, skoro już mamy na ekranie tytuły postów to teraz chcielibyśmy móc otworzyć poszczególne posty po kliknięciu na nie. Do tego użyjemy specjalnego komponentu jaki dostarcza nam Next.js o nazwie **Link**. Owrapujmy nim nasze posty i jako **href** przekażemy mu **slug** poprzedzony oczywiście nazwą folderu, w którym trzymamy nasz dynamiczny rout. Całość powinna wyglądać tak:

```javascript
<Link key={index} href={`/posts/${post.slug}`}>
  <li>
    <h2 className="text-2xl font-semibold">{post.title}</h2>
    <p>{post.date}</p>
  </li>
</Link>
```

Następnym krokiem będzie stworzenie potrzebnej nam struktury plików w folderze **app**.

### Struktura plików w App Routerze

Zacznijmy od tego że routy w Next.js definiujemy za pomocą folderów i plików w naszym folderze **app**. Oznacza to że każdy plik, który stworzymy w folderze **app**, będzie automatycznie dostępny jako ścieżka w naszym URL. Dodatkowo Next udostępnia możliwość tworzenia dynamicznych routów poprzez opakowanie nazwy folderu w nawiasy kwadratowe **[name]**. Po więcej informacji odsyłam do [**dokumentacji**](https://nextjs.org/docs/app/building-your-application/routing)

Idealnym rozwiązaniem dla nas będzie stworzenie dynamicznego routa, który będzie obsługiwał wszystkie nasze posty.

W folderze **app** tworzymy folder **posts**, następnie w środku **posts** tworzymy folder o nazwie **[slug]**, który będzie naszym dynamicznym routem, a w nim tworzymy plik page.js. Teraz struktura naszych plików powinna wyglądać tak

<img src="/images/blog/post1/postImages/image-of-blog-file-structure-app-router.png" alt="Image of blog file structure with app router" loading="lazy" style="border-radius: 0.5rem;"/>

Możemy teraz w naszym nowo powstałym pliku **page.js** stworzyć komponent o nazwie **PostPage**. Niech narazie wygląda on poprostu tak:

```javascript
const PostPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      This is post
    </main>
  );
};

export default PostPage;
```

Teraz po kliknięciu na tytuł posta otwiera nam się nasze **PostPage** i widzimy jego wyrenderowaną zawartość. Następnym krokiem będzie wyświetlenie zawartości naszych postów.

### Renderowanie zawartości postów

Bierzmy się za najważniejszą rzecz na naszym nowym blogu czyli wyświetlanie postów. Chcemy aby działało to tak że po kliknięciu w któryś z postów nasz komponent **PostPage** wyrenderuje nam dokładnie ten post, który chcieliśmy.

Pierwszą rzeczą jaką musimy zrobić jest rozpoznanie, który post ma być wyświetlony. Do tego możemy użyć **slugu** posta, którego chcemy wyświetlić.

Do naszego **page.js**, który jest wewnątrz dynamicznego routu **[slug]** jest przekazywany jako parametr właśnie nasz **slug**. Skoro już to wiemy wystarczy tylko przyjąć przychodzącą wartość jako propsa. Zrobimy to tak:

```javascript
const PostPage = (props) => {
  const slug = props.params.slug;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      This is post: {slug}
    </main>
  );
};

export default PostPage;
```

Następnie gdy już jesteśmy w stanie określić, który post ma zostać wyrenderowany, stworzymy sobie funkcję, która będzie jako argument przyjmować **slug**, będzię szukać odpowiedniego posta, przeczyta jego kontent i zwróci go.

Nazwijmy ją sobie **getPostContent**. Nasz kod powinien wyglądać tak:

```javascript
import fs from "fs";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const postContent = getPostContent(slug);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {postContent}
    </main>
  );
};

export default PostPage;
```

Właśnie wyrenderowaliśmy nasz post!! Ale to jeszcze nie wszystko. Narazie wyświetlamy poprostu tekst z pliku markdown, a nie o to do końca chodzi. Teraz musimy sformatować nasz kontent aby wyświetlał się prawidłowo i przyjemnie dla oka.

Użyjemy do tego biblioteki o nazwie [**markdown-to-jsx**](https://www.npmjs.com/package/markdown-to-jsx). Instalujemy ją

```bash
npm i markdown-to-jsx
```

Następnie importujemy komponent **Markdown** w naszym **PostPage** i oplatamy nim kontent wyświetlanego posta.

```javascript
return (
  <main className="flex min-h-screen flex-col items-center p-24">
    <Markdown>{postContent}</Markdown>
  </main>
);
```

Teraz wygląda to już znacznie lepiej, ale odrazu rzuca się w oczy kolejna rzecz do zmiany. Widzimy nasze metadane jako część kontentu posta, a raczej nie powinno tak być.

<img src="/images/blog/post1/postImages/image-of-post-metadata.png" alt="Image of post metadata displayed on the screen" loading="lazy" style="border-radius: 0.5rem;"/>

Chcemy jakoś ukryć metadane i wyświetlić osobno od zawartości posta. Możemy to zrobić używając [**gray-matter**](https://github.com/jonschlinkert/gray-matter), które zainstalowaliśmy w naszym projekcie już wcześniej.

Musimy przerobić naszą funkcje **getPostContent**, a dokładniej, musimy zwracany z niej **content** przepuścić przez funkcje **matter**. Dodatkowo wyświetlimy sobie **title** i **date** osobno, nad kontentem posta.

```javascript
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-slate-500">{post.data.date}</p>
      <h1 className="text-3xl font-bold text-center mb-8">{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </main>
  );
};

export default PostPage;
```

Dzięki **gray-matter** możemy osobno wyciągnąć **content** jak i **data** posta i wyświetlić je na ekranie. Końcowy efekt powinien wyglądać tak:

<img src="/images/blog/post1/postImages/image-of-post-displayed-on-screen-in-his-final-state.png" alt="Image of post displayed on the screen in his final state" loading="lazy" style="border-radius: 0.5rem;"/>

Już prawie koniec, została nam ostatnia rzecz do zrobienia.

## Statyczne generowanie treści

Na początku tego artykułu pisałem o trzech podejściach do renderowania treści w Next.js i o tym że nasz blog będzie renderowany głównie w podejściu statycznym. Aktualnie Next nie ma bladego pojęcia że chcemy użyć **SSG** do renderowania postów i z tego powodu używa do tego **SSR**. Naszym zadaniem jest teraz dać znać że chcemy aby nasze posty były renderowane statycznie w czasie budowania aplikacji.

Aby osiągnąć zamierzony cel użyjemy **specjalnej funkcji** o nazwie [**generateStaticParams**](https://nextjs.org/docs/app/api-reference/functions/generate-static-params). Pozwoli nam ona na to aby nasze dynamiczne ścieżki do plików markdown (Te, które tworzymy za pomocą [slug]) były generowane statycznie podczas budowania aplikacji.

Do komponentu PostPage dodajemy naszą funkcję

```js
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
```

Chodzi tutaj poprostu o to aby zwrócić z tej funkcji liste obiektów, w których kluczem będzie to co mamy wpisane w **dynamicznym roucie**, czyli w naszym przypadku **slug**, a wartością będzie to co chcemy aby było wyrenderowane statycznie, czyli nasze **posty**.

No i pięknie! Właśnie skończyliśmy pisać naszego bloga w Next.js.

## Podsumowanie

Jeżeli doszedłeś/aś do tego momentu to brawo dla Ciebie! Od teraz jesteś dumnym posiadaczem swojego własnego **bloga**. No może jeszcze nie do końca jest to blog, który nadaje się do publikacji. Przydałoby się trochę więcej treści na stronie i jakieś odjazdowe stylowanie, ale wierzę że z tym już poradzisz sobie na własną rękę.

Na koniec chcę Ci jescze powiedzieć że swojego bloga (tak, tego, na którym właśnie jesteś) stworzyłem dokładnie tą samą metodą. Zachęcam do spojrzenia do [**repozytorium**](https://github.com/KrzysztofCiemny/FrontNerd-blog), może w moim kodzie znajdziesz dodatkowo jeszcze coś pomocnego.

Powodzenia w dalszym kodzeniu i do zobaczenia!

## Źródła

[**Pixegami Ssatic blog tutorial**](https://www.youtube.com/watch?v=Hiabp1GY8fA&t=1086s&ab_channel=pixegami)

[**Next.js simple blog tutorial**](https://nextjs.org/learn/basics/data-fetching)

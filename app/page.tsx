import Header from './components/Header';
import Calculator from './components/Calculator';
import ResultBox from './components/ResultBox';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-bg-color justify-center min-h-screen bg-background text-foreground">

      <Header />

      <section className="flex flex-col rounded-3xl bg-container-bg-color md:flex-row items-center justify-center gap-8 w-full min-h-96 max-w-5xl p-5">
        <article aria-labelledby="calculator-section" className="w-full">
          <h2 id="calculator-section" className="sr-only">Calculator</h2>
          <Calculator />
        </article>

        <article aria-labelledby="result-section" className="w-full">
          <h2 id="result-section" className="sr-only">Result Box</h2>
          <ResultBox />
        </article>
      </section>
    </main>

  );
}

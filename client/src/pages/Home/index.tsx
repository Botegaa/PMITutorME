import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <p>This is where you can find the latest updates and news.</p>

        <a href="/student-login">Login do estudante</a>
        <a href="/profile">Perfil</a>
      </main>
      <Footer />
    </>
  );
}

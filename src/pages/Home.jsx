import { Nav } from "../components/Nav"
import { Socials } from "../components/Socials"
import { Footer } from "../components/Footer"

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <img src="images/circular_me.png" alt="Robert Stacks Photo" 
          id="my-photo" />
        <h1 id="name-tag">Robert Stacks</h1>
        <h2 id="tagline">Computer Science @ Texas A&M University</h2>
        <Socials />
      </main>
      <Footer />
    </>
  );
}

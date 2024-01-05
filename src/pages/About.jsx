import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"

export function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About | Robert Stacks</title>
        <link rel="icon" href="images/newest-resume-icon.ico" />
      </Helmet>
      <Nav />
      <main>
        <p>
          Howdy! As I'm sure you've gathered, I'm Robert, a sophomore computer science
          major at Texas A&M University. Here are some quick facts about me:
          - I'm a teaching assistant AND a peer teacher for the Texas A&M
          Department of Computer Science and Engineering
          - I worked on some cool projects with the Aggie Coding Club
          - I've become interested in cybersecurity with the help of the
          Texas A&M Cybersecurity Club
          - I recently earned a GFACT certification from GIAC
          - I'm currently studying for the CompTIA Security+ certification

          Maybe link to ACC and CyberClub websites?

          If you're interested in learning more, have a look around!

          link
          Here's some more quick facts:

        </p>
      </main>
      <Footer />
    </HelmetProvider>
  );
}

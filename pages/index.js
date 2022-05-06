import { Hero, Main } from "../sections";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const mainProps = {
  image: { src: "/img/video.png", alt: "", width: 329, height: 525 },
  title: "Managed agency selection",
  description: "Strengthen your onboarding proccess",
  cards: [
    {
      icon: "/img/icon1.png",
      title: "Search",
      description:
        "Complete <b>brief writing or simple guidance</b> or what to include, we've got you covered.",
      background: "#f9f9f9",
      width: "small",
      selected: false,
    },
    {
      icon: "/img/icon2.png",
      title: "Brief",
      description:
        "In-depth agency search covering; <b>criteria matching</b>, door knocking and due-dilligence vetting.",
      background: "#f4f4f4",
      width: "medium",
      selected: false,
    },
    {
      icon: "/img/icon3.png",
      title: "Pitch",
      description:
        "I Comprehensive <b>pitch management,</b> including comms, diary management and pitch hosting.",
      background: "#f1f1f1",
      width: "large",
      selected: true,
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        {/** Other sections */}
        <Main {...mainProps} />
      </div>
    </>
  );
}

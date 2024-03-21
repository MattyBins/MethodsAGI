//import TypeIt from "typeit";

new TypeIt ("#heroHeader", {
  speed: 40,
  delay: 450
})
  .type("ChatGPT, as you need it", {delay: 275})
  .move(-14)
  .type("simulated ")
  .move(14)
  .type(".")
  .go();
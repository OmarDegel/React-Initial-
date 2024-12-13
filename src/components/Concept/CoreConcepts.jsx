import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((content) => (
          <CoreConcept key={content.title} {...content} />
        ))}
      </ul>
    </section>
  );
}

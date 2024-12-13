import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section  from "./Section.jsx";
export default function Examples(){
    const TabContent=["Component","JSX","Props","Status"]
    const [select, setSelect] = useState(false);
    function HandleClick(select) {
      setSelect(select);
    }
    return (
    <Section title="Examples" id="examples">
          <menu>
            {TabContent.map(content=>(
              <TabButton key={content} onClick={()=>HandleClick(content)} isSelected={select===content}>{content}</TabButton>
            ))}

          </menu>
          {select ? (
            <div id="tab-content">
              <h3>{EXAMPLES[select].title}</h3>
              <p>{EXAMPLES[select].description}</p>
              <pre>
                <code>{EXAMPLES[select].code}</code>
              </pre>
            </div>
          ) : (
            <p>Select a tab</p>
          )}
        </Section>
    );
}
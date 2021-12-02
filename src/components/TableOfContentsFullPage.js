import React, { useState } from 'react';
import parse from "html-react-parser";
import '../assets/css/tablecontents.css';
import Grid from '@material-ui/core/Grid';

const style = {
  color: "#4a4a49",
 textDecoration: "none",
  
}

const Headings = ({ headings}) => {
  const [activeElement, setActiveElement] = useState();
  console.log("activeElement: ", activeElement); 
  return(
  <ul className="ul-list-headings">      
    {headings.map((heading) => (
      <li key={heading.title} className={(activeElement !== undefined && activeElement.isEqualNode(getElementsByInnerText(heading.title)))? "active" : ""}  >
        <a className="a-list-headings"
          href={getElementsByInnerText(heading.title)}
          onClick={(e) => {
            e.preventDefault();
            // activeElement(getElementsByInnerText(heading.title));
            // document.querySelector(`#${heading.id}`).scrollIntoView({
            //   behavior: "smooth"
            // });
            setActiveElement(getElementsByInnerText(heading.title));
            getElementsByInnerText(heading.title).scrollIntoView({
              behavior: "smooth"
            })

          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul className="ul-list-headings">
            {heading.items.map((child) => (
              <li key={child.title} className={(activeElement !== undefined && activeElement.isEqualNode(getElementsByInnerText(child.title)))? "active" : ""}  >
                <a className="a-sublist-headings"
                  href={getElementsByInnerText(child.title)}
                  onClick={(e) => {
                    e.preventDefault();
                    // activeElement(getElementsByInnerText(heading.title));
                    // document.querySelector(`#${child.id}`).scrollIntoView({
                    //   behavior: "smooth"
                    // });
                    setActiveElement(getElementsByInnerText(child.title));
                    getElementsByInnerText(child.title).scrollIntoView({
                      behavior: "smooth"
                    })
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
  
 ) 
 
}

const getElementsByInnerText = (innerText) => {
  var tags = document.querySelectorAll("h2,h3");
  
  console.log("tags: ",tags);
  var found;

  for (var i = 0; i < tags.length; i++) {
    if (tags[i].textContent == innerText) {
      found = tags[i];
      break;
    }
  }
  console.log("found: ", found);
  return found;

}

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("main h2, main h3")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

//create array of h2 (each h2 has h3 items array)
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title} = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        title,
      });
    }
  });

  return nestedHeadings;
};


const TableOfContents = () => {
  const { nestedHeadings } = useHeadingsData();
  return (
    <nav aria-label="Table of contents" >
      <Headings headings={nestedHeadings}/>
    </nav>
  );
};

const html = `
<h2>Overview</h2>
<h3>Introduction</h3>
<p>Speech synthesis is the fundamental component of many artificial intelligence systems. With our own ambition, FPT Technology Innovation Department has been working hard for nearly 8 years to launch FPT Speech Synthesis</p>
<h3>Application</h3>
<ul>
   <li><strong>automated call center,</strong> automated serving machine, maid robot ...</li>
   <li><strong>reading content for users</strong> when unable to monitor the screen, applications that read books automatically, ...</li>
</ul>
<figure class="table">
   <table>
      <tbody>
         <tr>
            <td>id</td>
            <td>Service name</td>
            <td>Accuracy</td>
            <td>Price</td>
            <td>Rate</td>
         </tr>
         <tr>
            <td>1</td>
            <td>Face Regconition</td>
            <td>99%</td>
            <td>$100</td>
            <td>5</td>
         </tr>
      </tbody>
   </table>
</figure>
<h2>Documentation</h2>
<h3>Installation</h3>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp;A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.</p>
<h3>Advanced</h3>
<p>&nbsp; &nbsp; &nbsp; &nbsp;Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</p>
<h3>Notice</h3>
<p>&nbsp; &nbsp; &nbsp; It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p>
<p>&nbsp; &nbsp; &nbsp; Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.</p>
<p>&nbsp; &nbsp; &nbsp;If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p>
<p>&nbsp; &nbsp; &nbsp; Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.</p>
<p>&nbsp; &nbsp; &nbsp;If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p>
<p>&nbsp; &nbsp; &nbsp; Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.</p>
<p>&nbsp; &nbsp; &nbsp;If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.</p>
<p>&nbsp;</p>
`
const html2=`<h2>Overview</h2><h3>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Introduction</h3><h3>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Installation</h3><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;This is the brief guide to installation….</p>`
  
const TableOfContentsFullPage = () => {
  return (
    <div className="container">
      <main>
        <div className="ck-content">
          <Grid container spacing={2}>
            <Grid xs={8} >
                {parse(html)}
            </Grid>
            <Grid xs={2}>
              <div className="list-headings">
              <TableOfContents />
              </div>
              
            </Grid>
          </Grid>
          
        </div> 
      </main>
      
    </div>
  );
};
export default TableOfContentsFullPage;


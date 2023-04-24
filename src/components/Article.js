import React from "react";

function Article(props) {
    const { title, date = "January 1, 1970", preview, minutes } = props;
  
    let emoji = "☕️"; // default emoji
  
    if (minutes >= 30) {
      const numBentoBoxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(numBentoBoxes);
    } else {
      const numCoffeeCups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(numCoffeeCups);
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <div>{emoji} {minutes} min read</div>
      </article>
    );
  }
  
  
  
export default Article;

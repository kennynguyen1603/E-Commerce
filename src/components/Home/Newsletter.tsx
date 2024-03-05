import React from "react";

export const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="Mainbox">
        <div className="content">
          <h1>Subscribe To Newsletter</h1>
          <p>Get free guide about smart watches daily. </p>
          <form>
            <input type="text" placeholder="Find the best product" />
            <button>Search</button>
          </form>
        </div>
        <img
            src="https://s3-alpha-sig.figma.com/img/bddd/4dfa/12447c769481c3ce9f23cb65fee7baac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSUyiltYT0BOQ8n6jF0oFu6C9AIVl~OPwQ5uVlApdLPbYG0S1k9KnkYvv-qPhcKlMTyoI1f2M8Km13ZuXnePkfD4aeQPhocf6ODYMWxrP7Vr1qPCA5XsfEeMEIGY41T7-04gjeHSg4dFkhukAh7K-Ytqmx4hkYyxebooYd7c5xJ2eHOKW8Qf7iO3gCVDZY834kJwkMS~~TOPvMkXc8yLQ~NNVlsjcR-cmH6MlpzWGUcdtxVSCxEI9YNhVobvG0UU0hL58VAKwwbAuYhlqAZE~QDELDw~ULVT8TcCe~u5o0pqSuKCvH~vSXFuNJ8dAUHTfCtUW-SfKx8g~MsVycGrQw__"
            alt=""
          />
      </div>
    </div>
  );
};

export default Newsletter;
